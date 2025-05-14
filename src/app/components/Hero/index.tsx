// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="bg-black text-white py-16 md:py-24 lg:py-32 flex items-center min-h-screen"
//     >
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 lg:gap-32">
//         {/* LEFT: Text */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
//             Dr. Moses Batanda Mubiru
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8">
//             Land Economist | Valuation Surveyor | Registered Arbitrator | Academic Researcher
//           </p>
//           <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-3 md:gap-4">
//             <Link
//               href="#contact"
//               className="bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-5 rounded-md transition duration-300 flex items-center justify-center text-sm md:text-base"
//             >
//               Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>
//             <Link
//               href="#services"
//               className="bg-transparent border-2 border-white text-white font-medium py-2.5 px-5 rounded-md hover:bg-white hover:text-gray-900 transition duration-300 text-sm md:text-base"
//             >
//               View Services
//             </Link>
//             <Link
//               href="/images/cv mubiru MCIArb.docx.pdf"
//               download
//               className="bg-red-600 hover:bg-gray-700 text-white font-medium py-2.5 px-5 rounded-md transition duration-300 text-sm md:text-base"
//             >
//               Download CV
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT: Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
//             <Image
//               src="/images/mubiru_11-removebg-preview.png"
//               alt="Dr. Moses Batanda Mubiru"
//               className="shadow-lg object-contain rounded-full"
//               fill
//               priority
//               sizes="(max-width: 768px) 80vw, 900px"
//               style={{ objectFit: 'contain' }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-black text-white py-24 flex items-center min-h-screen"
    >
      <div className="container mx-auto px-16 flex flex-col items-center justify-center">
        {/* Content container with two columns */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
          {/* Left column: Text content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left mb-12 lg:mb-6">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Dr. Moses Batanda Mubiru
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10">
              Land Economist | Valuation Surveyor | Registered
              <br className="hidden md:block" /> Arbitrator | Academic Researcher
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center text-lg"
              >
                Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#services"
                className="bg-transparent hover:bg-white hover:text-black border border-white text-white font-medium py-3 px-6 rounded-md transition duration-300 text-lg"
              >
                View Services
              </Link>
              <Link
                href="/images/cv-mubiru.pdf"
                download
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 text-lg"
              >
                Download CV
              </Link>
            </div>
          </div>

          {/* Right column: Image */}
          <div className="w-full md:w-6/12 flex justify-end mt-16 md:mt-0 lg:pl-16">
            <div className="relative w-full md:w-[80%] aspect-square">
              <Image
                src="/media/mubiru_11-removebg-preview.png"
                alt="Dr. Moses Batanda Mubiru"
                className="rounded-full object-cover"
                fill
                priority
                sizes="(max-width: 668px) 220px, 300px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}