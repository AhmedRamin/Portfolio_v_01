import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { prefersReducedMotion, supportsWebGL, useInView } from "../hooks";

/**
 * Mounts a WebGL canvas only while its section is near the viewport, and
 * never on reduced-motion or non-WebGL devices. Keeps six 3D scenes cheap.
 */
export default function Lazy3D({
  children,
  className = "",
  camera = { position: [0, 0, 6], fov: 42 },
  dpr = [1, 1.6],
}) {
  const [ref, inView] = useInView("300px");
  const allowed = useMemo(() => supportsWebGL() && !prefersReducedMotion(), []);

  return (
    <div ref={ref} className={`scene ${className}`.trim()} aria-hidden>
      {allowed && inView ? (
        <Canvas
          camera={camera}
          dpr={dpr}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        >
          <Suspense fallback={null}>{children}</Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}
