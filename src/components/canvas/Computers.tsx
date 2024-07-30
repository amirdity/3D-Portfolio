
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf") //import 3d model by this hook
  // 3D elements start with mesh
  return ( 
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} scale={0.75} position-y={-1.5} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}
const computersCanvas = () => {
  <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}> 
    
    <ambientLight intensity={0.3} />
    <Suspense fallback={<Preload />}>
      <OrbitControls />
      <Computers />
    </Suspense>


  </Canvas>
}
export default Computers