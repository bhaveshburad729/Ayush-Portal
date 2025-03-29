// import React, { useState } from 'react';

// const Licence = () => {
//   // State to track uploaded files for each document type
//   const [uploadedFiles, setUploadedFiles] = useState({});

//   // Upload links with unique identifiers
//   const uploadLinks = [
//     { id: 'manufacturingLicense', label: 'Manufacturing License', icon: '🌱' },
//     { id: 'siteLayout', label: 'Site Layout', icon: '🍃' },
//     { id: 'manufacturingProcess', label: 'Manufacturing Process', icon: '🌿' },
//     { id: 'productSpecification', label: 'Product Specification', icon: '🌼' },
//     { id: 'coppCertification', label: 'COPP Certification', icon: '🌸' },
//     { id: 'batchValidation', label: 'Batch Validation', icon: '🍀' },
//     { id: 'technicalStaff', label: 'Technical Staff', icon: '🌺' },
//     { id: 'manufacturingEquipment', label: 'Manufacturing Equipment', icon: '🌻' },
//     { id: 'hvacSystem', label: 'HVAC System', icon: '🍂' },
//     { id: 'safetyCompliance', label: 'Safety Compliance', icon: '🌷' },
//     { id: 'nonHerbalDeclaration', label: 'Non-herbal Declaration', icon: '🌹' }
//   ];

//   // Handle file upload for a specific document type
//   const handleFileUpload = (documentId) => (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadedFiles(prevFiles => ({
//         ...prevFiles,
//         [documentId]: file
//       }));
//     }
//   };

//   // Remove uploaded file for a specific document type
//   const removeFile = (documentId) => {
//     setUploadedFiles(prevFiles => {
//       const updatedFiles = {...prevFiles};
//       delete updatedFiles[documentId];
//       return updatedFiles;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-green-50 p-8">
//       <div className="max-w-6xl mx-auto">
//         <header className="text-center mb-12">
//           <div className="flex items-center justify-center mb-4">
//             <img 
//               src="assets/download.png" 
//               alt="Aayush Logo" 
//               className="w-180 h-180 mr-180"
//             />
//             <h1 className="text-4xl font-bold text-green-800">
//               AYUSH Licence Upload
//             </h1>
//           </div>
//           <p className="text-green-600 max-w-2xl mx-auto">
//             Licence needed for Approval
//           </p>
//         </header>

//         <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
//           {uploadLinks.map((link) => (
//             <div 
//               key={link.id}
//               className="block bg-white shadow-lg rounded-xl p-6 
//                          transform transition duration-300 
//                          hover:scale-105 hover:shadow-xl 
//                          border-l-4 border-green-500 
//                          hover:border-green-700"
//             >
//               <div className="flex items-center mb-4">
//                 <span className="text-4xl mr-4">{link.icon}</span>
//                 <h2 className="text-xl font-semibold text-green-800">
//                   {link.label}
//                 </h2>
//               </div>
              
//               {/* File Upload Input */}
//               <input
//                 type="file"
//                 id={`file-upload-${link.id}`}
//                 className="hidden"
//                 onChange={handleFileUpload(link.id)}
//               />
              
//               {/* Upload Button */}
//               <label 
//                 htmlFor={`file-upload-${link.id}`}
//                 className="cursor-pointer inline-flex items-center 
//                            bg-green-500 text-white px-4 py-2 
//                            rounded hover:bg-green-600 
//                            transition duration-300"
//               >
//                 Upload Document
//               </label>

//               {/* Uploaded File Display */}
//               {uploadedFiles[link.id] && (
//                 <div className="mt-4 flex items-center justify-between">
//                   <span className="text-sm text-green-700">
//                     {uploadedFiles[link.id].name}
//                   </span>
//                   <button 
//                     onClick={() => removeFile(link.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Optional: Submit All Uploaded Files */}
//         <div className="text-center mt-8">
//           <button 
//             className="bg-green-600 text-white px-8 py-3 rounded-lg 
//                        hover:bg-green-700 transition duration-300"
//             onClick={() => {
//               // Here you would typically send uploadedFiles to your backend
//               console.log('Uploaded Files:', uploadedFiles);
//               // Add your submission logic here
//             }}
//           >
//             Submit All Documents
//           </button>
//         </div>

