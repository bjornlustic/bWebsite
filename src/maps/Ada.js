import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

import ImageGallery from "../ImageGallery";

import ada1 from "../assets/images/ada/jpg/ada1.jpg";
import ada2 from "../assets/images/ada/jpg/ada2.jpg";
import ada3 from "../assets/images/ada/jpg/ada3.jpg";
import ada4 from "../assets/images/ada/jpg/ada4.jpg";
import ada5 from "../assets/images/ada/jpg/ada5.jpg";
import ada6 from "../assets/images/ada/jpg/ada6.jpg";
import ada7 from "../assets/images/ada/jpg/ada7.jpg";
import ada8 from "../assets/images/ada/jpg/ada8.jpg";
import ada9 from "../assets/images/ada/jpg/ada9.jpg";
import ada10 from "../assets/images/ada/jpg/ada10.jpg";
import ada11 from "../assets/images/ada/jpg/ada11.jpg";
import ada12 from "../assets/images/ada/jpg/ada12.jpg";
import ada13 from "../assets/images/ada/jpg/ada13.jpg";
import ada14 from "../assets/images/ada/jpg/ada14.jpg";
import ada15 from "../assets/images/ada/jpg/ada15.jpg";
import ada16 from "../assets/images/ada/jpg/ada16.jpg";
import ada17 from "../assets/images/ada/jpg/ada17.jpg";
import ada18 from "../assets/images/ada/jpg/ada18.jpg";

const images = [
  { src: ada1, link: "/maps/ada/photos/ada1" },
  { src: ada2, link: "/maps/ada/photos/ada2" },
  { src: ada3, link: "/maps/ada/photos/ada3" },
  { src: ada4, link: "/maps/ada/photos/ada4" },
  { src: ada5, link: "/maps/ada/photos/ada5" },
  { src: ada6, link: "/maps/ada/photos/ada6" },
  { src: ada7, link: "/maps/ada/photos/ada7" },
  { src: ada8, link: "/maps/ada/photos/ada8" },
  { src: ada9, link: "/maps/ada/photos/ada9" },
  { src: ada10, link: "/maps/ada/photos/ada10" },
  { src: ada11, link: "/maps/ada/photos/ada11" },
  { src: ada12, link: "/maps/ada/photos/ada12" },
  { src: ada13, link: "/maps/ada/photos/ada13" },
  { src: ada14, link: "/maps/ada/photos/ada14" },
  { src: ada15, link: "/maps/ada/photos/ada15" },
  { src: ada16, link: "/maps/ada/photos/ada16" },
  { src: ada17, link: "/maps/ada/photos/ada17" },
  { src: ada18, link: "/maps/ada/photos/ada18" },
];



const Ada= () => {
  return (
    <div>
      <Helmet>
        <title>Ada</title>
      </Helmet>
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
    </div>
  );
};

export default Ada;
