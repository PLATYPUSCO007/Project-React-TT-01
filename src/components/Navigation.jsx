import React from 'react'
import { Link } from "react-router-dom";

import Image1 from "../img/CODM_1.jpg";
import Image2 from '../img/CODM_2.jpg';
import Image3 from '../img/CODM_3.jpg';
import Image4 from '../img/CODM_4.jpg';
import Image5 from '../img/CODM_5.jpg';

const Navigation = () => {
  return (
    <div class="mt-2 mb-2 row">
        <div className="col-3">
            <Link to="/Image">
                <figure className='figure'>
                    <img src={Image1} alt="" className='figure-img img-fluid rounded'/>
                    <figcaption className='figure-caption'>
                        CODM 1
                    </figcaption>
                </figure>
            </Link>
        </div>
        <div className="col-3">
            <Link to="/Image2">
                <figure className='figure'>
                    <img src={Image2} alt="" className='figure-img img-fluid rounded'/>
                    <figcaption className='figure-caption'>
                        CODM 2
                    </figcaption>
                </figure>
            </Link>
        </div>
        <div className="col-3">
            <Link to="/Image3">
                <figure className='figure'>
                    <img src={Image3} alt="" className='figure-img img-fluid rounded'/>
                    <figcaption className='figure-caption'>
                        CODM 3
                    </figcaption>
                </figure>
            </Link>
        </div>
        <div className="col-3">
            <Link to="/Image4">
                <figure className='figure'>
                    <img src={Image4} alt="" className='figure-img img-fluid rounded'/>
                    <figcaption className='figure-caption'>
                        CODM 4
                    </figcaption>
                </figure>
            </Link>
        </div>
        <div className="col-3">
            <Link to="/Image5">
                <figure className='figure'>
                    <img src={Image5} alt="" className='figure-img img-fluid rounded'/>
                    <figcaption className='figure-caption'>
                        CODM 5
                    </figcaption>
                </figure>
            </Link>
        </div>
    </div>
  )
}

export default Navigation