"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeDOrb() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic setup
    const scene = new THREE.Scene();

    // Adjust camera to create the "inside the orb" effect
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 1; // Move camera closer to particles for an immersive effect

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Ensure transparency

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Create particle geometry
    const particleCount = 8000; // Adjust particle count for performance and effect
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Spread particles around the scene with size variation
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 20; // Increase spread for a larger orb
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Vary particle size for depth effect
      sizes[i] = Math.random() * 0.15 + 0.05; // Particle size between 0.05 and 0.2
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
      color: '#bbbbbb', // Softer color for a subtle effect
      size: 0.1,
      transparent: true,
      opacity: 0.5, // Reduced opacity for a more subtle look
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / 200; // Adjusted sensitivity
      mouseY = (event.clientY - windowHalfY) / 200;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the particle system
      particleSystem.rotation.y += 0.0005;
      particleSystem.rotation.x += 0.0005;

      // Move particles based on mouse position for an immersive effect
      particleSystem.rotation.x += (mouseY - particleSystem.rotation.x) * 0.01;
      particleSystem.rotation.y += (mouseX - particleSystem.rotation.y) * 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-0" />;
}
