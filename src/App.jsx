import './App.css'
import { AbsoluteOrientationSensor, Gyroscope } from 'motion-sensors-polyfill/src/motion-sensors';


function App() {

  let gyroscope = new Gyroscope({ frequency: 15 });
  let orientation = new AbsoluteOrientationSensor({ frequency: 60 });

  
  return (
    <div className='tiltComponent'>
      Move biatch - <pre>{JSON.stringify(gyroscope, null, 2)}</pre> - <pre>{JSON.stringify(orientation, null, 2)}</pre>
    </div>


  )
}

export default App;
