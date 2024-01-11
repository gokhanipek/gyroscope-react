import './App.css'
import Tilt from "react-parallax-tilt";


function App() {
  return (
    <Tilt glareEnable={true}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      gyroscope={true}
      glareColor={"rgb(255,0,0)"}>
      <div className='tiltComponent'>
        Move biatch
      </div>
    </Tilt>

  )
}

export default App;
