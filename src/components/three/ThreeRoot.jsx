import Lazy3D from "./Lazy3D";
import {
  HeroScene,
  MailScene,
  OrbitScene,
  OrbScene,
  PanelsScene,
  StackScene,
} from "./Scenes";

/** Every heavy 3D import lives in this module so it can be lazily loaded. */
const MAP = {
  hero: HeroScene,
  orb: OrbScene,
  orbit: OrbitScene,
  panels: PanelsScene,
  stack: StackScene,
  mail: MailScene,
};

export default function ThreeRoot({ name, ...rest }) {
  const Cmp = MAP[name];
  if (!Cmp) return null;

  return (
    <Lazy3D {...rest}>
      <Cmp />
    </Lazy3D>
  );
}
