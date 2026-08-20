'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { X, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  service: string;
  location: string;
  city: string;
  description: string;
  fullDetails: string;
  image: string | StaticImageData;
  duration: string;
  highlights: string[];
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onGetQuoteForProject: (projectTitle: string) => void;
}

export default function ProjectModal({ project, onClose, onGetQuoteForProject }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        {/* Header Image */}
        <div className="relative h-64 sm:h-80 w-full shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            referrerPolicy="no-referrer"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300 bg-[#2D6A2D]/80 px-3 py-1 rounded-full inline-block mb-2 backdrop-blur-sm">
              {project.service}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-gray-200 flex items-center gap-1.5 mt-1">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{project.location}</span>
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-[#F0F5F0] p-4 rounded-xl border border-[#2D6A2D]/10">
            <div className="flex items-center gap-2 font-medium">
              <Calendar className="w-4 h-4 text-[#2D6A2D]" />
              <span>Duration: <strong className="text-[#1C1C1C]">{project.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <MapPin className="w-4 h-4 text-[#2D6A2D]" />
              <span>Area: <strong className="text-[#1C1C1C]">{project.city}</strong></span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#1C1C1C] mb-2">Project Overview</h4>
            <p className="text-[#6B7280] text-base leading-relaxed">
              {project.fullDetails}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#1C1C1C] mb-3">Key Transformations & Highlights</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1C1C1C]">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A2D] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            >
              Back to Gallery
            </button>
            <button
              onClick={() => {
                onClose();
                onGetQuoteForProject(project.title);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#2D6A2D] text-white font-semibold rounded-lg hover:bg-[#235423] shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get a Quote Like This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
