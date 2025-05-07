'use client';

// imports
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Center, Float } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useContext, useRef } from 'react';
import { MobileContextProvider } from '../context/mobileContext';

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

    const { isMobile } = useContext(MobileContextProvider);

    return (
        <primitive
            object={gltf.scene}
            position={isMobile ? [-1, 1, 6] : [-2, 1, 6]}
            scale={0.2}
        />
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
