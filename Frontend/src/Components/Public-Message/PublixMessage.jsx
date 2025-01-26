import React from "react";
import sideRund from "../../images/side-round.e8f4a34660a555d9f926.png";
import reactTop from "../../images/react-top.a202dce5d074d903dafe.png";
import publicofficer from "../../images/public_Officer.8c64f6e0d2839419ba63.png";
import rect from "../../images/rect.19e7f2238303f3c4c805.png";
import comaas from "../../images/comaasa.png";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

function PublicMessage() {
  const [typeEffect] = useTypewriter({
    words: ["Muhammad Behram Khan Mandokhel"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="msg-cont">
      <img src={sideRund} alt="" />
      <div className="animate-img">
        <img src={reactTop} alt="" />
      </div>

      <div className="main-cont">
        <img className="rect" src={rect} alt="" />
        <img className="publicofficer" src={publicofficer} alt="" />

        <div className="pulic-text-div">
          <motion.div 
            variants={fadeIn("scale", 0)}
            initial="ScaleD"
            whileInView="ScaleI"
            viewport={{ once: false, amount: 0 }}
          >
            <h1>Public Message</h1>
            <motion.div 
            variants={fadeIn("scale", 0.1)}
            initial="ScaleD"
            whileInView="ScaleI"
            viewport={{ once: false, amount: 0 }}
          >
            <img className="commas-img" src={comaas} alt="" />
          </motion.div>
          </motion.div>

          

          <motion.div 
            variants={fadeIn("scale", 0.2)}
            initial="ScaleD"
            whileInView="ScaleI"
            viewport={{ once: false, amount: 0 }}
          >
            <div className="SP-name">
              <h2>{typeEffect}</h2> <br />
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn("scale", 0.3)}
            initial="ScaleD"
            whileInView="ScaleI"
            viewport={{ once: false, amount: 0 }}
          >
            <div className="sp-name-bwlow">
              <p>(PSP SSP Traffic)</p>
            </div>
          </motion.div>

            <div className="sp-detail"
            data-aos="zoom-in"
            >
              <p>
                I'm a traffic police inspector, and I've seen a lot of really sad
                things because of accidents on the road. Every year, a bunch of
                people get hurt or even lose their lives in these accidents, and
                the worst part is, most of them could have been avoided. So, I'm
                writing to ask you to please be careful when you're driving.
                Follow the rules—it's important. First off, don't go too fast.
                Speeding causes a lot of accidents because you don't have enough
                time to react if something unexpected happens. Also, don't drink
                and drive. It messes with your thinking and reactions, making
                driving dangerous. If you've been drinking, find someone sober to
                take you home. Avoid distractions too, like texting or eating
                while driving. Keep your eye s on the road and hands on the wheel.
                Simple things like using your turn signals and checking before
                changing lanes help prevent accidents too. And please, be patient
                and kind to other drivers. Getting angry on the road can lead to
                accidents. We all need to share the road and look out for each
                other. By doing these things, you're not just keeping yourself
                safe, but you're helping make the roads safer for everyone. Thanks
                a lot for listening and doing your part.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PublicMessage;
