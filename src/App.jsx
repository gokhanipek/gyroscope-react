import { useEffect, useRef } from 'react';
import './App.css'


function App() {

  let myRef = useRef(0);
  useEffect(() => {
    window.addEventListener('deviceorientation', function() {
      myRef.current = myRef.current + 1;
    });
  }, [])
  return (
    <div className='tiltComponent' ref={myRef}>
      Move biatch - {myRef.current}
    </div>


  )
}

export default App;
