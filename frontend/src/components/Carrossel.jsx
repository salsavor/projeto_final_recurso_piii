import React from "react";
import { useState, useEffect } from "react";

export default function Carrossel() {
  const images = [
    "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [images.length]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <div
          style={{
            display: "flex",
            width: `${images.length * 100}vw`,
            height: "100vh",
            transition: "transform 0.7s cubic-bezier(.77,0,.18,1)",
            transform: `translateX(-${indice * 100}vw)`,
            filter: "blur(5px)",
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i}`}
              style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
