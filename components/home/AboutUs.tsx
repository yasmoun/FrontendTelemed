import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl font-medium text-gray-700 mb-12">
        About Us
      </h2>

      <p className=" mx-auto text-lg text-gray-600 text-justify mb-12">
        At <span className="font-semibold text-green-600">Surviving TELEMED</span>, we believe that access to 
        <u> quality healthcare </u> should be <u> simple</u>, <u> secure</u>, and available to 
        <u> everyone</u>, <u> everywhere</u>. Our telemedicine platform is designed to connect 
        patients with trusted healthcare professionals in just a few clicks, making it easier than 
        ever to prioritize your well-being.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-600 leading-relaxed">
            With a focus on <u>innovation</u>, <u>privacy</u>, and <u>compassion</u>, we’ve created 
            a seamless experience that puts your health first. Whether you’re managing a chronic 
            condition, seeking expert advice, or simply need a quick consultation, our platform 
            ensures you receive <u>personalized</u>, <u>confidential</u>, and <u>reliable care</u> 
            from the comfort of your home.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/home/about.jpeg"
            alt="About Us"
            width={350}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
