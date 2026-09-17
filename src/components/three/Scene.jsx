import { Suspense, lazy } from "react";

/**
 * Public 3D entry point. Everything below it (react-three-fiber, drei and
 * three.js — roughly 900 kB) lives behind this single dynamic import, so the
 * page first paint only ships the app shell. The canvas itself then mounts
 * only when its section scrolls near the viewport (see Lazy3D).
 */
const ThreeRoot = lazy(() => import("./ThreeRoot"));

export default function Scene({ name, className = "", ...rest }) {
  return (
    <Suspense fallback={<div className={`scene ${className}`.trim()} aria-hidden />}>
      <ThreeRoot name={name} className={className} {...rest} />
    </Suspense>
  );
}
