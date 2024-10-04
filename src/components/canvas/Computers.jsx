import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./dream_computer_setup/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={4}
      groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight 
      intensity={50}
      />
      <primitive 
        object={computer.scene}
        // scale={isMobile ? 0.12 : 1}
        scale={isMobile ? 0.12 : 0.15}
        position={isMobile? [0, -1, 0.38] :[0, -1, 0.74]}
        rotation={[0, 70.45, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() =>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  })


  return(
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [20, 3, 5], 
        fov: 25,
      }}
      gl={ { preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;