import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";

const ParticleField = ({ pointer }) => {
  const pointsRef = useRef(null);

  const positions = useMemo(() => {
    const count = 1400;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const radius = 2.8 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const base = i * 3;

      data[base] = radius * Math.sin(phi) * Math.cos(theta);
      data[base + 1] = radius * Math.sin(phi) * Math.sin(theta);
      data[base + 2] = radius * Math.cos(phi);
    }

    return data;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.18;
    pointsRef.current.rotation.x += delta * 0.06;
    pointsRef.current.rotation.x += pointer.y * delta * 0.55;
    pointsRef.current.rotation.y += pointer.x * delta * 0.55;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#7dd3fc"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

const HeroParticles3D = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative h-52 overflow-hidden rounded-2xl border border-slate-200/75 bg-slate-950/90 dark:border-slate-700/70"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        setPointer({ x: nx, y: ny });
      }}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#020617"]} />
        <fog attach="fog" args={["#020617", 3.2, 8.5]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[2, 1.5, 2.5]} intensity={1.1} color="#38bdf8" />
        <pointLight
          position={[-2, -1.8, -2.5]}
          intensity={0.8}
          color="#22d3ee"
        />
        <ParticleField pointer={pointer} />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(56,189,248,0.38),transparent_36%),radial-gradient(circle_at_82%_78%,rgba(34,211,238,0.34),transparent_42%)]" />
    </div>
  );
};

export default HeroParticles3D;
