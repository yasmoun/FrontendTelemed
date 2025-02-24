import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Virtual Consultations",
    image: "/home/virtual-consultations.jpeg",
    description: "Our platform connects you directly with trusted doctors through secure video calls. Discuss your health concerns from the comfort of your home, ensuring convenience and prompt medical advice without the need for in-person visits.",
  },
  {
    title: "Worldwide Telemedicine",
    image: "/home/worldwide-telemedecine.png",
    description: "Our teleconsultation app empowers users worldwide to access quality healthcare anytime, anywhere.",
  },
  {
    title: "Smart Medication Search",
    image: "/home/smart-medecation-search.png",
    description: "Easily find information about any medication by simply uploading a photo.",
  },
  {
    title: "24/7 Availability",
    image: "/home/availability.png",
    description: "Access medical consultations anytime, day or night. Our healthcare professionals are ready to assist you round-the-clock through our secure platform, ensuring you never have to wait for essential medical advice.",
  },
  {
    title: "Multiple Specialties",
    image: "/home/mutiple-specialities.png",
    description: "Our platform hosts a wide range of medical professionals, including specialists. Whatever your health concern, find the right healthcare provider with just a few clicks.",
  },
  {
    title: "Digital Prescriptions",
    image: "/home/digital-prescreptions.png",
    description: "Skip the paperwork - get your prescriptions sent directly through our platform after your consultation. Safe, quick, and hassle-free. Keep track of all your prescriptions in one place.",
  },
  {
    title: "AI Health Assistant",
    image: "/home/ai-health-assistant.png",
    description: "Meet our friendly medical chatbot, available 24/7 to guide you through your health questions. Quick, reliable answers and initial health assessments at your fingertips.",
  },
  {
    title: "Pharmacy Locator",
    image: "/home/pharmacy-locator.png",
    description: "Find the nearest pharmacy in our network with our easy-to-use locator. Find a convenient pharmacy near you and collect your medications when it suits you.",
  },
  {
    title: "Anonymous Medical Q&A Platform",
    image: "/home/digital-prescreptions.png",
    description: "Skip the paperwork - get your prescriptions sent directly through our platform after your consultation. Safe, quick, and hassle-free. Keep track of all your prescriptions in one place.",
  }
];

const Services = () => {
  return (
    <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl font-medium text-gray-700 mb-12 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="mb-6">
              <Image
                src={service.image}
                alt={service.title}
                width={160}
                height={160}
                className="rounded-lg"
              />
            </div>

            <h3 className="text-xl font-medium text-gray-800 text-center mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
