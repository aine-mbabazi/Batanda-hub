'use client';


export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-24 bg-white flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-red-600 text-center">Professional Experience</h2>
          <p className="text-lg text-gray-600 text-center mb-16 md:text-xl">A proven track record of expertise in land economics and dispute resolution</p>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-100"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                  <h3 className="text-xl text-gray-800 font-bold md:text-2xl">Principal Valuation Surveyor</h3>
                  <p className="text-gray-600 md:text-lg">Whiteknights Valuers</p>
                </div>
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">2021</span>
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <p className="text-gray-700 md:text-lg">Leading property valuation services and providing expert guidance on complex valuation matters.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold md:text-2xl text-gray-800 ">Lecturer</h3>
                  <p className="text-gray-600 md:text-lg">Kyambogo University</p>
                </div>
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">2017</span>
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <p className="text-gray-700 md:text-lg">Teaching housing, valuation, and land management at the School of Built Environment.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold md:text-2xl text-gray-800 ">Valuation Surveyor</h3>
                  <p className="text-gray-900 md:text-lg">Associated Consulting Surveyors</p>
                </div>
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">2008</span>
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <p className="text-gray-700 md:text-lg">Provided comprehensive valuation services for various property types and purposes.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold md:text-2xl text-gray-800 ">Valuation Surveyor</h3>
                  <p className="text-gray-600 md:text-lg">Ideal Surveyors, Valuers and Real Estate Management Consultants</p>
                </div>
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">2007</span>
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <p className="text-gray-700 md:text-lg">Started professional career providing valuation and real estate management services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}