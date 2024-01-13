import { useEffect, useRef } from 'react';
import './App.css'

function App() {
  const tiltableRef = useRef();
  useEffect(() => {
    let counter = 0;
    const updateRate = 10;
    const limit = 45;

    function updateNow() {
      return counter++ % updateRate === 0;
    }

    window.addEventListener("deviceorientation", function (event) {
      if (updateNow()) {
        let position = Math.round(event.gamma);
        if (Math.abs(position) > limit) {
          if (position > limit) {
            position = limit;
          } else {
            position = -limit;
          }
        }
        position = position / -100;
        let style = "rotateY(" + position + "deg)";
        tiltableRef.current.style.transform = style;
      }
    });


  }, [])


  return (
    <div className="wrapper">
      <img ref={tiltableRef} id="tiltable" src="https://images.pexels.com/photos/19709063/pexels-photo-19709063/free-photo-of-fabrika-tomurcuk-botanik-ayrilmak.jpeg" />
    </div>

  )
}

export default App;
