import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import heroDashboardImg from '../assets/images/store/macbook-2880x1800/1-dashboard.png';

export default function Canvas3D({ scrollProgress = 0, mousePos = { x: 0, y: 0 } }) {
  const mountRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const laptopGroupRef = useRef(null);
  const lidGroupRef = useRef(null);
  const screenMeshRef = useRef(null);
  const particlesRef = useRef(null);
  const targetRotationRef = useRef({ x: 0.2, y: -0.3, z: 0 });
  const mouseInfluenceRef = useRef({ x: 0, y: 0 });

  // Update mouse influence
  useEffect(() => {
    mouseInfluenceRef.current = {
      x: mousePos.x * 0.35,
      y: mousePos.y * 0.25,
    };
  }, [mousePos]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch (_) {
      setWebglSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.4, 5.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // ── LIGHTS ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x60a5fa, 2.4);
    dirLight1.position.set(4, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf59e0b, 1.4);
    dirLight2.position.set(-4, -2, 2);
    scene.add(dirLight2);

    const frontLight = new THREE.PointLight(0xffffff, 1.2, 10);
    frontLight.position.set(0, 1, 3);
    scene.add(frontLight);

    // ── LAPTOP ROOT GROUP ──
    const laptopGroup = new THREE.Group();
    laptopGroupRef.current = laptopGroup;
    scene.add(laptopGroup);

    // Colors & Materials
    const metalColor = 0x1a1e2f;
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: metalColor,
      metalness: 0.88,
      roughness: 0.28,
    });

    const darkBezelMaterial = new THREE.MeshStandardMaterial({
      color: 0x090b12,
      metalness: 0.7,
      roughness: 0.5,
    });

    const keyboardDeckMaterial = new THREE.MeshStandardMaterial({
      color: 0x121524,
      metalness: 0.6,
      roughness: 0.6,
    });

    const trackpadMaterial = new THREE.MeshStandardMaterial({
      color: 0x22273d,
      metalness: 0.4,
      roughness: 0.35,
    });

    // ── 1. BASE CHASSIS ──
    const baseWidth = 3.6;
    const baseHeight = 0.12;
    const baseDepth = 2.4;

    const baseGeometry = new THREE.BoxGeometry(baseWidth, baseHeight, baseDepth);
    const baseMesh = new THREE.Mesh(baseGeometry, bodyMaterial);
    baseMesh.position.set(0, -baseHeight / 2, 0);
    laptopGroup.add(baseMesh);

    // Keyboard Deck Inset
    const kbDeck = new THREE.Mesh(
      new THREE.BoxGeometry(3.1, 0.015, 1.2),
      keyboardDeckMaterial
    );
    kbDeck.position.set(0, 0.065, -0.3);
    laptopGroup.add(kbDeck);

    // Trackpad
    const trackpad = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.012, 0.75),
      trackpadMaterial
    );
    trackpad.position.set(0, 0.063, 0.7);
    laptopGroup.add(trackpad);

    // ── 2. SCREEN LID (HINGED) ──
    const lidGroup = new THREE.Group();
    // Anchor hinge at back edge of base
    lidGroup.position.set(0, 0, -baseDepth / 2);
    lidGroupRef.current = lidGroup;
    laptopGroup.add(lidGroup);

    const lidWidth = 3.6;
    const lidHeight = 2.35;
    const lidThickness = 0.08;

    // Outer Lid Shell
    const lidMesh = new THREE.Mesh(
      new THREE.BoxGeometry(lidWidth, lidHeight, lidThickness),
      bodyMaterial
    );
    lidMesh.position.set(0, lidHeight / 2, -lidThickness / 2);
    lidGroup.add(lidMesh);

    // Inner Bezel
    const bezelMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(lidWidth * 0.98, lidHeight * 0.97),
      darkBezelMaterial
    );
    bezelMesh.position.set(0, lidHeight / 2, 0.042);
    lidGroup.add(bezelMesh);

    // Screen Texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(heroDashboardImg, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.generateMipmaps = true;

      const screenMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        toneMapped: false,
      });

      const screenGeo = new THREE.PlaneGeometry(3.35, 2.12);
      const screenMesh = new THREE.Mesh(screenGeo, screenMaterial);
      screenMesh.position.set(0, lidHeight / 2, 0.046);
      screenMeshRef.current = screenMesh;
      lidGroup.add(screenMesh);
    });

    // Subtle Glowing Logo on Lid Back
    const logoGlowMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
    });
    const logoPill = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.01, 32), logoGlowMat);
    logoPill.rotation.x = Math.PI / 2;
    logoPill.position.set(0, lidHeight / 2, -lidThickness - 0.005);
    lidGroup.add(logoPill);

    // ── 3. 3D FLOATING PARTICLES (Data constellation) ──
    const particleCount = 240;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorBlue = new THREE.Color(0x38bdf8);
    const colorGold = new THREE.Color(0xf59e0b);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;

      const mixedColor = Math.random() > 0.6 ? colorGold : colorBlue;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particlesRef.current = particles;
    scene.add(particles);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow particle drift
      if (particles) {
        particles.rotation.y = elapsedTime * 0.035;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;
      }

      // Smooth lerp to target orientation
      if (laptopGroup) {
        laptopGroup.rotation.x +=
          (targetRotationRef.current.x + mouseInfluenceRef.current.y - laptopGroup.rotation.x) * 0.08;
        laptopGroup.rotation.y +=
          (targetRotationRef.current.y + mouseInfluenceRef.current.x - laptopGroup.rotation.y) * 0.08;
        laptopGroup.rotation.z +=
          (targetRotationRef.current.z - laptopGroup.rotation.z) * 0.08;

        // Subtle floating idle bobbing
        laptopGroup.position.y = Math.sin(elapsedTime * 1.4) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      baseGeometry.dispose();
      bodyMaterial.dispose();
      darkBezelMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  // Update 3D pose based on scroll progress (0 = top, 1 = scrolled down)
  useEffect(() => {
    const p = Math.max(0, Math.min(1, scrollProgress));

    // When p goes 0 -> 1:
    // 1. Lid opens from 20 deg (0.35 rad) to ~106 deg (1.85 rad)
    if (lidGroupRef.current) {
      const openAngle = THREE.MathUtils.lerp(0.25, 1.88, Math.min(p * 1.5, 1));
      lidGroupRef.current.rotation.x = openAngle;
    }

    // 2. Laptop orientation smoothly transitions from dramatic perspective tilt to straight-on focus
    if (laptopGroupRef.current) {
      // Rotation: from tilted (-0.45, 0.45, -0.15) to front facing (0.12, 0, 0)
      targetRotationRef.current = {
        x: THREE.MathUtils.lerp(0.38, 0.12, p),
        y: THREE.MathUtils.lerp(-0.55, 0, p),
        z: THREE.MathUtils.lerp(-0.15, 0, p),
      };

      // Position: moves forward and up
      laptopGroupRef.current.position.z = THREE.MathUtils.lerp(-0.4, 0.35, p);
    }
  }, [scrollProgress]);

  if (!webglSupported) {
    return (
      <div className="window" id="heroWindow">
        <div className="window-bar">
          <div className="dots"><span className="wdot" /><span className="wdot" /><span className="wdot" /></div>
          <div className="window-title">Akademia — Admin Dashboard</div>
          <span className="window-pill">Windows</span>
        </div>
        <img src={heroDashboardImg} alt="Akademia Admin Dashboard" loading="eager" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="canvas-3d-wrap"
      style={{
        width: '100%',
        height: 'clamp(380px, 58vw, 620px)',
        position: 'relative',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  );
}
