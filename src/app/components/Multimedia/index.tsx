"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MediaType {
  type: "video" | "image";
  src: string;
  description: string;
}

const mediaData: MediaType[] = [
  {
    type: "video",
    src: "/media/PhD_part1 (1).mp4",
    description: "First part of PhD Defence",
  },
  {
    type: "image",
    src: "/media/mubirurotary.jpg",
    description: "Bustling local market on a sunny day.",
  },
  {
    type: "video",
    src: "/media/nbsinterview.mp4",
    description: "Interview with a slum redevelopment officer.",
  },
];

export default function MultimediaGallery() {
  const [selected, setSelected] = useState<MediaType | null>(null);

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
            onClick={() => setSelected(item)}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
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
                  className="object-cover rounded-t-md"
                />
              )}
            </div>
            <div className="p-3 text-gray-700 text-sm md:text-base font-medium">
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl focus:outline-none"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="p-4 md:p-6">
              <div className="aspect-w-16 aspect-h-9 relative rounded-md overflow-hidden">
                {selected.type === "video" ? (
                  <video
                    src={selected.src}
                    controls
                    className="object-cover w-full h-full rounded-md"
                    playsInline
                  />
                ) : (
                  <Image
                    src={selected.src}
                    alt={selected.description}
                    fill
                    className="object-contain rounded-md"
                  />
                )}
              </div>
              <p className="mt-4 text-center text-purple-700 text-lg font-semibold">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}