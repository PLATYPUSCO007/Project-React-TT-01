import React from 'react'
import { Link } from "react-router-dom";

import Image1 from "./Image";
import Image2 from './Image2';

const Navigation = () => {
  return (
    <div>
        <Link to="/Image">
            <figure>
                <img src={Image1} alt="" />
                <figureCaption>
                    CODM 1
                </figureCaption>
            </figure>
        </Link>
        <Link to="/Image2">
            <figure>
                <img src={Image2} alt="" />
                <figureCaption>
                    CODM 2
                </figureCaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation