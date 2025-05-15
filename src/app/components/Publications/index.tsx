'use client';

import { useState } from 'react';
import type { MouseEvent } from 'react'; // Import MouseEvent

interface Publication {
  title: string;
  authors: string;
  journal: string;
  url: string;
}

export default function Publications() {
  // All publications data
  const allPublications: Publication[] = [
    {
      title: "The actors' symbiosis in the recurrence of slums after in-situ housing redevelopment initiatives",
      authors: "Mubiru MB and Nankya L (2023)",
      journal: "Journal of African Real Estate Research 8(1): 35-48",
      url: "https://doi.org/10.15641/jarer.v8i1.1303"
    },
    {
      title: "Women-headed households and housing location preferences in the informal settlements",
      authors: "Mubiru, M. B., Nuhu, S., Kombe, W., & Limbumba, T. M. (2022)",
      journal: "Habitat International, 127, 102648",
      url: "https://doi.org/10.1016/j.habitatint.2022.102648"
    },
    {
      title: "Housing pathways of female-headed households in the informal settlements of Kampala",
      authors: "Mubiru, M. B., Nuhu, S., Kombe, W., & Mtwangi Limbumba, T. (2022)",
      journal: "Housing Studies, 1-28",
      url: "https://doi.org/10.1080/02673037.2022.2077918"
    },
    {
      title: "Quality assurance measures of access systems for tenant retention in high-rise office buildings",
      authors: "Mubiru, M. B., & Naturinda, J. M. (2023)",
      journal: "Facilities, Vol. 41 No. 13/14, pp. 839-854",
      url: "https://doi.org/10.1108/F-08-2022-0106"
    },
    {
      title: "Mobility challenges and experiences for students with disabilities in Tanzania universities",
      authors: "Mubiru, M. B. (2022)",
      journal: "Property management, ahead-of-print",
      url: "https://doi.org/10.1108/PM-09-2021-0068"
    },
    {
      title: "'No Woman is an Island': The Housing Market Access Strategies by Female-Headed Households in Kampala",
      authors: "Mubiru, M. B., Kombe, W., & Limbumba, T. M. (2022)",
      journal: "International Journal of Social Science Research and Review, 5(6), 17-34",
      url: "https://doi.org/10.47814/ijssrr.v5i6.409"
    },
    {
      title: "A Review of Housing Policies and Their Relevance to Vulnerable Households in Sub-Saharan Africa",
      authors: "Mubiru, M. B., Nuhu, S., Kombe, W., & Limbumba, T. M. (2022)",
      journal: "International Journal of Social Science Research and Review, 5(7), 276-289",
      url: "https://doi.org/10.47814/ijssrr.v5i7.480"
    },
    {
      title: "Digesting how the gender of household heads determines housing location choices in Sub-Saharan African cities",
      authors: "Mubiru, M. B., Nuhu, S., Kombe, W., & Limbumba, T. M. (2023)",
      journal: "Gender, Place & Culture, 1-23",
      url: "https://doi.org/10.1080/0966369X.2023.2233708"
    },
    {
      title: "Tenants' Experiences Regarding Satisfaction with Existing Complaint Handling Mechanisms in Landlord-Managed Apartments in Kampala",
      authors: "Mubiru, M., & Naturinda, C. (2021)",
      journal: "Asian Journal of Science and Technology, 12(07), 11762-11769",
      url: "#" // No URL provided, using placeholder
    }
  ];

  // State to track whether we're showing all publications or just featured ones
  const [showAllPublications, setShowAllPublications] = useState(false);

  // Get the first 4 publications for the main view
  const featuredPublications = allPublications.slice(0, 4);

  // Function to handle the "View All Publications" button click
  const handleViewAllClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowAllPublications(true);
    // Scroll to the top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to handle the "Back to Featured" button click
  const handleBackClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowAllPublications(false);
    // Scroll to the top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Publication Item component for reuse
  const PublicationItem = ({ publication }: { publication: Publication }) => (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
      <a
        href={publication.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:no-underline"
      >
        <h3 className="text-xl font-bold mb-3 md:text-2xl text-gray-800 hover:text-red-600 transition-colors">{publication.title}</h3>
        <p className="text-gray-600 mb-4 md:text-lg">{publication.authors}</p>
        <p className="text-gray-700 md:text-lg">{publication.journal}</p>
        <div className="mt-4 flex items-center text-red-600 font-medium hover:text-red-700">
          View Publication
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    </div>
  );

  return (
    <section id="publications" className="min-h-screen py-24 bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {!showAllPublications ? (
            // Main view with featured publications
            <>
              <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Publications</h2>
              <p className="text-lg text-gray-700 text-center mb-16 md:text-xl">
                Recent academic contributions to the field of land economics and housing studies
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                {featuredPublications.map((pub, index) => (
                  <PublicationItem key={index} publication={pub} />
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="#"
                  onClick={handleViewAllClick}
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700 text-lg"
                >
                  View All Publications
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </>
          ) : (
            // All publications view
            <>
              <div className="flex items-center mb-12">
                <a
                  href="#"
                  onClick={handleBackClick}
                  className="text-red-600 hover:text-red-700 mr-3 inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Featured
                </a>
                <h2 className="text-4xl font-bold text-gray-800">All Publications</h2>
              </div>

              <p className="text-lg text-gray-700 mb-16 md:text-xl">
                Complete list of academic publications in the field of land economics and housing studies
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                {allPublications.map((pub, index) => (
                  <PublicationItem key={index} publication={pub} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}