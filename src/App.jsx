import {Canvas} from "@react-three/fiber";
import {Experience} from "./components/Experience.jsx";
import Scene from './components/TankComponent/Scene.jsx';
import {OrbitControls} from "@react-three/drei";

function App() {
    return (
        <Canvas shadows camera={{position: [3, 3, 3], fov: 30}}>
            <OrbitControls/>
            <color attach="background" args={["#ececec"]}/>
            <hemisphereLight intensity={0.35}/>
            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow/>
            <Scene/>
        </Canvas>
    );
}

export default App;
