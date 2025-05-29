

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
              Dr. Moses Batanda Mubiru (PhD), MCIArb
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
          <div className="w-full md:w-6/12 flex justify-center mt-16 md:mt-0 lg:pl-16">
            <div className="relative w-full aspect-square max-w-[400px] max-h-[400px]">
              <Image
                src="/media/mubiru_11-removebg-preview.png"
                alt="Dr. Moses Batanda Mubiru"
                className="rounded-full object-contain"
                fill
                priority
                sizes="(max-width: 768px) 50vw, 400px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}