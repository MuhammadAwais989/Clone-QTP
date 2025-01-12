import React from 'react'
import OfficesHeader from '../../about/Offices/OfficesHeader'

function Applicant() {
  return (
    <>
        <OfficesHeader title="Applicant"/>
        {/* Applicant */}
       <div className="applicant-cont">
        <div className="applicant-main">
            <div className="applicant-date">
                <h4>Appointment Date</h4>
                <p>12 Aug 2021</p>
            </div>
        </div>
       </div>

    </>
  )
}

export default Applicant