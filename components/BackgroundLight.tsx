"use client";

import { useEffect, useState } from "react";

function BackgroundLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
    <div
      style={{
        position: "fixed",
        top: position.y - 50,
        left: position.x - 50,
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "#252525",
        boxShadow: "0 0 150px 150px #252525",
        pointerEvents: "none",
        zIndex: -1000,
      }}
    />
  );
}

export default BackgroundLight;
