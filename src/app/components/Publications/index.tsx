export default function Publications() {
    return (
      <section id="publications" className="min-h-screen py-24 bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center">Selected Publications</h2>
            <p className="text-lg text-gray-700 text-center mb-16 md:text-xl">Recent academic contributions to the field of land economics and housing studies</p>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md publication-card">
                <h3 className="text-xl font-bold mb-3 md:text-2xl">Women-headed households and housing location preferences in the informal settlements</h3>
                <p className="text-gray-600 mb-4 md:text-lg">Mubiru, M. B., Nuhu, S., Kombe, W., & Limbumba, T. M. (2022)</p>
                <p className="text-gray-700 md:text-lg">What can we learn from Luzira, Uganda? Habitat International, 127, 102648.</p>
              </div>
  
              <div className="bg-white p-8 rounded-lg shadow-md publication-card">
                <h3 className="text-xl font-bold mb-3 md:text-2xl">Housing pathways of female-headed households in the informal settlements of Kampala</h3>
                <p className="text-gray-600 mb-4 md:text-lg">Mubiru, M. B., Nuhu, S., Kombe, W., & Mtwangi Limbumba, T. (2022)</p>
                <p className="text-gray-700 md:text-lg">A qualitative study. Housing Studies, 1-28.</p>
              </div>
  
              <div className="bg-white p-8 rounded-lg shadow-md publication-card">
                <h3 className="text-xl font-bold mb-3 md:text-2xl">Quality assurance measures of access systems for tenant retention in high-rise office buildings</h3>
                <p className="text-gray-600 mb-4 md:text-lg">Mubiru, M. B., & Naturinda, J. M. (2023)</p>
                <p className="text-gray-700 md:text-lg">Experiences from building users. Facilities, ahead-of-print.</p>
              </div>
  
              <div className="bg-white p-8 rounded-lg shadow-md publication-card">
                <h3 className="text-xl font-bold mb-3 md:text-2xl">Mobility challenges and experiences for students with disabilities in Tanzania universities</h3>
                <p className="text-gray-600 mb-4 md:text-lg">Mubiru, M. B. (2022)</p>
                <p className="text-gray-700 md:text-lg">Dealing with a social inclusion nightmare in property management. Property management.</p>
              </div>
            </div>
  
            <div className="text-center mt-12">
              <a href="#" className="inline-flex items-center text-red-600 font-medium hover:text-red-700 text-lg">
                View All Publications
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }