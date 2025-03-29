import React from 'react';
// import { ExternalLinkIcon } from 'lucide-react';

const AyurvedaLicenseLink = () => {
  const handleLicensePortal = () => {
    // You would typically replace this with the actual license portal URL
    window.open('https://e-aushadhi.gov.in/login', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-6 transform transition-all hover:scale-105 hover:shadow-3xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-teal-700 mb-4">
            Ayurveda, Siddha & Unani
          </h1>
          <p className="text-gray-600 mb-6">
            Access Your Medical Licensing Portal
          </p>

          <div className="space-y-4">
            <button 
              onClick={handleLicensePortal}
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Open License Portal</span>
              
            </button>

            <div className="text-sm text-gray-500 text-center">
              Regulated by the Central Council of Indian Medicine (CCIM)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedaLicenseLink;