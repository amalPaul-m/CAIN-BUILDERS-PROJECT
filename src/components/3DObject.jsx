import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";

const Bee3D = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Scene & Camera
    const scene = new THREE.Scene();

    // Responsive FOV (closer on mobile)
    const camera = new THREE.PerspectiveCamera(
      window.innerWidth < 768 ? 18 : 10, // FOV changes here
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 13;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);       // High DPI screens
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 2);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    // Load Model
    let bee;
    let mixer;

    const loader = new GLTFLoader();
    loader.load(
      "https://raw.githubusercontent.com/DennysDionigi/bee-glb/94253437c023643dd868592e11a0fd2c228cfe07/demon_bee_full_texture.glb",
      (gltf) => {
        bee = gltf.scene;

        // MOBILE SCALING
        const scaleAmount = window.innerWidth < 768 ? 0.12 : 0.2;
        bee.scale.set(scaleAmount, scaleAmount, scaleAmount);

        scene.add(bee);

        mixer = new THREE.AnimationMixer(bee);
        mixer.clipAction(gltf.animations[0]).play();

        moveModel();
      }
    );

    // Scroll positions
    const arrPositionModel = [
      { id: "banner", position: { x: 0, y: -1, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 } },
      { id: "intro", position: { x: 1, y: -1, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0.5 } },
      { id: "description", position: { x: -1, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0.2 } },
      { id: "contact", position: { x: 0.45, y: -2, z: -10 }, rotation: { x: 0.2, y: -0.5, z: -0.2 } }
    ];

    const moveModel = () => {
      const sections = document.querySelectorAll(".section");
      let currentSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) currentSection = section.id;
      });

      const position_active = arrPositionModel.findIndex(val => val.id === currentSection);

      if (position_active >= 0 && bee) {
        const new_coords = arrPositionModel[position_active];
        gsap.to(bee.position, { ...new_coords.position, duration: 3, ease: "power1.out" });
        gsap.to(bee.rotation, { ...new_coords.rotation, duration: 3, ease: "power1.out" });
      }
    };

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(0.02);
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update camera FOV responsively
      camera.fov = width < 768 ? 18 : 10;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Auto-scale the model on resize
      if (bee) {
        const newScale = width < 768 ? 0.12 : 0.2;
        bee.scale.set(newScale, newScale, newScale);
      }
    };

    window.addEventListener("scroll", moveModel);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", moveModel);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="container3D"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 100,
      }}
    />
  );
};

export default Bee3D;
