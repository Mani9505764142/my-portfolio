import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

function FloatingSphere({ position, color }) {
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}   // 🔥 reduced glow
          roughness={0.4}
          metalness={0.5}
          transparent
          opacity={0.6}             // 🔥 softer look
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      
      {/* 🎯 DARK BACKGROUND */}
      <color attach="background" args={["#020617"]} />

      {/* 🌫️ FOG (REAL DEPTH) */}
      <fog attach="fog" args={["#020617", 8, 20]} />

      {/* 💡 LIGHTING (SOFT ONLY) */}
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]} intensity={1} />

      {/* ✨ STARS (SUBTLE) */}
      <Stars
        radius={80}
        depth={60}
        count={1500}     // 🔥 reduced
        factor={3}
        fade
        speed={0.5}      // 🔥 slower
      />

      {/* 🔥 BACKGROUND OBJECTS (PUSHED BACK) */}
      <FloatingSphere position={[-6, 3, -6]} color="#3b82f6" />
      <FloatingSphere position={[6, -3, -6]} color="#9333ea" />
      <FloatingSphere position={[0, 5, -8]} color="#22c55e" />

    </Canvas>
  );
}