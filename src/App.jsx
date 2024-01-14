import { useState, useRef } from 'react';
import './App.css'

function App() {
  let tiltRef = useRef();

  // const [alphaState, setAlpha] = useState();
  // const [betaState, setBeta] = useState(0);
  // const [gammaState, setGamma] = useState();

  function handleOrientation(event) {
    const { alpha, beta, gamma } = event;
    // const betaCorrected = beta - 90;
    // setAlpha(alpha);
    if (gamma < 90 && gamma > -90) {
      // setGamma(gamma);
      tiltRef.current.style.backgroundPositionY = gamma + 'px';
    }

    if (alpha < 90 && alpha > -90) {
      // setAlpha(alpha);
      tiltRef.current.style.backgroundPositionX = alpha + 'px';
    }
  }


  async function requestDeviceOrientation() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permissionState = await DeviceOrientationEvent.requestPermission()
        if (permissionState === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation)
        } else {
          console.error('Access is not granted');
        }
      } catch (error) {
        console.error(error);
      }
    } else if ('DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', handleOrientation)
    } else {
      console.error('Device does not support gyroscope');
    }
  }


  return (
    <div className="wrapper">
      <p ref={tiltRef} className="text-clip" onClick={requestDeviceOrientation}>I&apos;m cool Gyroscope. Click on me to enable Gyroscope</p>
    </div>

  )
}

export default App;
