import { useRef } from 'react';

function App() {
  let tiltRef = useRef();

  function handleOrientation(event) {
    const { alpha, beta, gamma } = event;
      tiltRef.current.style.backgroundPositionY = gamma + '%';
      tiltRef.current.style.backgroundPositionX = beta + '%';
      console.log(tiltRef.current.style.filter);
      var correctedAlpha = (alpha / 360) + 0.5;
      tiltRef.current.style.filter = "brightness(" + correctedAlpha +")";
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
      <p ref={tiltRef} className="text-clip">Cool Nice Tree</p>
      <button onClick={requestDeviceOrientation}>Click me</button>
    </div>

  )
}

export default App;
