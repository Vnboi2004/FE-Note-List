import { useCallback, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const TrianglesEffect = () => {
  const [options, setOptions] = useState<ISourceOptions | undefined>();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // Load particles nhẹ hơn
    setOptions({
      preset: "triangles",
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
};

export default TrianglesEffect;
