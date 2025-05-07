'use client';

import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Detailed } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function Shape({ index, z, speed }) {
    const ref = useRef();
    const { viewport, camera } = useThree();
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
    const [data] = useState({
        y: THREE.MathUtils.randFloatSpread(height * 2),
        x: THREE.MathUtils.randFloatSpread(2),
        spin: THREE.MathUtils.randFloat(8, 12),
        rX: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI,
        color: 'white', // Random color for stars
        roughness: 0,
        metalness: 1,
    });

    // Create a circle geometry for each "star"
    const geometry = new THREE.CircleGeometry(0.02, 32); // Radius of 0.5 for the star

    const material = new THREE.MeshBasicMaterial({
        color: data.color,
        transparent: true,
        opacity: 1,
        // blending: THREE.AdditiveBlending, // For glowing effect
        depthWrite: false, // Stars should render without depth buffering
    });

    useFrame((_, dt) => {
        if (dt < 0.1)
            ref.current.position.set(
                index === 0 ? 0 : data.x * width,
                (data.y += dt * speed),
                -z,
            );

        if (data.y > height * (index === 0 ? 4 : 1))
            data.y = -(height * (index === 0 ? 4 : 1));
    });

    return (
        <Detailed ref={ref} distances={[0, 65, 80]}>
            <mesh geometry={geometry} material={material} />
        </Detailed>
    );
}

export default function Shapes({
    speed = 0.7,
    count = 500,
    depth = 10,
    easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {
    return (
        <Canvas
            flat
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
            camera={{
                position: [0, 0, 45],
                fov: 20,
                near: 0.01,
                far: depth + 100,
            }}
            style={{
                background: 'linear-gradient(to bottom, #0b0526, #1f1550)',
            }}
        >
            {/* <color attach='background' args={['#0b0526']} /> */}
            {/* <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                color='white'
            /> */}
            <EffectComposer>
                <Bloom
                    intensity={3}
                    luminanceThreshold={0.8}
                    luminanceSmoothing={0.6}
                />
            </EffectComposer>
            {Array.from({ length: count }, (_, i) => (
                <Shape
                    key={i}
                    index={i}
                    z={Math.round(easing(i / count) * depth)}
                    speed={speed}
                />
            ))}
        </Canvas>
    );
}
