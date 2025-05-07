'use client';

import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Detailed } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Individual star component
function Star({ index, z, speed }) {
    const ref = useRef();

    // Get viewport size at a specific depth (z)
    const { width, height } = useThree((state) =>
        state.viewport.getCurrentViewport(state.camera, [0, 0, -z]),
    );

    // Randomized initial position and color of the star
    const data = useRef({
        y: THREE.MathUtils.randFloatSpread(height * 2), // Random vertical position
        x: THREE.MathUtils.randFloatSpread(2), // Random horizontal offset
        color: 'white', // Star color
    }).current;

    // Animation loop to update star position every frame
    useFrame((_, dt) => {
        if (dt < 0.1) {
            // Move star upward based on speed and delta time
            ref.current.position.set(
                index === 0 ? 0 : data.x * width,
                (data.y += dt * speed),
                -z,
            );

            // Reset star to bottom if it goes beyond top of the screen
            if (data.y > height * (index === 0 ? 4 : 1))
                data.y = -height * (index === 0 ? 4 : 1);
        }
    });

    return (
        <Detailed ref={ref} distances={[0, 65, 80]}>
            <mesh>
                {/* Circle shape for the star */}
                <circleGeometry args={[0.02, 32]} />
                {/* Basic material with transparency */}
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
    speed = 0.7, // Speed of star movement
    count = 500, // Total number of stars
    depth = 10, // Depth layering of stars
    easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)), // Depth easing function
}) {
    return (
        <Canvas
            flat
            gl={{ antialias: false }}
            dpr={[1, 1.5]} // Device pixel ratio
            camera={{
                position: [0, 0, 45], // Camera position in 3D space
                fov: 20, // Field of view
                near: 0.01, // Near clipping plane
                far: depth + 100, // Far clipping plane
            }}
            style={{
                background: 'linear-gradient(to bottom, #0b0526, #1f1550)', // Sky gradient
            }}
        >
            {/* Postprocessing effect for glowing stars */}
            <EffectComposer>
                <Bloom
                    intensity={1}
                    luminanceThreshold={0.8}
                    luminanceSmoothing={0.6}
                />
            </EffectComposer>

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
    );
}
