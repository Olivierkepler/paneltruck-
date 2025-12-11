"use client";

import { ReactNode } from "react";

export default function FeaturedMap({ children }: { children: ReactNode }) {
  return (
    <div className="w-full border border-slate-300 rounded-xl shadow-md overflow-hidden bg-white">
      <div className="px-4 py-3 border-b border-slate-300 bg-slate-50">
        <h3 className="text-sm font-medium tracking-wide text-slate-700">
          Interactive Map Exhibit
        </h3>
      </div>

      <div className="bg-white">{children}</div>

      <div className="px-4 py-2 border-t border-slate-300 bg-slate-50 text-center">
        <p className="text-xs text-slate-500 italic">Figure I — Map Plate</p>
      </div>
    </div>
  );
}
