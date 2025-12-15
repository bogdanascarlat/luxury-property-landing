import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { useImageGallery } from "../hooks";
import AgentCard from "./AgentCard";
import type { Agent } from "../types/property";

interface ImageGalleryProps {
  images: string[];
  virtualTourUrl?: string;
  agent: Agent;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  virtualTourUrl,
  agent,
}) => {
  const {
    currentIndex,
    isFullscreen,
    goToNext,
    goToPrevious,
    goToImage,
    toggleFullscreen,
    currentImage,
  } = useImageGallery(images);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-luxury-navy">
                  Visual Journey
                </h3>
                <p className="text-gray-600 text-sm">
                  {images.length} professional photos & virtual tour
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  <span className="font-bold text-[#C89B3C]">
                    {currentIndex + 1}
                  </span>
                  /{images.length}
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center text-gray-600 hover:text-[#C89B3C] transition-colors text-sm"
                >
                  <FontAwesomeIcon icon={faExpand} className="mr-1" />
                  Fullscreen
                </button>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg mb-4 group">
              <div className="aspect-video bg-gray-100">
                <img
                  src={currentImage}
                  alt={`Property image ${currentIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-luxury-navy shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-luxury-navy shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {virtualTourUrl && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C89B3C]/90 text-black px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center">
                    <FontAwesomeIcon icon={faVrCardboard} className="mr-1.5" />
                    360° Tour
                  </span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-8 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 hover:border-[#C89B3C] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/50 ${
                    currentIndex === index
                      ? "border-l[#C89B3C] scale-105"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-200"></div>
                  {currentIndex === index && (
                    <div className="absolute top-1 right-1 w-5 h-5 bg-[#C89B3C] rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <AgentCard agent={agent} />
        </div>

        <AnimatePresence>
          {isFullscreen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            >
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm font-semibold z-10">
                {currentIndex + 1} / {images.length}
              </div>

              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={currentImage}
                alt={`Property view ${currentIndex + 1}`}
                className="max-w-[90vw] max-h-[90vh] object-contain"
              />

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`relative flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden transition-all ${
                      currentIndex === index
                        ? "ring-2 ring-[#C89B3C] scale-105"
                        : "opacity-40 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ImageGallery;
