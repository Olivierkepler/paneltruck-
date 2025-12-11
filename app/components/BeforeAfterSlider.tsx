"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  width?: number;
  height?: number;
  overlayOpacity?: number;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  width = 800,
  height = 450,
  overlayOpacity = 1,
}: BeforeAfterSliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0.5);
  const [dragging, setDragging] = useState(false);

  const setPos = (clientX: number) => {
    const container = ref.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let x = (clientX - rect.left) / rect.width;

    x = Math.max(0, Math.min(1, x)); // clamp 0–1
    setPosition(x);
  };

  const handleDown = (e: React.PointerEvent) => {
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleMove = (e: React.PointerEvent) => {
    if (dragging) setPos(e.clientX);
  };

  const handleUp = (e: React.PointerEvent) => {
    setDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl shadow-xl select-none mb-10"
      style={{ width, height }}
    >
      {/* BEFORE IMAGE */}
      <Image
        src={beforeSrc}
        alt="Before"
        fill
        className="object-cover pointer-events-none"
      />

      {/* AFTER IMAGE */}
      <div
        className="absolute top-0 h-full overflow-hidden"
        style={{
          width: `${position * 100}%`,
          opacity: overlayOpacity,
        }}
      >
        <Image
          src={afterSrc}
          alt="After"
          fill
          className="object-cover pointer-events-none"
        />
      </div>

      {/* SLIDER LINE */}
      <div
        className="absolute top-0 h-full w-[3px] bg-white/90 shadow-[0_0_12px_2px_rgba(255,255,255,0.8)]"
        style={{
          left: `${position * 100}%`,
          transform: "translateX(-50%)",
        }}
      />

      {/* HANDLE */}
      <div
        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={handleUp}
        onPointerCancel={handleUp}
        className="
          absolute top-1/2 -translate-y-1/2 -translate-x-1/2
          h-14 w-14 rounded-full cursor-grab active:cursor-grabbing
          backdrop-blur-xl bg-white/20 border border-white/40
          shadow-[0_8px_30px_rgba(0,0,0,0.3)]
          flex items-center justify-center z-20 transition-transform active:scale-95
        "
        style={{
          left: `${position * 100}%`,
        }}
      >
        <span className="text-white text-2xl font-bold drop-shadow">↔</span>
      </div>

      {/* OPTIONAL LABELS */}
      <div className="absolute top-4 left-4 px-3 py-1.5 text-white text-sm bg-black/40 backdrop-blur-md rounded-full border border-white/20">
        Before
      </div>

      <div className="absolute top-4 right-4 px-3 py-1.5 text-white text-sm bg-black/40 backdrop-blur-md rounded-full border border-white/20">
        After
      </div>
    </div>
  );
}
