import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

import ImageGallery from "./ImageGallery";

import ada1 from "./assets/images/ada/jpg/ada1.jpg";
import ada2 from "./assets/images/ada/jpg/ada2.jpg";
import ada3 from "./assets/images/ada/jpg/ada3.jpg";
import ada4 from "./assets/images/ada/jpg/ada4.jpg";
import ada5 from "./assets/images/ada/jpg/ada5.jpg";
import ada6 from "./assets/images/ada/jpg/ada6.jpg";
import ada7 from "./assets/images/ada/jpg/ada7.jpg";
import ada8 from "./assets/images/ada/jpg/ada8.jpg";
import ada9 from "./assets/images/ada/jpg/ada9.jpg";
import ada10 from "./assets/images/ada/jpg/ada10.jpg";
import ada11 from "./assets/images/ada/jpg/ada11.jpg";
import ada12 from "./assets/images/ada/jpg/ada12.jpg";
import ada13 from "./assets/images/ada/jpg/ada13.jpg";
import ada14 from "./assets/images/ada/jpg/ada14.jpg";
import ada15 from "./assets/images/ada/jpg/ada15.jpg";
import ada16 from "./assets/images/ada/jpg/ada16.jpg";
import ada17 from "./assets/images/ada/jpg/ada17.jpg";
import ada18 from "./assets/images/ada/jpg/ada18.jpg";

const images = [
  ada1, 
  ada2,
  ada3,
  ada4,
  ada5,
  ada6,
  ada7,
  ada8,
  ada9,
  ada10,
  ada11,
  ada12,
  ada13,
  ada14,
  ada15,
  ada16,
  ada17,
  ada18
];

const Ada= () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Bjorn Lustic's Ada Page" />
        <meta name="keywords" content="Bjorn Lustic, Ada" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Bjorn Lustic" />
        <title>Ada</title>
      </Helmet>
      <body>
        <h1>Bjorn Lustic</h1>
        <p>
          
          <Link to="/maps">↩ Maps</Link>
          <br />
          <b>Title:</b> Ada
          <br />
          <b>Year:</b> 2024
          <br />
          <b>Medium:</b> DayZ 
          <br />
          <b>Elevator pitch:</b> What if you could climb the Golden Gate Bridge in DayZ...
          <br />
          <b>Versions:</b>
          <ul>
            <li>
             Pre-Alpha Release on April 1, 2024.
            </li>
            <li>
            Alpha Release on September 1, 2024.
            </li>
          </ul>   
          <b>more info: </b> 
          Ada is a 12.8km^2 modded map for the zombie survival game DayZ. I was inspired 
          to create this map from my time at Battery Crosby, an old World War II bunker located
          in San Francisco. I used Battery Crosby as an escape point during the Covid-19 Pandemic after
          stumbing upon it while driving around San Francisco. It has the best view in the entire Bay Area,
          mainly because of it's proximity to the Golden Gate. 
          <br />
          <b>Website: </b> <s>IN-PROGRESS</s>
          {/* <a href="/ada" target="_blank" rel="noopener noreferrer">
                   IN-PROGRESS
          </a> */}
          <br />
          <b>Steam Workshop: </b> 
              <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3233839067">
              Ada Alpha
              </a>
          <br />
          <b>Discord: </b>
              <a href="https://discord.gg/ckQr7ZwSQp">
              Ada (San Francisco)
              </a>
          <br />
          <b>Videos ↴</b>
          <ul>
            <li>
                <a href="https://www.youtube.com/watch?v=uf2s68LgETQ">
                Youtube (FreshSpawns), <i>We Tried The NEW SUNNY San Francisco Map in DayZ</i>, 2024
                </a>
			</li>	
            <li>
                <a href="https://www.twitch.tv/adamcrook/clip/BrainyDeliciousBurritoKappa-B21EFhsPu4EeHMOq?filter=clips&range=all&sort=time">
                Twitch (AdamCrook), <i>ADA (San Francisco) Playtest- Ep. 536 - Lets try find that Punchcard</i>, 2024
                </a>
			</li>
          </ul>
          <b>Imgs ↴</b> 
          <br />

          <ImageGallery images={images} />

        </p>

        <Link to="/">
          <div className="fix_txt">BJØRN</div>
        </Link>

        <footer>©</footer>
      </body>
    </div>
  );
};

export default Ada;
