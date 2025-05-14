import { Link } from "lucide-react";

export default function Services() {
    return (
      <section id="services" className="min-h-screen py-24 bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 ">Professional Services</h2>
            <p className="text-lg text-gray-700 text-center mb-16 md:text-xl">Expert solutions for your land economics, valuation, and dispute resolution needs</p>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden service-card flex flex-col justify-between">
                <div className="h-56 bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Valuation Surveying</h3>
                  <p className="text-gray-600 mb-6 md:text-lg">Comprehensive property valuation services for residential, commercial, and industrial properties. Specializing in complex valuations for legal proceedings and dispute resolution.</p>
                  <Link href="#contact" className="text-red-600 font-medium hover:text-red-700 flex items-center mt-auto">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
  
              <div className="bg-white rounded-lg shadow-md overflow-hidden service-card flex flex-col justify-between">
                <div className="h-56 bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Arbitration & ADR</h3>
                  <p className="text-gray-600 mb-6 md:text-lg">Professional arbitration services by a registered MCIArb member. Specialized in resolving complex property disputes, landlord-tenant conflicts, and land acquisition disagreements.</p>
                  <Link href="#contact" className="text-red-600 font-medium hover:text-red-700 flex items-center mt-auto">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
  
              <div className="bg-white rounded-lg shadow-md overflow-hidden service-card flex flex-col justify-between">
                <div className="h-56 bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Learned Research</h3>
                  <p className="text-gray-600 mb-6 md:text-lg">Peer-reviewed research services focused on housing, urban development, and social equity. Deliverables include academic publications, policy briefs, and technical reports..</p>
                  <Link href="#contact" className="text-red-600 font-medium hover:text-red-700 flex items-center mt-auto">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }