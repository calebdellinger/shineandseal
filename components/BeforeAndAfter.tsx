"use client";

import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";
import BeforeImage from "@/public/before.jpg";
import AfterImage from "@/public/after.jpg";

export const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

      setSliderPosition(percent);
    },
    [isDragging]
  );

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      handleMove(event.clientX);
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      handleMove(event.touches[0].clientX);
    },
    [handleMove]
  );

  const handleStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <div className="w-full relative">
      <div
        ref={containerRef}
        className="relative w-full max-w-[500px] aspect-[4/5] m-auto overflow-hidden select-none rounded-2xl"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <Image
          alt="Before"
          fill
          draggable={false}
          priority
          src={BeforeImage}
          className="object-cover"
          sizes="(max-width: 500px) 100vw, 500px"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[500px] aspect-[4/5] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            alt="After"
            src={AfterImage}
            className="object-cover"
            sizes="(max-width: 500px) 100vw, 500px"
          />
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
};
