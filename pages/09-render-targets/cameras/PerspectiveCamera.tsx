import { PerspectiveCamera } from '@react-three/drei';
import { forwardRef } from 'react';
import { PerspectiveCamera as PerspectiveCameraType } from 'three';

const Perspective = forwardRef<PerspectiveCameraType, any>(
  ({ ...props }, ref) => {
    return (
      <PerspectiveCamera
        aspect={1}
        far={5}
        fov={75}
        makeDefault
        near={0.1}
        position={[0, 0, 2]}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Perspective;
