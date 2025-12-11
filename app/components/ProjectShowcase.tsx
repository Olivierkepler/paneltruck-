"use client"

import content from "../data1/issa.json";  
import ZoomableMap from "./ZoomableMap";
import { motion } from "framer-motion";

export default function ProjectShowcase() {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 px-4 py-10 md:px-8 md:py-16 flex justify-center">
      <div className="w-full max-w-4xl bg-white border border-slate-200 shadow-md md:shadow-lg px-6 md:px-10 py-10 md:py-12">
        {/* JOURNAL HEADER */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-500 mb-3">
            {content.header.journalTitle}
          </p>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl font-semibold leading-tight text-center md:text-left"
          >
            {content.header.mainTitle}
          </motion.h1>

          <p className="mt-3 text-sm md:text-base text-slate-600">
            {content.header.subtitle}
          </p>
        </header>

        {/* THEME SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">
            {content.themeSection.title}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            {content.themeSection.body}
          </p>
        </motion.section>

        {/* INDIVIDUAL SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-10 border-t border-slate-200 pt-6"
        >
          <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">
            {content.individualSection.title}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            {content.individualSection.body}
          </p>
        </motion.section>

        {/* DIGITAL VISION SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 border-t border-slate-200 pt-6"
        >
          <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">
            {content.digitalVisionSection.title}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            {content.digitalVisionSection.body}
          </p>
        </motion.section>

        {/* REFLECTION SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-10 border-t border-slate-200 pt-6"
        >
          <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">
            {content.reflectionSection.title}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            {content.reflectionSection.body}
          </p>
        </motion.section>

        {/* MAP SECTION */}
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
            <ZoomableMap />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
