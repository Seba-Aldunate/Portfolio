import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // importa el objeto
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // La etiqueta mesh crea el objeto 3d
    <mesh>
      {/* luces */}
      <hemisphereLight intensity={0.75}/>
      <pointLight intensity={10} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={100}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Primitive object */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    // Agrega un listener para cambios en tamaño de pantalla
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    // Setea el valor inicial de la variable de estado `isMobile`
    setisMobile(mediaQuery.matches);

    // Define una funcion callback para manejar los cambios a la media query
    const handleMediaQueryCange = (event) =>{
      setisMobile(event.matches);
    }

    // Agrega la funcion de callback como un listener para los cambios en los media query
    mediaQuery.addEventListener('change', 
    handleMediaQueryCange);

    // Remueve el listener cuando el componente está desmontado
    return () => {
      mediaQuery.removeEventListener('change',
      handleMediaQueryCange);
    }
   }, [])
  
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
