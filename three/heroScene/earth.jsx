import { useFrame } from "@react-three/fiber";
import { useRef, useContext, useEffect, useState } from "react";
import { MobileContext } from "@/context/mobileContext";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function EarthModel() {
  const { isMobile } = useContext(MobileContext);
  const gltf = useLoader(GLTFLoader, "/lowpoly_earth/scene.gltf");
  const ref = useRef();
  const [error, setError] = useState(false);

  // Handle loading errors
  useEffect(() => {
    if (!gltf) {
      setError(true);
    }
  }, [gltf]);

  // Rotate the earth model
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1; // Adjust speed of rotation
    }
  });

  // Traverse the loaded model and set shadows
  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.receiveShadow = true;
        }
      });
    }
  }, [gltf]);

  if (error) {
    return (
      <mesh>
        <textGeometry
          args={[
            "Failed to load model",
            { font: "helvetiker", size: 1, height: 0.1 },
          ]}
        />
        <meshBasicMaterial color="red" />
      </mesh>
    );
  }

  return (
    <primitive
      ref={ref}
      object={gltf?.scene}
      scale={isMobile ? 0.037 : 0.045}
    />
  );
}
