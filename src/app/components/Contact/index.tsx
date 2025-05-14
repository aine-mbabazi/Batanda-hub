import React from 'react';

function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-white py-24 flex items-center justify-center">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-5xl font-bold text-gray-800 mb-8">CONTACT</h2>
        <p className="text-xl text-gray-700 mb-16">
          You can reach out to me by either calling, emailing or via social media
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Address Section */}
          <div className="flex flex-col items-center p-8 border-r md:border-r-2 border-gray-300">
            <div className="text-red-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Address</h3>
            <p className="text-lg text-gray-600">Kampala, Uganda</p>
          </div>

          {/* Call Me Section */}
          <div className="flex flex-col items-center p-8 border-r md:border-r-2 border-gray-300">
            <div className="text-red-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Call Me</h3>
            <p className="text-lg text-gray-600">+256 774 137913</p>
          </div>

          {/* Email Me Section */}
          <div className="flex flex-col items-center p-8">
            <div className="text-red-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Email Me</h3>
            <p className="text-lg text-gray-600">mormoses06@gmail.com <br /> mmubiru@kyu.ac.ug</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;