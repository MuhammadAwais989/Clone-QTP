import React from 'react'
import AimsHeader from '../Offices/OfficesHeader'

function AimsPage() {
    const AimsData = [
        {
            title: "Traffic",
            Description: "City traffic flow requires a comprehensive approach from authorities and police",
            image: require("../../../../images/Public.1254b757e0eecac4a11c.png"),
        },
        {
            title: "Traffic Laws",
            Description: "Raising public awareness and enforcing traffic laws are key to promoting road safety and responsible behavior",
            image: require("../../../../images/Traffic.7e9aa0668808c2e5896c.png"),
        },
        {
            title: "Public",
            Description: "Traffic police aim to manage traffic while also serving and facilitating the public",
            image: require("../../../../images/Traffic Laws.c86627016cda7796e032.png"),
        },
        {
            title: "Traffic",
            Description: "A comprehensive strategy is needed to reduce accidents and enhance road safety",
            image: require("../../../../images/Accidents.74744ada078b500ec1eb.png"),
        },
    ]
  return (
    <>
    {/* Aims Header */}
    <AimsHeader title="Aims"/>

    <div className="aims-cont">
        <div className="aims-main">
            {AimsData.map((item, index) => (
                <div className="Aims-card" key={index}>
                    <div className="aim-text">
                        <h1>{item.title}</h1>
                        <p>{item.Description}</p>
                    </div>
                    <div className="aim-image">
                        <img src={item.image} alt="" />
                    </div>
                </div>
            ))}
            
            
        </div>
    </div>
    </>
  )
}

export default AimsPage