import React, { useEffect, useRef } from 'react';
import '../Stylesheets/Home.css';
import HomeBackground from '../Backgrounds/HomeBackground';
import About from './About.jsx';
import TechStack from './TechStack.jsx';
import Projects from './Projects.jsx';
import Educational from './Educational.jsx';
import Contact from './Contact.jsx';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

const Home = () => {
  const canvasRef = useRef(null);
  const modelRef = useRef(null); // To keep track of the loaded model

  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load HDRI environment map with PMREMGenerator
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/warm_bar_1k.hdr', (texture) => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      scene.environment = envMap;

      texture.dispose();
      pmremGenerator.dispose();
    });
    let model;

    const loader = new GLTFLoader();
    loader.load(
      './DamagedHelmet.gltf', // Replace with your model path
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
        modelRef.current = model; // Store the model in the ref for later use
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    camera.position.z = 5;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;

    // Mouse movement handler
    const onMouseMove = (event) => {
      if (modelRef.current) {
        const x = (event.clientX / window.innerWidth -0.5)*(Math.PI*.3);
        const y = (event.clientY / window.innerHeight-0.5)*(Math.PI*.3);

        
        model.rotation.y = x*0.5 ; 
        model.rotation.x = y*0.5 ; 
      }
    };

    // Animation loop
    const animate = () => {
      window.requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Ring rotation handler
    const handleRingRotation = (event) => {
      const x = event.clientX;
      const width = window.innerWidth;
      const img = document.querySelector('.ring');
      if (img) {
        if (x > width / 2 + 50) {
          img.style.transition = 'transform 4500s linear';
          img.style.transform = 'rotate(36000deg)';
        } else if (x < width / 2 - 50) {
          img.style.transition = 'transform 4500s linear';
          img.style.transform = 'rotate(-36000deg)';
        } else {
          img.style.transform = 'rotate(0deg)';
        }
      }
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight); 
      composer.setSize(window.innerWidth, window.innerHeight); 
    };

    // document.addEventListener('mousemove', handleRingRotation);
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleRingRotation);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="Homecontainer">
        <canvas ref={canvasRef} style={{  zIndex: -1, height: '200px' }} id='canvas' />
        <div id='name' className="name">ATTADA&nbsp; SAI &nbsp;PRAHARSHA</div>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="techstack">
        <TechStack />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Educational />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
