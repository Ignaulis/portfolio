'use client';

// imports
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Center, Float, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useContext, useRef } from 'react';
import { MobileContextProvider } from '../context/mobileContext';
import { TextureLoader } from 'three';
import dynamic from 'next/dynamic';
import hi from '../assets/hello.json';

function EarthModel() {
    const { isMobile } = useContext(MobileContextProvider);

    const gltf = useLoader(GLTFLoader, '/lowpoly_earth/scene.gltf');
    const ref = useRef();

    useFrame((_, delta) => {
        ref.current.rotation.y += delta * 0.1;
    });

    return (
        <primitive
            ref={ref}
            object={gltf.scene}
            scale={isMobile ? 0.03 : 0.045}
        />
    );
}

function Spaceman() {
    const gltf = useLoader(GLTFLoader, '/spaceman_model/scene.gltf');
    const cloud = useLoader(TextureLoader, '/text_cloud.png');
    const { isMobile } = useContext(MobileContextProvider);

    const Lottie = dynamic(() => import('lottie-react'), {
        ssr: false,
    });

    const position = isMobile ? [-1, 1, 6] : [-2, 1, 6];

    return (
        <group position={position}>
            {/* Spaceman */}
            <primitive object={gltf.scene} scale={0.2} />

            {/* Teksto dėžutė (debesėlis) */}
            <group position={[-0.3, 1.3, 0]}>
                {/* Fonas */}
                <mesh>
                    <planeGeometry args={[1.8, 1.1]} />
                    <meshBasicMaterial map={cloud} transparent />
                </mesh>

                {/* Tekstas */}
                <Html center position={[0.05, 0.03, 0.05]} transform>
                    <div style={{ width: 65, height: 65 }}>
                        <Lottie animationData={hi} loop={true} />
                    </div>
                </Html>
            </group>
        </group>
    );
}

export default function HeroScene() {
    return (
        <Canvas
            className=''
            camera={{
                position: [0, 0, 10],
            }}
        >
            <directionalLight
                position={[-1, 6, 6]}
                intensity={3}
                color='#cff0fa'
            />
            <Center>
                <Suspense fallback={null}>
                    <EarthModel />
                    <Float speed={2} rotationIntensity={0.6}>
                        <Spaceman />
                    </Float>
                </Suspense>
            </Center>
        </Canvas>
    );
}
