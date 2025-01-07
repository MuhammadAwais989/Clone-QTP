import React from 'react'
import vectortop from '../../images/vector-top.b22e6170ecdd7ec3d712.png' 

export function SectionTwo() {
    
    return (
        <>
            <div className="S-two-cont">
                <div className="img-div">
                    <img src={vectortop} alt="" />
                </div>
                <div className="btn-div">
                    <button className='s-t-btn-f' >Driving License</button>
                    <button className='s-t-btn'>Traffic</button>
                </div>
            </div>
        </>
    )
}
