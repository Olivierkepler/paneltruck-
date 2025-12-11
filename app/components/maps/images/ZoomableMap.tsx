"use client";

import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";

// Magnifier constants
const MAGNIFIER_SIZE = 180;
const MAGNIFIER_RADIUS = MAGNIFIER_SIZE / 2;
const MAGNIFIER_ZOOM = 2.0;

export default function ZoomableMap() {
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [imgDims, setImgDims] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = "/images/thai1.jpg";
    img.onload = () => {
      setImgDims({ width: img.width, height: img.height });
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setCursor({ x, y });
    },
    []
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        relative w-full h-full
        overflow-hidden
        shadow-[0_25px_70px_-20px_rgba(0,0,0,0.55)]
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
        select-none
      "
    >
      <TransformWrapper
        minScale={1}
        maxScale={8}
        initialScale={1}
        smooth
        wheel={{ step: 0.15 }}
        doubleClick={{ disabled: true }}
      >
        {(wrapper: any) => {
          const { zoomIn, zoomOut, resetTransform, state } = wrapper;

          const scale: number = state?.scale ?? 1;
          const posX: number = state?.positionX ?? 0;
          const posY: number = state?.positionY ?? 0;

          return (
            <>
              {/* 🔍 Magnifier (HD zoom preview) */}
              {hovered && imgDims.width > 0 && (
                <div
                  onClick={(e) => e.stopPropagation()} // ⛔ no zoom on click
                  className="
                    absolute z-30 rounded-full overflow-hidden pointer-events-auto
                    border border-white/40 shadow-2xl
                  "
                  style={{
                    width: MAGNIFIER_SIZE,
                    height: MAGNIFIER_SIZE,
                    left: cursor.x,
                    top: cursor.y,
                    transform: "translate(-50%, -50%)",
                    clipPath: "circle(50% at 50% 50%)",
                  }}
                >
                  <div
                    style={{
                      width: imgDims.width,
                      height: imgDims.height,
                      transform: `
                        translate(
                          ${MAGNIFIER_RADIUS -
                            MAGNIFIER_ZOOM * (cursor.x - posX)}px,
                          ${MAGNIFIER_RADIUS -
                            MAGNIFIER_ZOOM * (cursor.y - posY)}px
                        )
                        scale(${scale * MAGNIFIER_ZOOM})
                      `,
                      transformOrigin: "top left",
                      willChange: "transform",
                    }}
                  >
                    <img
                      src="/images/thai1.jpg"
                      width={imgDims.width}
                      height={imgDims.height}
                      draggable={false}
                      className="pointer-events-none select-none"
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
              )}

              {/* 🗺 Main Map Always Fits Container */}
              <TransformComponent
                wrapperClass="w-full h-full"
                contentClass="w-full h-full"
              >
                <img
                  src="/images/thai1.jpg"
                  alt="Map"
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none select-none"
                />
              </TransformComponent>

              {/* ZOOM + RESET CONTROLS */}
              <div
                className="
                  absolute bottom-6 right-6 z-40 flex flex-col gap-3 
                  bg-white/10 backdrop-blur-xl rounded-xl border border-white/20
                  p-3 shadow-xl
                "
              >
             
               

                {/* Reset */}
                <button
                  onClick={() => resetTransform()}
                  className="
                    flex items-center justify-center w-10 h-10
                    bg-white/20 hover:bg-white/30 text-white rounded-lg
                    transition-all
                  "
                  title="Reset map"
                >
                  <RotateCcw size={18} />
                </button>
              </div>
            </>
          );
        }}
      </TransformWrapper>
    </div>
  );
}
