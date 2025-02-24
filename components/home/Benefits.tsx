import React from 'react';
import Image from 'next/image';

const Benefits= () => {
  return (
    <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl font-medium text-gray-700 mb-12">
        What you can avoid by using our application?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
          <div className="w-40 h-40 relative mb-6">
            <Image
              src="/home/emergency-response.jpeg"
              alt="Emergency Response Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
          
          <h3 className="text-xl font-medium text-gray-800 flex items-center mb-3">
            <span className="text-red-500 mr-2">⊘</span> 
            Delayed Emergency Response
          </h3>
          
          <p className="text-gray-600 text-center">
            Immediate access to medical guidance and emergency contacts prevents
            critical delays in care.
          </p>
        </div>

*        <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
          <div className="w-40 h-40 relative mb-6">
            <Image
              src="/home/waiting-line.jpeg"
              alt="Waiting Line Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
          
          <h3 className="text-xl font-medium text-gray-800 flex items-center mb-3">
            <span className="text-red-500 mr-2">⊘</span> 
            Long waiting line
          </h3>
          
          <p className="text-gray-600 text-center">
            Skip the lines, connect with doctors instantly.
          </p>
        </div>

*        <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
          <div className="w-40 h-40 relative mb-6">
            <Image
              src="/home/infection-risk.jpeg"
              alt="Infection Risk Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
          
          <h3 className="text-xl font-medium text-gray-800 flex items-center mb-3">
            <span className="text-red-500 mr-2">⊘</span> 
            Reduced Risk of Infections
          </h3>
          
          <p className="text-gray-600 text-center">
            Avoid exposure to contagious diseases by consulting doctors online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;