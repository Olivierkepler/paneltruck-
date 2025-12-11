import Section from "./Section";
import { motion } from "framer-motion";

import React from "react";

interface SectionContent {
  title: string;
  body: string;
}

interface HeaderContent {
  journalTitle: string;
  mainTitle: string;
  subtitle: string;
}

interface MapSectionContent {
  title: string;
  figureCaption: string;
  body: string;
}

interface ProjectShowcaseProps {
  content: {
    header: HeaderContent;
    themeSection: SectionContent;
    individualSection: SectionContent;
    digitalVisionSection: SectionContent;
    reflectionSection: SectionContent;
    mapSection: MapSectionContent;
  };
  MapComponent?: React.ComponentType;
}

export default function ProjectShowcase({ content, MapComponent }: ProjectShowcaseProps) {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 px-4 py-10 md:px-8 md:py-16 flex justify-center">
      <div className="w-full max-w-4xl bg-white border border-slate-200 shadow-md md:shadow-lg px-6 md:px-10 py-10 md:py-12">

        {/* HEADER */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-500 mb-3">
            {content.header.journalTitle}
          </p>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl font-semibold leading-tight"
          >
            {content.header.mainTitle}
          </motion.h1>

          <p className="mt-3 text-sm md:text-base text-slate-600">
            {content.header.subtitle}
          </p>
        </header>

        {/* 4 MAIN TEXT SECTIONS */}
        <Section {...content.themeSection} />
        <Section {...content.individualSection} />
        <Section {...content.digitalVisionSection} />
        <Section {...content.reflectionSection} />

        {/* MAP SECTION (optional per component) */}
        {MapComponent && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="border-t border-slate-200 pt-6"
          >
            <h2 className="font-serif text-xl md:text-2xl font-semibold mb-2">
              {content.mapSection.title}
            </h2>

            <p className="text-xs uppercase tracking-[0.23em] text-slate-500 mb-4">
              {content.mapSection.figureCaption}
            </p>

            <p className="text-sm md:text-base leading-relaxed text-slate-800 mb-5">
              {content.mapSection.body}
            </p>

            <div className="mt-4 border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
              <MapComponent />
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
