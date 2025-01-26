import React, { useState } from "react";
import layer from '../../../../images/Layer 0.826e515a98107a4d9111.png';
import OfficesData from './OfficesData'; 
import MapComponent from './OfficesMap'; 
import OfficesHeader from "./OfficesHeader";

function OfficesPage() {
  const [selectedCard, setSelectedCard] = useState("01");
  const [selectedMap, setSelectedMap] = useState(
    OfficesData.find((item) => item.no === "01")?.mapURL || ""
  ); 

  const handleCardClick = (mapURL, cardNo) => {
    setSelectedMap(mapURL);
    setSelectedCard(cardNo);
  };

  return (
    <>
      
      {/* office Header */}
      <OfficesHeader title="Traffic Police Offices"/>

      <div className="offices-cont">
        <div className="offices-main">
          <div className="num-card">
            <ul>
              {OfficesData.map((item) => (
                <li key={item.no}>
                  <div
                    className="office-wrap"
                    onClick={() => handleCardClick(item.mapURL, item.no)}
                  >
                    <div
                      className={`num-card-cont ${selectedCard === item.no ? "selected" : ""}`}
                    >
                      <h2>{item.no}</h2>
                    </div>
                    <p>{item.title}</p>
                  </div>
                </li>
              ))}
              <img className="offices-layer-img" src={layer} alt="" />
            </ul>
          </div>

          {/* map section */}
          <MapComponent mapURL={selectedMap} />
        </div>
      </div>
    </>
  );
}

export default OfficesPage;
