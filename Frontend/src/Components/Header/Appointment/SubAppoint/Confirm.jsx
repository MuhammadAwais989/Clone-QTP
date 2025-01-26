import React from 'react'
import { FaDownload } from "react-icons/fa6";

function Confirm() {
  return (
    <>
   <div className="appoint-detail-cont">
               <div className="appoint-detail-main">
                 <div className="appoint-table-main">
                   <div className="appoint-table-header" style={{display:"flex",justifyContent:"space-between",padding: "0 20px",alignItems:"center"}}>
                     <h3 >Appoint Details</h3>
                     <button className='down-btn'>
                     <FaDownload className='down-icon'/>
                     <span>Download</span>
                     </button>
                   </div>
                   <div className="table-header-below">
                    <div className="below-1">
                      <p>Appointment No :</p>
                      <span>1001009</span>
                    </div>
                    <div className="below-1">
                      <p>License Type :</p>
                      <span>Permanent Driving License</span>
                    </div>
                   </div>
                   {/* Appointment details */}
                   <div className="table-row">
                     <span>Name</span>
                     <p>Awais</p>
                   </div>
                   <div className="table-row">
                     <span>CNIC</span>
                     <p>Awais</p>
                   </div>
                   <div className="table-row">
                     <span>Booking For</span>
                     <p>Awais</p>
                   </div>
                   <div className="table-row">
                     <span>Time Slot</span>
                     <p>Awais</p>
                   </div>
                   <div className="table-row">
                     <span>Dealing Time</span>
                     <p>Awais</p>
                   </div>
                   <div className="table-row">
                     <span>Counter</span>
                     <p>Awais</p>
                   </div>
                   <div className="table-row">
                     <span>License Type</span>
                     <p>Awais</p>
                   </div>
                   <div className="table-row">
                     <span>Branch</span>
                     <p>Awais</p>
                   </div>
                 </div>
               </div>
               
             </div>
    </>
  )
}

export default Confirm