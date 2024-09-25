import React, {useEffect, useState} from 'react';
import "../Home.css";

const Welcome = () => {

  const [aparecer, setAparecer] = useState({ transform: 'translate(-200%, 0)', opacity: '0' });

  let scrollValue = window.scrollY;

  console.log(scrollValue)

  useEffect(() => {
    
    console.log("scrollValue", scrollValue)

    if(window.scrollY === 0) {
      setTimeout(() => {
        setAparecer({transform: 'translate(0, 0)', opacity: '1'});
      }, 1000)
    }

  }, [aparecer, scrollValue]);

  return (
    <div>
      <div className='row welcome'>
        <h1 style={aparecer}>Comienza hoy con tu página web</h1>
        <a href='mailto:facundonahuelmuller@gmail.com' style={aparecer}>Hablemos</a>
        <div className='welcomeImg'></div>
      </div>
    </div>
  )
}

export default Welcome;
