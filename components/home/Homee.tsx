import React from 'react';
import Image from 'next/image';
const Homee: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white text-gray-900">
      <div className="text-center mt-10">
        <p className="text-2xl italic font-light">“ The greatest wealth is health ”</p>
        <p className="text-lg font-semibold text-gray-600">Virgil</p>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-8 px-6 md:px-20">
        <div className="w-full md:w-1/2 flex justify-center">
        <video autoPlay loop muted width="600">
        <source src="/home/telemedecine.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl font-bold">
            Welcome to <span className="text-black">Surviving</span> <span className="text-green-500">TELEMED</span>
          </h1>
          <p className="text-lg text-gray-600 mt-2">Your Trusted Health Partner</p>
        </div>
      </div>

      <div className="bg-gray-900 text-white flex flex-col md:flex-row items-center justify-around w-full mt-10 py-6 px-4 md:px-10 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <Image src="/home/boost-health.png" alt="Boost health" width={50} height={50} />
          <p className="mt-2 text-lg">Boost your health</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/home/save-time.png" alt="Save time" width={50} height={50} />
          <p className="mt-2 text-lg">Save your time</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/home/knowledge.png" alt="Enhance knowledge" width={50} height={50} />
          <p className="mt-2 text-lg">Enhance your knowledge</p>
        </div>
      </div>
    </div>
  );
}

export default Homee;