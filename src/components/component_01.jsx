import React, { useState } from 'react'

function Component() {
  const [text, setText] = useState();
  const [update, setUpdate] = useState();

  const changeText = (e)=>{
    setText(e.target.value);
  }

  const updateText = ()=>{
    setUpdate(text);
  }

  return (
    <>
      <input type="text" value={text} onChange={changeText}/>
      <p>Este es mi texto: {text}</p>
      <button onClick={updateText}>Ingresar</button>
      <p>Texto Actualizado: {update}</p>
    </>
  )
}

export default Component
