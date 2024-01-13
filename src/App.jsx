import { useEffect, useRef } from 'react';
import './App.css'
import { AbsoluteOrientationSensor, Gyroscope } from 'motion-sensors-polyfill/src/motion-sensors';

function App() {

  let gyroRef = useRef();
  let orientationRef = useRef();

  useEffect(() => {
    let gyroscope = new Gyroscope({ frequency: 15 });
    let orientation = new AbsoluteOrientationSensor({ frequency: 60 });
    gyroRef.current = gyroscope;
    orientationRef.current = orientation;
  }, []);


  return (
    <div className='tiltComponent'>
      <div ref={gyroRef}>{gyroRef.current}</div>
      <div ref={orientationRef}>{orientationRef.current}</div>
    </div>


  )
}

export default App;