//         <footer className="mt-12 text-center text-green-700">
//           <p>
//             Crafted with passion by{' '}
//             <a 
//               href="https://twitter.com/tapasadhikary" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="underline hover:text-green-900"
//             >
//               @tapasadhikary
//             </a>
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Licence;
import React, { useState } from 'react';

const Licence = () => {
  // State to track uploaded files for each document type and validation errors
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [uploadErrors, setUploadErrors] = useState({});

  // Upload links with unique identifiers and display labels
  const uploadLinks = [
    { id: 'manufacturingLicense', label: 'Manufacturing License', icon: '' },
    { id: 'siteLayout', label: 'Site Layout', icon: '' },
    { id: 'manufacturingProcess', label: 'Manufacturing Process', icon: '' },
    { id: 'productSpecification', label: 'Product Specification', icon: '' },
    { id: 'coppCertification', label: 'COPP Certification', icon: '' },
    { id: 'batchValidation', label: 'Batch Validation', icon: '' },
    { id: 'technicalStaff', label: 'Technical Staff', icon: '' },
    { id: 'manufacturingEquipment', label: 'Manufacturing Equipment', icon: '' },
    { id: 'hvacSystem', label: 'HVAC System', icon: '' },
    { id: 'safetyCompliance', label: 'Safety Compliance', icon: '' },
    { id: 'nonHerbalDeclaration', label: 'Non-herbal Declaration', icon: '' }
  ];

  // Handle file upload for a specific document type
  const handleFileUpload = (documentId) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        setUploadErrors((prevErrors) => ({
          ...prevErrors,
          [documentId]: 'Invalid file type. Please upload PDF, JPEG, or PNG.',
        }));
        return;
      }

      if (file.size > maxSize) {
        setUploadErrors((prevErrors) => ({
          ...prevErrors,
          [documentId]: 'File size exceeds 5MB limit.',
        }));
        return;
      }

      // Reset errors if validation passes
      setUploadErrors((prevErrors) => ({
        ...prevErrors,
        [documentId]: null,
      }));

      setUploadedFiles((prevFiles) => ({
        ...prevFiles,
        [documentId]: file,
      }));
    }
  };

  // Remove uploaded file for a specific document type
  const removeFile = (documentId) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = { ...prevFiles };
      delete updatedFiles[documentId];
      return updatedFiles;
    });

    // Clear errors for removed file
    setUploadErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[documentId];
      return updatedErrors;
    });
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            {/* <img
              src="assets/download.png"
              alt="Aayush Logo"
              className="w-36 h-36 mr-4"
            /> */}
            <h1 className="text-4xl font-bold text-green-800">
              AYUSH Licence Upload
            </h1>
          </div>
          <p className="text-green-600 max-w-2xl mx-auto">
            Upload the required documents for approval.
          </p>
        </header>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {uploadLinks.map((link) => (
            <div
              key={link.id}
              className="block bg-white shadow-lg rounded-xl p-6 
                         transform transition duration-300 
                         hover:scale-105 hover:shadow-xl 
                         border-l-4 border-green-500 
                         hover:border-green-700"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{link.icon}</span>
                <h2 className="text-xl font-semibold text-green-800">
                  {link.label}
                </h2>
              </div>

              <input
                type="file"
                id={`file-upload-${link.id}`}
                className="hidden"
                onChange={handleFileUpload(link.id)}
              />

              <label
                htmlFor={`file-upload-${link.id}`}
                className="cursor-pointer inline-flex items-center 
                           bg-green-500 text-white px-4 py-2 
                           rounded hover:bg-green-600 
                           transition duration-300"
              >
                Upload Document
              </label>

              {uploadedFiles[link.id] && (
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-green-700">
                    {uploadedFiles[link.id].name}
                  </span>
                  <button
                    onClick={() => removeFile(link.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              )}

              {uploadErrors[link.id] && (
                <p className="text-sm text-red-500 mt-2">
                  {uploadErrors[link.id]}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-green-600 text-white px-8 py-3 rounded-lg 
                       hover:bg-green-700 transition duration-300"
            onClick={() => {
              console.log('Uploaded Files:', uploadedFiles);
              alert('Documents uploaded successfully!');
            }}
          >
            Submit All Documents
          </button>
        </div>

        <footer className="mt-12 text-center text-green-700">
          <p>
            Built with care by{' '}
            <a
              href="https://twitter.com/tapasadhikary"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-900"
            >
              @tapasadhikary
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Licence;
