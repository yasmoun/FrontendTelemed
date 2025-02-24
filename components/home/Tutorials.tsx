import React from 'react';
import Image from 'next/image';

const Tutorials = () => {
  return (
    <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl font-medium text-gray-700 mb-12">
        What you can avoid by using our application?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 relative">
            <Image
              src="/home/Tuto.jpg"
              alt="Emergency Response"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-600 mt-2">Tutorial 1</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-40 h-40 relative">
            <Image
              src="/home/Tuto.jpg"
              alt="Waiting Room"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-600 mt-2">Tutorial 2</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-40 h-40 relative">
            <Image
              src="/home/Tuto.jpg"
              alt="Overcrowding"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-600 mt-2">Tutorial 3</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-40 h-40 relative">
            <Image
              src="/home/Tuto.jpg"
              alt="Missed Appointments"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-600 mt-2">Tutorial 4</p>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
