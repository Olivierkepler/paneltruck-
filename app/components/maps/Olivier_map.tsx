"use client";

import BeforeAfterSlider from "./images/BeforeAfterSlider"

export default function Olivier_map() {
  return (
    <div className="w-full h-full min-h-[400px] bg-slate-100 flex items-center justify-center">
  
  
    <BeforeAfterSlider
      beforeSrc="/images/map1.jpg"
      afterSrc="/images/map2.jpg"
      width={800}
      height={450}
      overlayOpacity={1}
    />
    </div>
  );
}
