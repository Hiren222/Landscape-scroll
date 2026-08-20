'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';
import ProjectModal, { ProjectItem } from './ProjectModal';

interface OurWorkProps {
  onGetQuoteForProject: (projectTitle: string) => void;
}

export default function OurWork({ onGetQuoteForProject }: OurWorkProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const projects: ProjectItem[] = [
    {
      id: 'riverside-garden',
      title: 'The Riverside Garden',
      service: 'Garden Design',
      location: 'North Austin, TX',
      city: 'North Austin',
      description: 'Full backyard botanical garden and stone border installation',
      fullDetails: 'Complete overhaul of an overgrown property into a flourishing, native Texas drought-tolerant garden featuring perennial beds, natural stone borders, and lush surrounding greenery.',
      image: '/colpet-landscape-design-content-0423-3.jpg',
      duration: '5 Days',
      highlights: [
        'Native Texas perennial planting',
        'Natural limestone garden borders',
        'Drip irrigation installation',
        'Custom organic mulch application'
      ],
    },
    {
      id: 'oakwood-lawn',
      title: 'Oakwood Lawn & Turf',
      service: 'Lawn Care',
      location: 'Round Rock, TX',
      city: 'Round Rock',
      description: 'Complete emerald turf and landscape border transformation',
      fullDetails: 'Restoration of residential turf through soil grading, precision edging, deep aeration, premium sod installation, and manicured shrub borders.',
      image: '/images (5).jpg',
      duration: '3 Days',
      highlights: [
        'Soil pH balancing & grading',
        'Fresh Bermuda sod installation',
        'Crisp bed edging & shrub trimming',
        'Organic fertilization treatment'
      ],
    },
    {
      id: 'cedar-patio',
      title: 'The Cedar Stone Sanctuary',
      service: 'Hardscaping',
      location: 'South Austin, TX',
      city: 'South Austin',
      description: 'Custom flagstone patio surrounded by lush landscape architecture',
      fullDetails: 'Crafted a 450 sq ft natural flagstone patio harmoniously integrated with surrounding landscape beds, specimen trees, and native decorative grasses.',
      image: '/images (6).jpg',
      duration: '7 Days',
      highlights: [
        'Custom Austin flagstone paving',
        'Integrated stone seating walls',
        'Surrounding perennial gardens',
        'Subtle low-voltage lighting'
      ],
    },
    {
      id: 'barton-creek-walkway',
      title: 'Barton Creek Estate Grounds',
      service: 'Garden Design',
      location: 'Austin, TX',
      city: 'Austin',
      description: 'Curved stone walkway winding through lush estate shrubbery and trees',
      fullDetails: 'Comprehensive landscape architecture project featuring winding flagstone garden paths, dense flowering shrub arrangements, and shade-tolerant ornamental greenery.',
      image: '/images (7).jpg',
      duration: '6 Days',
      highlights: [
        'Curved natural stone pathway',
        'Flowering shrub & tree canopy design',
        'Automated micro-drip irrigation',
        'Erosion control rock grading'
      ],
    },
    {
      id: 'westlake-botanical',
      title: 'Westlake Hillside Sanctuary',
      service: 'Tree & Shrub Trimming',
      location: 'Westlake, TX',
      city: 'Westlake',
      description: 'Multi-tiered landscape gardens with stone retainers and greenery',
      fullDetails: 'Hillside landscape renovation incorporating natural limestone retaining tiers, architectural shrub shaping, specimen ornamental grasses, and mature tree preservation.',
      image: '/images (8).jpg',
      duration: '4 Days',
      highlights: [
        'Tiered limestone retaining beds',
        'Architectural shrub & hedge shaping',
        'Drought-hardy succulent accents',
        '100% organic soil amendment'
      ],
    },
    {
      id: 'lake-travis-oasis',
      title: 'Lake Travis Modern Greenscape',
      service: 'Seasonal Cleanup',
      location: 'Lake Travis, TX',
      city: 'Lake Travis',
      description: 'Pristine landscape design with stone pathways and sculptural gardens',
      fullDetails: 'A clean, modern landscape rejuvenation featuring structured boxwood groupings, ornamental grasses, crushed stone pathways, and fresh seasonal blooms.',
      image: '/images (9).jpg',
      duration: '3 Days',
      highlights: [
        'Structured landscape geometry',
        'Fresh premium dark hardwood mulch',
        'Seasonal flowerbed renewal',
        'Stone path edging & power wash'
      ],
    },
  ];

  const categories = ['All', 'Garden Design', 'Lawn Care', 'Hardscaping', 'Irrigation Systems', 'Tree & Shrub Trimming', 'Seasonal Cleanup'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.service.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="our-work" className="bg-[#F0F5F0] py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A2D] bg-[#2D6A2D]/10 px-3 py-1 rounded-full inline-block mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight mb-4">
            Recent Projects
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            A look at some of the outdoor spaces we have transformed.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-[#2D6A2D] text-white shadow-md'
                  : 'bg-white text-[#6B7280] hover:text-[#1C1C1C] hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Green Overlay */}
                <div className="absolute inset-0 bg-[#2D6A2D]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white backdrop-blur-[2px]">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-200 mb-1">
                    {project.service}
                  </span>
                  <h3 className="text-xl font-extrabold mb-3">{project.title}</h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#2D6A2D] font-bold text-xs rounded-full shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Details</span>
                  </div>
                </div>
              </div>

              {/* Text Below Photo */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#2D6A2D] mb-1">
                    {project.service}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 group-hover:text-[#2D6A2D] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] mb-3">
                    {project.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-[#6B7280]">
                  <span>{project.city}</span>
                  <span className="text-[#2D6A2D] font-semibold">Click to explore →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              setFilter('All');
              const contactSec = document.querySelector('#contact');
              if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 border-2 border-[#2D6A2D] text-[#2D6A2D] font-bold rounded-lg hover:bg-[#2D6A2D] hover:text-white transition-all duration-300 shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Have a Project in Mind? Get a Free Quote</span>
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onGetQuoteForProject={onGetQuoteForProject}
      />
    </section>
  );
}
