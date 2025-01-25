import React, { useState } from "react";
import TimeSlot from "./TimeSlot";
import Reservation from "./Reservation";

function ToggleCompomemt() {
  const [showTimeSlot, setShowTimeSlot] = useState(true); // Track whether to show TimeSlot or Reservation

  const handleBackClick = () => {
    setShowTimeSlot(true); // Go back to TimeSlot
  };

  const handleNextClick = () => {
    setShowTimeSlot(false); // Show Reservation on "Next"
  };

  return (
    <div>
      {showTimeSlot ? (
        <TimeSlot handleBackClick={handleBackClick} onNextClick={handleNextClick} />
      ) : (
        <Reservation handleBackClick={handleBackClick} />
      )}
    </div>
  );
}

export default ToggleCompomemt;
