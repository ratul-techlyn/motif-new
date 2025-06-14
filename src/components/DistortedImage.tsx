'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

interface DistortedImageProps {
  image: string;
  displacementImage: string;
  width?: number;
  height?: number;
}

const DistortedImage = ({ image, displacementImage, width = 800, height = 500 }: DistortedImageProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, displacementMap] = useTexture([image, displacementImage]);

  useEffect(() => {
    if (meshRef.current) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping;
    }
  }, [texture, displacementMap]);

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      const x = (mouse.x * window.innerWidth) / 2;
      const y = (mouse.y * window.innerHeight) / 2;
      
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uMouse.value = new THREE.Vector2(x, y);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height, 32, 32]} />
      <shaderMaterial
        uniforms={{
          uTexture: { value: texture },
          uDisplacementMap: { value: displacementMap },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uIntensity: { value: 0.5 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform sampler2D uTexture;
          uniform sampler2D uDisplacementMap;
          uniform vec2 uMouse;
          uniform float uIntensity;
          varying vec2 vUv;

          void main() {
            vec2 distortedUv = vUv;
            vec2 mouse = uMouse / vec2(800.0, 500.0);
            float dist = distance(vUv, mouse);
            float influence = smoothstep(0.5, 0.0, dist);
            
            vec2 displacement = texture2D(uDisplacementMap, vUv).rg;
            displacement = displacement * 2.0 - 1.0;
            distortedUv += displacement * influence * uIntensity;
            
            gl_FragColor = texture2D(uTexture, distortedUv);
          }
        `}
      />
    </mesh>
  );
};

export default DistortedImage; 