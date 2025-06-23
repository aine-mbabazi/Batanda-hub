

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation"; // Import hooks

interface MediaType {
  type: "video" | "image";
  src: string;
  description: string;
}

const mediaData: MediaType[] = [
  {
    type: "video",
    src: "/media/PhD_part1 (1).mp4",
    description:
      "PhD Defence on Socioeconomic drivers of housing location choice of female-headed households in Kampala City informal settlements. Full version can be watched on youtube",
  },
  {
    type: "image",
    src: "/media/mubirurotary.jpg",
    description: "Highlights from a rotary meeting in Tanzania",
  },
  {
    type: "video",
    src: "/media/nbsinterview.mp4",
    description: "Interview with a slum redevelopment officer.",
  },
];

export default function MultimediaGallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaType | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Effect to sync modal state with URL query parameters
  useEffect(() => {
    const mediaIndexParam = searchParams.get("mediaIndex");
    if (mediaIndexParam) {
      const index = parseInt(mediaIndexParam, 10);
      if (!isNaN(index) && index >= 0 && index < mediaData.length) {
        setSelectedMedia(mediaData[index]);
      } else {
        
        setSelectedMedia(null);
        
      }
    } else {
      setSelectedMedia(null);
    }
  }, [searchParams]); 

  const openModal = (item: MediaType, index: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("mediaIndex", index.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    
  };

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("mediaIndex");
    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    
  };


  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedMedia) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedMedia]); 


  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-gray-50 p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        <span role="img" aria-label="movie camera">
          🎬
        </span>{" "}
        Multimedia Showcase
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaData.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-md shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => openModal(item, index)} 
          >
            <div className="aspect-w-16 aspect-h-9 relative w-full h-full">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="object-cover w-full h-full rounded-t-md"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.description}
                  fill
                  className="object-cover object-bottom rounded-t-md"
                />
              )}
            </div>
            <div className="p-3 text-gray-700 text-sm md:text-base font-medium">
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"> 
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col"> {/* Added max-h and flex-col for scroll */}
            <button
              onClick={closeModal} // Use closeModal
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl z-10 focus:outline-none" // Increased size and z-index
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="p-4 md:p-6 overflow-y-auto"> {/* Made content area scrollable */}
              <div className="aspect-w-16 aspect-h-9 relative rounded-md overflow-hidden mb-4">
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay // Added autoPlay for selected video
                    className="object-contain w-full h-full rounded-md bg-black" // Changed to object-contain and bg-black
                    playsInline
                  />
                ) : (
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.description}
                    fill
                    className="object-contain rounded-md" // object-contain is good here
                  />
                )}
              </div>
              <p className="text-center text-purple-700 text-base md:text-lg font-semibold">
                {selectedMedia.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}