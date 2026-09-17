import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------
   Morphing core — the anchor of the hero's 3D layer
   ------------------------------------------------------------------ */
function Core({ scrollRef }) {
  const inner = useRef(null);
  const shellA = useRef(null);
  const shellB = useRef(null);
  const group = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (inner.current) {
      inner.current.rotation.y += delta * 0.22;
      inner.current.rotation.x = Math.sin(t * 0.28) * 0.2;
    }
    if (shellA.current) {
      shellA.current.rotation.y -= delta * 0.13;
      shellA.current.rotation.z = Math.cos(t * 0.22) * 0.22;
    }
    if (shellB.current) {
      shellB.current.rotation.y += delta * 0.07;
      shellB.current.rotation.x = Math.sin(t * 0.16) * 0.14;
    }
    // drift downward + rotate gently as the visitor scrolls
    if (group.current) {
      const s = scrollRef.current;
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -s * 0.0016, 0.08);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, s * 0.0004, 0.06);
    }
  });

  return (
    <group ref={group}>
      <Icosahedron ref={inner} args={[1.2, 6]}>
        <MeshDistortMaterial
          color="#4f7cff"
          emissive="#1b2f8a"
          emissiveIntensity={0.8}
          roughness={0.16}
          metalness={0.9}
          distort={0.34}
          speed={1.4}
        />
      </Icosahedron>

      <Icosahedron ref={shellA} args={[1.78, 1]}>
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.34} />
      </Icosahedron>

      <Icosahedron ref={shellB} args={[2.45, 1]}>
        <meshBasicMaterial color="#8fb0ff" wireframe transparent opacity={0.1} />
      </Icosahedron>
    </group>
  );
}

/* ------------------------------------------------------------------
   Orbiting satellite shapes
   ------------------------------------------------------------------ */
function Satellites() {
  const a = useRef(null);
  const b = useRef(null);
  const c = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (a.current) {
      a.current.position.set(Math.cos(t * 0.5) * 3.1, Math.sin(t * 0.7) * 0.7, Math.sin(t * 0.5) * 3.1);
      a.current.rotation.x += delta * 0.6;
      a.current.rotation.y += delta * 0.4;
    }
    if (b.current) {
      b.current.position.set(Math.cos(t * 0.34 + 2) * 3.7, Math.cos(t * 0.5) * 0.9, Math.sin(t * 0.34 + 2) * 3.7);
      b.current.rotation.z += delta * 0.5;
    }
    if (c.current) {
      c.current.position.set(Math.cos(-t * 0.42 + 4) * 2.8, Math.sin(t * 0.6 + 1) * 0.6, Math.sin(-t * 0.42 + 4) * 2.8);
      c.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <>
      <mesh ref={a}>
        <tetrahedronGeometry args={[0.19]} />
        <meshStandardMaterial color="#22d3ee" emissive="#0891b2" emissiveIntensity={0.7} roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh ref={b}>
        <octahedronGeometry args={[0.17]} />
        <meshStandardMaterial color="#a5b8ff" emissive="#4f7cff" emissiveIntensity={0.6} roughness={0.25} metalness={0.75} />
      </mesh>
      <mesh ref={c}>
        <torusGeometry args={[0.24, 0.055, 16, 42]} />
        <meshStandardMaterial color="#7c9bff" emissive="#3b5bdb" emissiveIntensity={0.55} roughness={0.3} metalness={0.8} />
      </mesh>
    </>
  );
}

/* ------------------------------------------------------------------
   Drifting particle field
   ------------------------------------------------------------------ */
function Dust() {
  const positions = useMemo(() => {
    const count = 700;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 5.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

/* ------------------------------------------------------------------
   Mouse-parallax rig
   ------------------------------------------------------------------ */
function Rig({ children }) {
  const group = useRef(null);
  useFrame(({ pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.4, 0.045);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.26, 0.045);
  });
  return <group ref={group}>{children}</group>;
}

/* ------------------------------------------------------------------
   Public component
   ------------------------------------------------------------------ */
export default function Scene3D() {
  const scrollRef = useRef(0);

  if (typeof window !== "undefined") {
    // read once per render — cheap and only used for a subtle drift
    scrollRef.current = window.scrollY || 0;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 6.6], fov: 44 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 4]} intensity={1.5} color="#9db4ff" />
      <pointLight position={[-5, -3, -4]} intensity={2.4} color="#22d3ee" />

      <Rig>
        <Float speed={1.5} rotationIntensity={0.45} floatIntensity={0.8}>
          <group position={[1.35, 0.15, 0]}>
            <Core scrollRef={scrollRef} />
            <Satellites />
          </group>
        </Float>
        <Dust />
      </Rig>
    </Canvas>
  );
}
