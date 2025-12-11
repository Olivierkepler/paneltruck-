"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface JournalEntryProps {
  title: string;
  literaryText?: string;
  theme: string;
  individual: string;
  vision: string;
  reflection: string;
  mapComponent: ReactNode;
}

export default function JournalEntry({
  title,
  literaryText,
  theme,
  individual,
  vision,
  reflection,
  mapComponent,
}: JournalEntryProps) {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 px-4 py-12 flex justify-center">
      <div className="max-w-4xl w-full bg-white border border-slate-200 shadow-md px-8 py-10">
        
        {/* HEADER */}
        <header className="border-b border-slate-200 pb-6 mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">
            Boston Literary Map Journal
          </p>

          <h1 className="text-3xl font-serif font-semibold">{title}</h1>
        </header>

        {/* LITERARY TEXT */}
        {literaryText && (
          <Section title="Texte Littéraire" content={literaryText} />
        )}

        {/* THEME */}
        <Section title="Team Theme" content={theme} />

        {/* INDIVIDUAL */}
        <Section title="Individual Focus" content={individual} />

        {/* VISION */}
        <Section title="Digital Project Vision" content={vision} />

        {/* REFLECTION */}
        <Section title="Reflection" content={reflection} />

        {/* MAP */}
        <section className="mt-10 border-t border-slate-200 pt-6">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Interactive Map
          </h2>

          {mapComponent}
        </section>
      </div>
    </div>
  );
}

function Section({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-10 border-t border-slate-200 pt-6"
    >
      <h2 className="text-2xl font-serif font-semibold mb-3">{title}</h2>
      <p className="text-slate-800 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </motion.section>
  );
}
