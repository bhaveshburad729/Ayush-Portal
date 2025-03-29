import React, { useState, useRef } from 'react';

const ImageResizer = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [originalRatio, setOriginalRatio] = useState(1);
  const [lockRatio, setLockRatio] = useState(true);
  const [reduceQuality, setReduceQuality] = useState(false);
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImageFile(file);
      setPreviewSrc(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageLoad = () => {
    const img = imageRef.current;
    setWidth(img.naturalWidth);
    setHeight(img.naturalHeight);
    setOriginalRatio(img.naturalWidth / img.naturalHeight);
  };

  const handleWidthChange = (e) => {
    const newWidth = Number(e.target.value);
    setWidth(newWidth);
    
    if (lockRatio) {
      const newHeight = Math.floor(newWidth / originalRatio);
      setHeight(newHeight);
    }
  };

  const handleHeightChange = (e) => {
    const newHeight = Number(e.target.value);
    setHeight(newHeight);
    
    if (lockRatio) {
      const newWidth = Math.floor(newHeight * originalRatio);
      setWidth(newWidth);
    }
  };

  const downloadImage = () => {
    if (!imageFile) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      
      // Draw image on canvas with new dimensions
      ctx.drawImage(img, 0, 0, width, height);
      
      // Create download link
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/jpeg', reduceQuality ? 0.5 : 1.0);
      link.download = `resized_image_${Date.now()}.jpg`;
      link.click();
    };
    
    img.src = URL.createObjectURL(imageFile);
  };

  const clearImage = () => {
    setImageFile(null);
    setPreviewSrc(null);
    setWidth(0);
    setHeight(0);
  };

  // SVG Icons
  const UploadIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="50" 
      height="50" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#3498db" 
      strokeWidth="1.5"
    >
      <path d="M21.2 15v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 8l-4-4-4 4" />
      <path d="M12 4v12" />
    </svg>
  );

  const CropIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#3498db" 
      strokeWidth="2"
    >
      <path d="M6.5 6.5h11v11h-11z" />
      <path d="M21 3l-3 3" />
      <path d="M6 21l-3-3" />
      <path d="M3 12h18" />
      <path d="M12 3v18" />
    </svg>
  );

  const DownloadIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );

  const ImageIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f6f8f9 0%, #e5ebee 100%)',
      fontFamily: "'Inter', sans-serif",
      padding: '20px'
    }}>
      <div style={{
        width: '500px',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
        padding: '40px',
        transition: 'all 0.3s ease',
        transform: imageFile ? 'scale(1)' : 'scale(0.95)',
        opacity: imageFile ? 1 : 0.9
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h2 style={{
            margin: 0,
            color: '#2c3e50',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <CropIcon />
            Image Resizer
          </h2>
          {imageFile && (
            <button 
              onClick={clearImage}
              style={{
                background: 'none',
                border: '1px solid #e74c3c',
                color: '#e74c3c',
                padding: '8px 15px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#e74c3c';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'none';
                e.target.style.color = '#e74c3c';
              }}
            >
              Clear <ImageIcon />
            </button>
          )}
        </div>

        <div 
          onClick={() => !imageFile && fileInputRef.current.click()}
          style={{
            border: '2px dashed #3498db',
            borderRadius: '15px',
            padding: '40px',
            textAlign: 'center',
            cursor: !imageFile ? 'pointer' : 'default',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <input 
            type="file" 
            accept="image/*" 
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
          {!imageFile ? (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '15px'
            }}>
              <UploadIcon />
              <p style={{ 
                color: '#2c3e50', 
                margin: 0,
                fontSize: '16px'
              }}>
                Drag and drop or click to upload image
              </p>
            </div>
          ) : (
            <img 
              ref={imageRef}
              src={previewSrc} 
              alt="Preview" 
              onLoad={handleImageLoad}
              style={{
                maxWidth: '100%',
                maxHeight: '300px',
                borderRadius: '10px',
                objectFit: 'contain'
              }}
            />
          )}
        </div>

        {imageFile && (
          <div style={{ marginTop: '30px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              gap: '20px' 
            }}>
              <div style={{ flex: 1 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '10px',
                  color: '#2c3e50' 
                }}>
                  Width
                </label>
                <input 
                  type="number" 
                  value={width} 
                  onChange={handleWidthChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #bdc3c7',
                    borderRadius: '10px',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '10px',
                  color: '#2c3e50' 
                }}>
                  Height
                </label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={handleHeightChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #bdc3c7',
                    borderRadius: '10px',
                    fontSize: '16px'
                  }}
                />
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: '20px' 
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '10px'
              }}>
                <input 
                  type="checkbox" 
                  id="ratio"
                  checked={lockRatio}
                  onChange={() => setLockRatio(!lockRatio)}
                  style={{ 
                    width: '20px', 
                    height: '20px' 
                  }}
                />
                <label 
                  htmlFor="ratio"
                  style={{ 
                    color: '#2c3e50',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <CropIcon /> Lock Aspect Ratio
                </label>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '10px'
              }}>
                <input 
                  type="checkbox" 
                  id="quality"
                  checked={reduceQuality}
                  onChange={() => setReduceQuality(!reduceQuality)}
                  style={{ 
                    width: '20px', 
                    height: '20px' 
                  }}
                />
                <label 
                  htmlFor="quality"
                  style={{ 
                    color: '#2c3e50',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <ImageIcon /> Reduce Quality
                </label>
              </div>
            </div>

            <button 
              onClick={downloadImage}
              style={{
                width: '100%',
                padding: '15px',
                background: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#2980b9';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#3498db';
              }}
            >
              <DownloadIcon /> Download Resized Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageResizer;