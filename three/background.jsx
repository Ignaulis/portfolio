import { useRef, useMemo } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Detailed } from "@react-three/drei";
import * as THREE from "three";

// Individual star component
function Star({ index, z, speed }) {
  const ref = useRef();

  // Get viewport size at a specific depth (z)
  const { width, height } = useThree((state) =>
    state.viewport.getCurrentViewport(state.camera, [0, 0, -z])
  );

  const data = useMemo(
    () => ({
      y: THREE.MathUtils.randFloatSpread(height * 2),
      x: THREE.MathUtils.randFloatSpread(2),
      color: "white",
    }),
    [height, width]
  );

  // Animation loop to update star position every frame
  useFrame((_, dt) => {
    if (dt < 0.1) {
      // Move star upward based on speed and delta time
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z
      );

      // Reset star to bottom if it goes beyond top of the screen
      if (data.y > height * (index === 0 ? 4 : 1)) {
        data.y = -height * (index === 0 ? 4 : 1);
      }
    }
  });

  return (
    <Detailed ref={ref} distances={[0, 65, 80]}>
      <mesh>
        {/* Simplified circle for stars */}
        <circleGeometry args={[0.015, 32]} />
        <meshBasicMaterial
          color={data.color}
          transparent
          opacity={1}
          depthWrite={false}
        />
      </mesh>
    </Detailed>
  );
}

// Main starry sky background component
export default function StarSkyBackground({
  speed = 0.7,
  count = 500,
  depth = 10,
  easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {
  return (
    <div className="absolute inset-0">
      <Canvas
        flat
        gl={{ antialias: false }}
        dpr={[1, 1.5]} // Device pixel ratio
        camera={{
          position: [0, 0, 45],
          fov: 20,
          near: 0.01,
          far: depth + 100,
        }}
        style={{
          background: "linear-gradient(to bottom, #0b0526, #1f1550)",
        }}
      >
        {/* Render multiple stars with depth-based distribution */}
        {Array.from({ length: count }, (_, i) => (
          <Star
            key={i}
            index={i}
            z={Math.round(easing(i / count) * depth)}
            speed={speed}
          />
        ))}
      </Canvas>
    </div>
  );
}
