import { MobileContext } from "@/context/mobileContext";
import { TextureLoader } from "three";
import dynamic from "next/dynamic";
import hi from "@/assets/lottie/hello.json";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useContext, useEffect, useState } from "react";
import { Html } from "@react-three/drei";

// Lottie dynamic import
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Spaceman() {
  const gltf = useLoader(GLTFLoader, "/spaceman_model/scene.gltf");
  const cloud = useLoader(TextureLoader, "/text_cloud.png");
  const { isMobile } = useContext(MobileContext);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      setIsLoaded(true);
    }
  }, [gltf]);

  const position = isMobile ? [-1, 1, 6] : [-1.5, 1, 6];
  const scale = isMobile ? 0.15 : 0.2; // Reduced scale for mobile for better performance

  if (!isLoaded) {
    return (
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="gray" />
      </mesh>
    ); // Simple placeholder while loading
  }

  return (
    <group position={position}>
      <primitive object={gltf.scene} scale={scale} />

      <group position={[-0.3, 1.3, 0]}>
        <mesh>
          <planeGeometry args={[1.8, 1.1]} />
          <meshBasicMaterial map={cloud} transparent />
        </mesh>

        <Html
          center
          position={isMobile ? [-0.01, 0.04, 0] : [0, 0.03, 0.05]}
          transform
        >
          <div style={{ width: 65, height: 65 }}>
            <Lottie animationData={hi} loop={true} />
          </div>
        </Html>
      </group>
    </group>
  );
}
