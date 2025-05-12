import { MobileContext } from "@/context/mobileContext";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";

export default function OrbitingText({ text }) {
  const { isMobile } = useContext(MobileContext);
  const textRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    const radius = isMobile ? 3.9 : 4.8;
    const speed = -0.85;

    if (textRef.current) {
      textRef.current.position.x = Math.sin(time * speed) * radius;
      textRef.current.position.z = Math.cos(time * speed) * radius;

      textRef.current.lookAt(0, 0, 0);
      textRef.current.rotation.y += Math.PI;
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={isMobile ? "0.8" : 1}
      color="white"
      maxWidth={200}
      lineHeight={1}
      fontWeight={"bold"}
      letterSpacing={0.05}
      textAlign="center"
      curveRadius={isMobile ? -4.4 : -5.8}
      castShadow
      font="/fonts/ComicRelief-Bold.ttf"
    >
      {text}
    </Text>
  );
}
