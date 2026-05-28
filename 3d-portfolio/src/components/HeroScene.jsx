import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

/* ========== Background Point Cloud Möbius ========== */
function MobiusPointCloud() {
  const groupRef = useRef();
  const sparkRef = useRef();
  
  // Reduced particle count for a cleaner, less chaotic look
  const particleCount = 12000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Parametric coordinates (u around, v across width)
      const u = Math.random() * Math.PI * 2;
      const v = (Math.random() * 2 - 1); 

      const radius = 5.5;
      const halfWidth = 2.0;

      // Base Mobius surface equations
      const x = (radius + halfWidth * v * Math.cos(u / 2)) * Math.cos(u);
      const y = (radius + halfWidth * v * Math.cos(u / 2)) * Math.sin(u);
      const z = halfWidth * v * Math.sin(u / 2);

      // Drastically reduced noise (0.1 down from 0.4) so the shape is tight and elegant
      const noise = 0.1;
      pos[i * 3] = x + (Math.random() - 0.5) * noise;
      pos[i * 3 + 1] = y + (Math.random() - 0.5) * noise;
      pos[i * 3 + 2] = z + (Math.random() - 0.5) * noise;
    }
    return pos;
  }, [particleCount]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Slowly revolve and tumble
      groupRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.15) * 0.2;
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.z = t * 0.08;
    }

    if (sparkRef.current) {
      // Traveling spark along the strip's center
      const speed = 0.8; // Speed of the spark traveling
      const u = (t * speed) % (Math.PI * 4); // 4PI is exactly one full loop along the Mobius edge
      const v = 0.0; // 0 places it exactly in the middle of the strip

      const radius = 5.5;
      const halfWidth = 2.0;

      const x = (radius + halfWidth * v * Math.cos(u / 2)) * Math.cos(u);
      const y = (radius + halfWidth * v * Math.cos(u / 2)) * Math.sin(u);
      const z = halfWidth * v * Math.sin(u / 2);

      sparkRef.current.position.set(x, y, z);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}> {/* Pushed slightly back */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#3b82f6" /* Deeper, less aggressive blue */
          size={0.02} /* Much smaller points */
          sizeAttenuation={true}
          transparent={true}
          opacity={0.3} /* Very transparent so it's a subtle background */
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* The Traveling Spark */}
      <mesh ref={sparkRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#60a5fa" />
        <pointLight color="#3b82f6" intensity={2} distance={5} />
      </mesh>
    </group>
  );
}

/* ========== Fixed Full-Page 3D Background ========== */
export function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#3b82f6" />
        <MobiusPointCloud />
        <Stars radius={120} depth={80} count={5000} factor={3} fade />
      </Canvas>
    </div>
  );
}

/* ========== Hero Text Overlay (no canvas) ========== */
export default function HeroScene() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <span className="hero-badge fade-in">Senior Software Developer</span>

        <h1 className="hero-title fade-in fade-in-delay-1">
          Engineering Scalable{' '}
          <span className="accent">Cloud Solutions</span> &amp; Modernizing
          Legacy Systems.
        </h1>

        <p className="hero-subtitle fade-in fade-in-delay-2">
          5+ years specializing in Microsoft technology stack, Azure cloud
          migration, and Agile Methodology. Currently spearheading application
          modernization within the energy sector at Accenture.
        </p>

        <div className="hero-buttons fade-in fade-in-delay-3">
          <a className="btn-primary" href="Yashas_V_Resume.pdf" download>
            Download Resume
          </a>
          <a
            className="btn-secondary"
            href="https://linkedin.com/in/v-yashas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
