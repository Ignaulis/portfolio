import { Canvas } from "@react-three/fiber";
import { Center, Float } from "@react-three/drei";
import { Suspense, lazy } from "react";

// lazy load internal components
const OrbitingText = lazy(() => import("./text"));
const EarthModel = lazy(() => import("./earth"));
const Spaceman = lazy(() => import("./spaceman"));

export default function HeroScene() {
  return (
    <div className="lg:w-1/2 w-full h-[500px]">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 10],
        }}
      >
        <directionalLight
          position={[-1, 5, 7]}
          intensity={2.8}
          color="#cff0fa"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={null}>
          <OrbitingText text={`I'm Ignas Naulis`} />

          <Center>
            <EarthModel />
            <Float speed={2} rotationIntensity={0.6}>
              <Spaceman />
            </Float>
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
}
