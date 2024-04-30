import { useRef } from 'react';

function App() {
  let tiltRef = useRef();

  function handleOrientation(event) {
    const { beta, gamma } = event;
      tiltRef.current.style.backgroundPositionX = gamma + '%';
      tiltRef.current.style.backgroundPositionY = beta + '%';
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
