"use client";

import ZoomableMap from "./ZoomableMap";
import { motion } from "framer-motion";

export default function ProjectShowcase() {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 px-4 py-10 md:px-8 md:py-16 flex justify-center">
      {/* JOURNAL PAGE */}
      <div className="w-full max-w-4xl bg-white border border-slate-200 shadow-md md:shadow-lg px-6 md:px-10 py-10 md:py-12">
        {/* JOURNAL HEADER */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-500 mb-3">
            Boston Literary Map Journal
          </p>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl font-semibold leading-tight text-center md:text-left"
          >
           Charles Baudelaire dans ses oeuvres: 
           <br /> <span className="italic">Les Fleurs du mal et Le Spleen de Paris</span>
          </motion.h1>

          <p className="mt-3 text-sm md:text-base text-slate-600">
          Charles Baudelaire was a compelling French author of the 19th century. He was born in Paris on April 09, 1821. He moved around between 1833-1841, but came back to Paris in 1842, where he witnessed the major social, architectural, and political changes of the city, before he died in 1867. During his time in Paris, Baudelaire had several jobs, he wrote dissertations, criticisms, and reviews for multiple newspapers. He was inspired by the urban life of Paris for his theatrical work. He observed the changing city, from narrow and unsanitary cities to new landscapes and marginal populations.     </p>
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
            Team Theme
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
          Baudelaire contracte ajoute qqch d’autre plusieurs emplois, il écrit dissertations, critiques, et revues pour de multiples journaux. Vite, il se créa une réputation de critique unique, en analysant les travaux contemporains de Eugène Delacroix et Gustave Courbet. Après avoir sorti sa novella autobiographique La Fanfarlo, en 1847, ses poèmes commencent à être publiés dans plusieurs journaux. En 1857, Auguste Poulet-Malassis publia la première édition de Les Fleurs du Mal. Baudelaire assista de très près à la production du livre et décida d’y ajouter 35 poèmes en 1861. Six des poèmes de la collection parlaient d’amour homosexuelle et vampires, sujets qui en ce temps, étaient mal vus et bannis à Paris. Il a fallu 92 ans pour que le banne soit levé, mais entre-temps, Baudelaire continue d’impressionner d’autres célèbres écrivains comme Victor Hugo et Gustave Flaubert, par son choix de sujets controversés et romantiques. 
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
            Individual Focus
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
          Après la révolution de 1848, six ans après le retour de Baudelaire, Paris devient instable et les classes populaires commencent à demander plus de droits et de protection sociale. Louis Napoléon Bonaparte est élu président de la France, mais la constitution l'empêche d’entreprendre un deuxième mandat. Voyant cela, Napoléon organise un coup d'État en 1851, et décide de dissoudre L'Assemblée Nationale, reécrit la constitution, et en 1852, Napoléon III se nomme Empereur de la France. Les divisions politiques extrêmes et l’instabilité donnent à Napoléon III une justification pour instaurer un régime autoritaire qui promet “l’ordre et le progrès”.      </p>
        </motion.section>

        {/* DIGITAL PROJECT VISION */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 border-t border-slate-200 pt-6"
        >
          <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">
            Digital Project Vision
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
          
          Dans un effort d’embellir Paris, Napoléon III nomme en 1853 le préfet Georges-Eugène Haussmann, chargé de transformer radicalement Paris. Cette décision a été très mal prise par de nombreux Parisiens. Des milliers de familles pauvres sont chassées de leurs logements. Les ruelles médiévales disparaissent. Des quartiers familiers sont rasés. Mais très vite, les Parisiens commencent à soupçonner l’urbanisation de Paris plus comme une décision politique et non esthétique, comme Napoléon III voulait la faire passer. Les larges boulevards créés par Haussmann étaient vus comme des outils du pouvoir pour empêcher la construction de barricades et faciliter les déplacements de l’armée.
          </p>
        </motion.section>

        {/* REFLECTION */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-10 border-t border-slate-200 pt-6"
        >
          <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">
            Reflection on Digital Form
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
          Les œuvres de Baudelaire sont inspirées par ce changement soudain et radical de Paris. Dans ces deux œuvres majeures, Les Fleurs du Mal, publié en 1857, et Le Spleen de Paris, en 1869, He observed the changing city, from narrow and unsanitary cities to new landscapes and marginal populations. In Les Fleurs du Mal, he portrays the city of Paris, its landscape, its inhabitants, its beauty, its poverty, and modern transformation. He considers himself a lover, who struts the streets of Paris, in search of expression of his torments and the feeding of his imagination. 
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
            Plate I — Interactive Map of Oran, Algeria
          </h2>
          <p className="text-xs uppercase tracking-[0.23em] text-slate-500 mb-4">
            figure 1. cartographic companion to <span className="italic">L’Étranger</span>
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800 mb-5">
          
          </p>

          <div className="mt-4 border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
            <ZoomableMap />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
