import { Html, Scroll } from "@react-three/drei";
import React from "react";

const Overlay = () => {
  return (
    <>
     <Html
      style={{
        // transparent white background
        background: "rgba(255, 255, 255, 0.3)",
        fontFamily: "sans-serif",
        fontSize: "min(3vw, 32px)",
        width: "30vw",
        top: "400vh",
        right: "-50vw",
        color: "white",
      }}
    >
      {/* <h1 className="font-serif text-2xl">Made by Aparna</h1> */}
      <h2>Technologies used:</h2>
      <ul>
        <li>Vite & React</li>
        <li>Three.js</li>
        <li>Tailwind CSS</li>
        <li>GSAP</li>
      </ul>
    </Html>
   {/* <Html
  style={{
    fontFamily: "sans-serif",
    fontSize: "min(1.6vw, 24px)",
    width: "30vw",
    top: "500vh",
    left: "-35vw",
    color: "white",
  }}
>
  <h3 style={{ marginBottom: "0.5rem" }}>
    What makes this experience different
  </h3>

  <p style={{ opacity: 0.8 }}>
    Scroll-driven storytelling<br />
    Real-time 3D rendering<br />
    Performance-first animations
  </p>
</Html> */}
<Html
  style={{
    width: "28vw",
    padding: "2rem",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
    color: "white",
    top: "550vh",
    right: "-30vw",
    fontFamily: "'Inter', sans-serif",
    fontSize:"min(3vw, 32px)"
  }}
>
  <span style={{ opacity: 0.6, letterSpacing: "0.2em", fontSize: "min(3vw, 12px)" }}>
    INTERACTIVE 3D WEB
  </span>

  <h1
    style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "min(3vw, 2.2rem)",
      margin: "0.5rem 0",
    }}
  >
    Designed for motion !
    Engineered for performance.
  </h1>

  <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
    Built with component-driven UI,
GPU-accelerated 3D, and timeline-based animation.
  </p>

  <div style={{ marginTop: "1.5rem", fontSize: "min(3vw, 14px)", opacity: 0.6 }}>
    React • Three.js • GSAP
  </div>
</Html>

{/* <Html
  style={{
    width: "24vw",
    padding: "2.2rem",
    color: "white",
    top: "720vh",
    right: "-45vw",
    fontFamily: "'Inter', sans-serif",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "18px",
    backdropFilter: "blur(10px)",
  }}
>
  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
    <span style={{ fontSize: "13px", opacity: 0.6 }}>01</span>
    <h2 style={{ margin: 0 }}>Create</h2>

    <span style={{ fontSize: "13px", opacity: 0.5 }}>02</span>
    <h2 style={{ margin: 0, opacity: 0.75 }}>Refine</h2>

    <span style={{ fontSize: "13px", opacity: 0.4 }}>03</span>
    <h2 style={{ margin: 0, opacity: 0.55 }}>Animate</h2>

    <span style={{ fontSize: "13px", opacity: 0.3 }}>04</span>
    <h2 style={{ margin: 0, opacity: 0.35 }}>Repeat</h2>
  </div>
</Html> */}

<Html
  style={{
    width: "26vw",
    padding: "2.6rem",
    top: "700vh",
    right: "-45vw",
    color: "white",
    fontFamily: "'Playfair Display', serif",
    background:
      "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(56,189,248,0.35), rgba(236,72,153,0.25))",
    backdropFilter: "blur(16px)",
    borderRadius: "22px",
    boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
    fontSize:"min(3vw, 32px)"
  }}
>
  <div
    style={{
      fontSize: "min(3vw, 11px)",
      letterSpacing: "0.3em",
      opacity: 0.8,
      marginBottom: "1.4rem",
      fontFamily: "'Inter', sans-serif",
    }}
  >
    CREATIVE LOOP
  </div>

  <p style={{ fontSize: "min(3vw, 2.6rem)", margin: 0 }}>Create</p>
  <p style={{ fontSize: "min(3vw, 2.3rem)", margin: 0, opacity: 0.85 }}>Refine</p>
  <p style={{ fontSize: "min(3vw, 2.1rem)", margin: 0, opacity: 0.7 }}>Animate</p>
  <p style={{ fontSize: "min(3vw, 1.9rem)", margin: 0, opacity: 0.55 }}>Repeat</p>
</Html>

{/* conatct */}
<Html
  style={{
    width: "26vw",
    padding: "1.8rem",
    // background: "rgba(255,255,255,0.12)",
    // backdropFilter: "blur(10px)",
    background:
  "linear-gradient(135deg, rgba(236,72,153,0.35), rgba(244,114,182,0.3), rgba(168,85,247,0.25))",
backdropFilter: "blur(18px)",
    borderRadius: "14px",
    color: "white",
    top: "660vh",
    left: "-40vw",
    fontFamily: "'Inter', sans-serif",
    fontSize:"min(3vw, 32px)"
  }}
>
  <span style={{ opacity: 0.6, letterSpacing: "0.18em", fontSize: "min(3vw, 12px)" }}>
    CONTACT
  </span>

  <h3 style={{ margin: "0.6rem 0" }}>Aparna</h3>

  <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
    Frontend Developer<br />
    Motion & 3D Web
  </p>

  <div style={{ marginTop: "1rem", fontSize: "min(2.5vw, 14px)", opacity: 0.75 }}>
    ✉️ :aparnaapar99@gmail.com<br />
    🔗 :linkedin.com/in/aparnak1567/ <br />
    📞 :9791903195
  </div>
</Html>
    </>
  
  );
};

export default Overlay;
