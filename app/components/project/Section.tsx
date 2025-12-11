import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  body: string;
}

export default function Section({ title, body }: SectionProps) {  
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-10 border-t border-slate-200 pt-6"
    >
      <h2 className="font-serif text-xl md:text-2xl font-semibold mb-3">
        {title}
      </h2>

      <p className="text-sm md:text-base leading-relaxed text-slate-800">
        {body}
      </p>
    </motion.section>
  );
}
