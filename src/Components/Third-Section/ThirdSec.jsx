import React from "react";
import one from "../../images/download.png";
import map from "../../images/map.994a7be2c80a5970eccb.png";

function ThirdSec() {
  return (
    <div className="ThirdSec-cont">
      <img src={one} className="third-sectop-img" alt="" />

      <div className="third-first">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="third-iner-first"
        >
          <h1>
            <span>History</span> Of Quetta
          </h1>
          <p>
            Quetta, the capital of Balochistan, Pakistan, encapsulates a
            compelling history that spans millennia, echoing the footsteps of
            ancient civilizations and enduring the ebb and flow of imperial
            conquests. With evidence of human habitation dating back to the
            Paleolithic era, the region became an integral part of the Persian
            Empire and later witnessed the influence of Islamic cultures. In the
            17th century, the Khanate of Kalat was established, asserting a
            degree of autonomy that persisted through the subsequent British
            colonial period. Quetta's strategic importance burgeoned during this
            time, transforming it into a vital garrison town. The partition of
            British India in 1947 marked a pivotal moment as Balochistan acceded
            to Pakistan, designating Quetta as its capital. This ushered in a
            new era, where the province grappled with questions of political
            autonomy and economic development . Balochistan's complex
            geopolitical dynamics, characterized by tribal structures and
            external influences, have contributed to periodic unrest and
            insurgency. Despite these challenges, Quetta stands as a resilient
            city, echoing both ancient legacies and contemporary struggles.
            Today, it is a testament to the confluence of historical richness
            and the ongoing narrative of a region seeking its place within the
            intricate tapestry of Pakistani history. Balochistan's unique
            identity continues to evolve against the backdrop of its
            multifaceted past, reflecting the resilience and tenacity of its
            people in the face of changing times and complex geopolitical
            realities.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="third-iner-second"
        >
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ThirdSec;
