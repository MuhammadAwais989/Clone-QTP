import React from 'react'
import AppointDate from './AppointDate'
import OfficesHeader from '../../about/Offices/OfficesHeader'

function Reservation() {
  return (
    <>
    <OfficesHeader />
    <AppointDate/>
    <div className="Reser-cont">
        <div className="Reser-main">
        </div>
    </div>
    </>
  )
}

export default Reservation