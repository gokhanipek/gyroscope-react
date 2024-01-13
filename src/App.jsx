import { useEffect, useRef } from 'react';
import './App.css'

function App() {
  let tiltRef = useRef();

  function handleOrientation(event) {
    let alpha = event.alpha
    let beta = event.beta
    let gamma = event.gamma
    console.warn('ye yoooo')
    tiltRef.current.style.transform = 'rotateX(' + beta/100 + 'deg) rotateY(' + gamma/100 + 'deg) rotateZ(' + alpha/100 + 'deg)';
    console.warn(alpha, beta, gamma)

  }


  async function requestDeviceOrientation() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      //iOS 13+ devices
      try {
        const permissionState = await DeviceOrientationEvent.requestPermission()
        if (permissionState === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation)
        } else {
          alert('Permission was denied')
        }
      } catch (error) {
        alert(error)
      }
    } else if ('DeviceOrientationEvent' in window) {
      //non iOS 13+ devices
      console.log("not iOS");
      window.addEventListener('deviceorientation', handleOrientation)
    } else {
      //not supported
      alert('nicht unterstützt')
    }
  } 


  return (
    <div className="wrapper">
      <div className='tilt' ref={tiltRef}>my element</div>
      <button onClick={requestDeviceOrientation}>Enable</button>
    </div>

  )
}

export default App;
