import React from 'react'
import { useState } from 'react'
import LearnerHeader from '../about/Offices/OfficesHeader'
import New from './SubLearner/New'

function Learner() {
  const [activebutton,setactivebutton] = useState('New'); 

  const buttonHandle = (btntype) => {
    setactivebutton(btntype)
  }
  return (
    <>
    {/* Header */}
    <LearnerHeader title="Learner Permit" />

    {/* Main */}
    <div className="learner-cont">
      <div className="learner-main">
       <div className="leaner-btns">
        <button
        className={activebutton === "New" ? "leaneractive" : ""}
        onClick={() => buttonHandle("New")}
        >
          New
        </button>
        <button
        className={activebutton === "Duplicate" ? "leaneractive" : ""}
        onClick={() => buttonHandle("Duplicate")}
        >Duplicate</button>
        <button
        className={activebutton === "Endorsement" ? "leaneractive" : ""}
        onClick={() => buttonHandle("Endorsement")}
        >Endorsement</button>
       </div>

       {/* Content Section */}
       <div className="leaner-content">
        {activebutton === "New" && <New/>}
       </div>
      </div>
    </div>
    </>
  )
}

export default Learner