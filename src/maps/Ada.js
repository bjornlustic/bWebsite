import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import ImageGallery from "../ImageGallery";
import adaImages from "../data/ada.json";

const imageContext = require.context("../assets/images/ada/jpg", false, /\.(jpg|png)$/);

// Map images using require.context()
const images = adaImages.map(image => {
  try {
    // Extract filename from JSON path
    const filename = image.src.split("/").pop();
    
    return {
      ...image,
      src: imageContext(`./${filename}`)
    };
  } catch (error) {
    console.error(`Error loading image: ${image.src}`, error);
    return image;
  }
});

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
