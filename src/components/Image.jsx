import React from 'react'
import img1 from '../img/CODM_1.jpg'

const Image = () => {
  return (
    <div class="row">
        <div class="col"></div>
        <div class="col">
            <img src={img1} width="300px" height="200px" alt="Imagen 1 CODM" />
        </div>
        <div class="col"></div>
    </div>
  )
}

export default Image