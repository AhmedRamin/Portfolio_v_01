import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Float,
  Icosahedron,
  MeshDistortMaterial,
  RoundedBox,
} from "@react-three/drei";
import * as THREE from "three";

/* Shared lighting for the light theme */
export const StudioLights = ({ warm = "#6d5cff", cool = "#06b6d4" }) => (
  <>
    <ambientLight intensity={0.75} />
    <directionalLight position={[4, 6, 4]} intensity={1.25} />
    <pointLight position={[-4, 2, 3]} intensity={22} color={warm} distance={14} />
    <pointLight position={[4, -2, 2]} intensity={16} color={cool} distance={14} />
  </>
);

/* Mouse parallax rig, reused by every scene */
export function Rig({ children, strength = 0.32 }) {
  const group = useRef(null);
  useFrame(({ pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * strength, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * strength * 0.7, 0.05);
  });
  return <group ref={group}>{children}</group>;
}

/* ---------------------------------------------------------------
   HERO — a floating cluster of glossy shapes
   --------------------------------------------------------------- */
export function HeroScene() {
  return (
    <>
      <StudioLights />
      <Rig>
        <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1}>
          <group position={[0.6, 0.1, 0]}>
            <Icosahedron args={[1.15, 6]}>
              <MeshDistortMaterial
                color="#8b7cff"
                roughness={0.18}
                metalness={0.15}
                distort={0.32}
                speed={1.3}
              />
            </Icosahedron>
            <Icosahedron args={[1.62, 1]}>
              <meshBasicMaterial color="#6d5cff" wireframe transparent opacity={0.22} />
            </Icosahedron>
          </group>
        </Float>

        <Float speed={1.8} rotationIntensity={1} floatIntensity={1.2}>
          <mesh position={[-1.5, 1.15, 0.6]} rotation={[0.4, 0.2, 0]}>
            <torusKnotGeometry args={[0.32, 0.11, 128, 24]} />
            <meshStandardMaterial color="#06b6d4" roughness={0.2} metalness={0.4} />
          </mesh>
        </Float>

        <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.9}>
          <RoundedBox args={[0.72, 0.72, 0.72]} radius={0.18} smoothness={4} position={[1.5, -1.1, 0.8]}>
            <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.1} />
          </RoundedBox>
        </Float>

        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.4}>
          <mesh position={[-1.1, -1.2, 0.4]}>
            <sphereGeometry args={[0.24, 32, 32]} />
            <meshStandardMaterial color="#f472b6" roughness={0.25} metalness={0.2} />
          </mesh>
        </Float>

        <Float speed={1.6} rotationIntensity={0.9} floatIntensity={1.1}>
          <mesh position={[1.6, 1.35, 0.2]} rotation={[0.6, 0.4, 0.3]}>
            <octahedronGeometry args={[0.34]} />
            <meshStandardMaterial color="#fbbf24" roughness={0.2} metalness={0.35} />
          </mesh>
        </Float>
      </Rig>

      <ContactShadows position={[0, -2.15, 0]} opacity={0.3} scale={11} blur={2.6} far={4.2} color="#3b2f80" />
    </>
  );
}

/* ---------------------------------------------------------------
   ABOUT — a soft single orb
   --------------------------------------------------------------- */
export function OrbScene() {
  return (
    <>
      <StudioLights warm="#8b7cff" cool="#22d3ee" />
      <Rig strength={0.42}>
        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.9}>
          <mesh>
            <sphereGeometry args={[1.15, 64, 64]} />
            <MeshDistortMaterial color="#a79bff" distort={0.28} speed={1.1} roughness={0.25} metalness={0.1} />
          </mesh>
          <mesh scale={1.35}>
            <sphereGeometry args={[1.15, 20, 20]} />
            <meshBasicMaterial color="#6d5cff" wireframe transparent opacity={0.16} />
          </mesh>
        </Float>
      </Rig>
      <ContactShadows position={[0, -1.7, 0]} opacity={0.25} scale={8} blur={2.8} far={3.6} color="#3b2f80" />
    </>
  );
}

/* ---------------------------------------------------------------
   SKILLS — orbiting tech cubes around a wireframe core
   --------------------------------------------------------------- */
