import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {

  const [gyroscopeData, setGyroscopeData] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    const handleOrientation = (event) => {
      setGyroscopeData({
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma,
      });
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
      setStatus("As device is allowing this should");
    } else {
      console.log('Gyroscope not supported on this device.');
      setStatus("As device is not allowing, this should not");
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);


  return (
    <div className='gyroscope'>{status} move on phone movement <br /> {gyroscopeData.alpha} - {gyroscopeData.beta} - {gyroscopeData.gamma}</div>
  )
}

export default App;
