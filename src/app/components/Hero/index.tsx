import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-black text-white py-16 md:py-24 lg:py-32 flex items-center min-h-screen"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 lg:gap-32">
        {/* LEFT: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Dr. Moses Batanda Mubiru
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8">
            Land Economist | Valuation Surveyor | Registered Arbitrator | Academic Researcher
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-3 md:gap-4">
            <Link
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-5 rounded-md transition duration-300 flex items-center justify-center text-sm md:text-base"
            >
              Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className="bg-transparent border-2 border-white text-white font-medium py-2.5 px-5 rounded-md hover:bg-white hover:text-gray-900 transition duration-300 text-sm md:text-base"
            >
              View Services
            </Link>
            <Link
              href="/images/cv mubiru MCIArb.docx.pdf"
              download
              className="bg-red-600 hover:bg-gray-700 text-white font-medium py-2.5 px-5 rounded-md transition duration-300 text-sm md:text-base"
            >
              Download CV
            </Link>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
            <Image
              src="/images/mubiru_11-removebg-preview.png"
              alt="Dr. Moses Batanda Mubiru"
              className="shadow-lg object-contain rounded-full"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 400px"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}