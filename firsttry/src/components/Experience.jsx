import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Office } from './Office';
import { Crate } from './Crate'
import { Keyboard } from './Keyboard';
import { Overlay } from './Overlay';

const Experience = () => {
    return (
        <>
            {/* <ambientLight intensity={1} /> */}
            <directionalLight
                intensity={2}
                position={[5, 5, -2]}
                color="white"
            />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25}>
                <Overlay />
                {/* <Office /> */}
                <Crate scale={[4, 4, 4]} />
            </ScrollControls>
        </>
    );
};

export default Experience;