export function OrbitScene() {
  const g1 = useRef(null);
  const g2 = useRef(null);

  useFrame((_, delta) => {
    if (g1.current) g1.current.rotation.y += delta * 0.4;
    if (g2.current) {
      g2.current.rotation.y -= delta * 0.26;
      g2.current.rotation.z += delta * 0.09;
    }
  });

  const colors = ["#6d5cff", "#06b6d4", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"];

  return (
    <>
      <StudioLights />
      <Rig strength={0.38}>
        <Icosahedron args={[0.85, 1]}>
          <meshBasicMaterial color="#6d5cff" wireframe transparent opacity={0.5} />
        </Icosahedron>

        <group ref={g1}>
          {colors.map((c, i) => {
            const a = (i / colors.length) * Math.PI * 2;
            return (
              <Float key={c} speed={1.4 + i * 0.15} rotationIntensity={1} floatIntensity={0.6}>
                <RoundedBox
                  args={[0.32, 0.32, 0.32]}
                  radius={0.07}
                  smoothness={3}
                  position={[Math.cos(a) * 2, (i % 2 ? 0.35 : -0.35), Math.sin(a) * 2]}
                >
                  <meshStandardMaterial color={c} roughness={0.22} metalness={0.3} />
                </RoundedBox>
              </Float>
            );
          })}
        </group>

        <group ref={g2}>
          <mesh rotation={[Math.PI / 2.6, 0, 0]}>
            <torusGeometry args={[2, 0.012, 12, 96]} />
            <meshBasicMaterial color="#6d5cff" transparent opacity={0.35} />
          </mesh>
          <mesh rotation={[Math.PI / 1.8, Math.PI / 5, 0]}>
            <torusGeometry args={[1.55, 0.012, 12, 96]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} />
          </mesh>
        </group>
      </Rig>
      <ContactShadows position={[0, -1.9, 0]} opacity={0.22} scale={9} blur={3} far={4} color="#3b2f80" />
    </>
  );
}

/* ---------------------------------------------------------------
   PROJECTS — floating glass panels
   --------------------------------------------------------------- */
export function PanelsScene() {
  const group = useRef(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.12;
  });

  return (
    <>
      <StudioLights warm="#22d3ee" cool="#6d5cff" />
      <group ref={group} rotation={[0.28, -0.5, 0.06]}>
        {[-1.15, 0, 1.15].map((x, i) => (
          <RoundedBox key={x} args={[0.98, 0.66, 0.05]} radius={0.06} smoothness={4} position={[x, i === 1 ? 0.28 : -0.1, i === 1 ? 0.5 : 0]}>
            <meshStandardMaterial
              color={i === 1 ? "#6d5cff" : "#ffffff"}
              roughness={0.18}
              metalness={0.2}
            />
          </RoundedBox>
        ))}
        <mesh position={[0, -1.05, 0.3]}>
          <boxGeometry args={[3.4, 0.03, 0.7]} />
          <meshStandardMaterial color="#dcd9ff" roughness={0.5} />
        </mesh>
      </group>
      <ContactShadows position={[0, -1.5, 0]} opacity={0.22} scale={10} blur={3} far={4} color="#3b2f80" />
    </>
  );
}

/* ---------------------------------------------------------------
   EDUCATION — stacked discs (a leaning tower of books)
   --------------------------------------------------------------- */
export function StackScene() {
  const group = useRef(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  const colors = ["#6d5cff", "#06b6d4", "#f59e0b"];

  return (
    <>
      <StudioLights />
      <group ref={group}>
        {colors.map((c, i) => (
          <Float key={c} speed={1.3 + i * 0.2} floatIntensity={0.35} rotationIntensity={0.15}>
            <mesh position={[0, -0.72 + i * 0.72, 0]} rotation={[0, i * 0.5, 0]}>
              <cylinderGeometry args={[1.05 - i * 0.1, 1.05 - i * 0.1, 0.2, 48]} />
              <meshStandardMaterial color={c} roughness={0.25} metalness={0.25} />
            </mesh>
          </Float>
        ))}
        <mesh position={[0, 1.72, 0]}>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.3} />
        </mesh>
      </group>
      <ContactShadows position={[0, -1.5, 0]} opacity={0.26} scale={8} blur={2.8} far={3.8} color="#3b2f80" />
    </>
  );
}

/* ---------------------------------------------------------------
   CONTACT — a floating envelope that opens and closes
   --------------------------------------------------------------- */
export function MailScene() {
  const flap = useRef(null);
  const body = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (body.current) body.current.rotation.y += delta * 0.25;
    if (flap.current) flap.current.rotation.x = -0.35 + Math.sin(t * 0.9) * 0.5;
  });

  return (
    <>
      <StudioLights warm="#6d5cff" cool="#22d3ee" />
      <Rig strength={0.4}>
        <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
          <group ref={body} scale={1.15}>
            <RoundedBox args={[1.9, 1.25, 0.14]} radius={0.08} smoothness={4}>
              <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.1} />
            </RoundedBox>
            <group ref={flap} position={[0, 0.62, 0]}>
              <mesh>
                <boxGeometry args={[1.9, 0.06, 0.72]} />
                <meshStandardMaterial color="#6d5cff" roughness={0.25} metalness={0.2} />
              </mesh>
            </group>
            <mesh position={[0, 0, 0.08]}>
              <boxGeometry args={[1.2, 0.07, 0.02]} />
              <meshStandardMaterial color="#06b6d4" roughness={0.3} />
            </mesh>
          </group>
        </Float>

        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
          <mesh position={[1.75, 0.9, 0.4]} rotation={[0.5, 0.3, 0.2]}>
            <tetrahedronGeometry args={[0.28]} />
            <meshStandardMaterial color="#f472b6" roughness={0.25} metalness={0.25} />
          </mesh>
        </Float>
        <Float speed={1.7} rotationIntensity={1} floatIntensity={1}>
          <mesh position={[-1.75, -0.75, 0.5]}>
            <sphereGeometry args={[0.22, 32, 32]} />
            <meshStandardMaterial color="#fbbf24" roughness={0.2} metalness={0.35} />
          </mesh>
        </Float>
      </Rig>
      <ContactShadows position={[0, -1.8, 0]} opacity={0.26} scale={9} blur={3} far={4} color="#3b2f80" />
    </>
  );
}

/* ---------------------------------------------------------------
   Ambient particle field, shared by the page background
   --------------------------------------------------------------- */
export function Particles({ count = 260, radius = 7, color = "#8b7cff" }) {
  const points = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * radius * 2;
      arr[i * 3 + 1] = (Math.random() - 0.5) * radius * 1.4;
      arr[i * 3 + 2] = (Math.random() - 0.5) * radius;
    }
    return arr;
  }, [count, radius]);

  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={ref} frustumCulled>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color={color} transparent opacity={0.55} depthWrite={false} sizeAttenuation />
    </points>
  );
}
