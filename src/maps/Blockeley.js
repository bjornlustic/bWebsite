import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import ImageGallery from "../ImageGallery";
import blockeleyImages from "../data/blockeley.json";

const imageContext = require.context("../assets/images/blockeley/jpg", false, /\.(jpg|png)$/);

// Map images using require.context()
const images = blockeleyImages.map(image => {
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


const Blockeley= () => {
  return (
    <div>
      <Helmet>
        <title>Blockeley</title>
      </Helmet>
        <p>
          
          <Link to="/maps">↩ Maps</Link>
          <br />
          <b>Title:</b> Blockeley 
          <br />
          <b>Year:</b> 2020
          <br />
          <b>Medium:</b> Minecraft
          <br />
          <b>Elevator pitch:</b> What if we had the UC Berkeley Graduation in Minecraft...
          <br />
          <b>more info: </b> 
          Blockeley is a Minecraft world developed between
          March 15th, 2020 and May 31st, 2020. It was initially started by in an attempt
          to make a virtual graduation space for some friends. I got the idea from a sarcastic
          Facebook comment, and had a feeling that the idea was wild enough to work. The development
          of this project was important in its time because it started on the first day
          of the Covid-19 Pandemic. 
          <br />
          <b>Website: </b> 
          <a href="https://www.blockeley.com" target="_blank" rel="noopener noreferrer">
                   https://www.blockeley.com
          </a>
          <br />
          <b>Wikipedia: </b> 
          <a href="https://en.wikipedia.org/wiki/Blockeley" target="_blank" rel="noopener noreferrer">
                   https://en.wikipedia.org/wiki/Blockeley
          </a>
          <br />
          <b>Discord: </b>
                <a href="https://discord.gg/mmAK4D5">
                Blockeley
                </a>
          <br />
          <b>News ↴</b>
          <ul>
            <li>
                <a href="https://news.berkeley.edu/2020/05/14/unforgotten-covid-19-era-grads-to-be-celebrated-virtually-this-saturday/">
                UC Berkeley News, <i>Unforgotten: COVID-19 era grads to be celebrated virtually this Saturday</i>, 2020
                </a>
			</li>	
            <li>
                <a href="https://www.kqed.org/arts/13879036/for-graduation-cal-students-build-blockeley-university-campus-in-minecraft">
                KQED, <i>For Graduation, Cal Students Build ‘Blockeley University’ in Minecraft</i>, 2020
                </a>
			</li>
            <li>
                <a href="https://abc7news.com/uc-berkeley-commencement-2020-blockeley-minecraft-graduation/6187172/">
                ABC7, <i>Blockeley University hosts virtual commencement on Minecraft for UC Berkeley students</i>, 2020
                </a>
			</li>
            <li>
                <a href="https://www.nbcbayarea.com/news/coronavirus/thousands-of-uc-berkeley-seniors-to-graduate-in-minecraft-ceremony/2291312/">
                NBC Bay Area, <i>Thousands of UC Berkeley Seniors to Graduate in Minecraft Ceremony</i>, 2020
                </a>
			</li>
            <li>
                <a href="https://www.businessinsider.com/uc-berkeley-campus-recreated-in-minecraft-called-blockeley-2020-6">
                Business Insider, <i>UC Berkeley students recreated more than 100 buildings on their 'Minecraft' campus 'Blockeley' — take a tour of the virtual university</i>, 2020
                </a>
			</li>
            <li>
                <a href="https://ars.electronica.art/keplersgardens/en/get-inspired/">
                Ars Electronica, <i>Ars Electronica x Digital Cross Over</i>, 2020
                </a>
			</li>
            <li>
                <a href="https://www.lib.berkeley.edu/about/news/fiat-blocks">
                UC Berkeley Library, <i>Fiat Blocks: Students use ‘Minecraft’ to build UC Berkeley (and its libraries) in stunning detail</i>, 2020
                </a>
			</li>
          </ul>
          <b>Videos↴</b>
          <ul>
            
            <li>
                <a href="https://www.youtube.com/watch?v=--WnCnPsnk8">
                Youtube (CalTV), <i>Tour of Blockeley: UC Berkeley's Minecraft Campus</i>, 2020
                </a>
			</li>
            <li>
                <a href="https://www.youtube.com/watch?v=5rdmCHbRmeg">
                Youtube (Kaye), <i>UC Berkeley Campus Tour on MINECRAFT (Blockeley University)</i>, 2020
                </a>
			</li>

            <li>
                <a href="https://www.youtube.com/watch?v=QLv7gkc784Y">
                Youtube (UC Berkeley Inspires), <i>Take a tour of Blockeley University, a replica of UC Berkeley campus!</i>, 2020
                </a>
			</li>

            <li>
                <a href="https://www.youtube.com/watch?v=c8nf0eSFrtg">
                Youtube (CalTV), <i>An Inside Look At Blockeley: The #1 Minecraft University (UC Berkeley 2020 Commencement)</i>, 2020
                </a>
			</li>
            
            <li>
                <a href="https://www.youtube.com/watch?v=X_6lqmNRnEU">
                Youtube (Blockeley), <i>Blockeley Commencement Ceremony 2021</i>, 2021
                </a>
			</li>

            <li>
                <a href="https://www.youtube.com/watch?v=3hgR4lGlq4k">
                Youtube (Blockeley), <i>Blockeley Campus Tour | UC Berkeley on Minecraft 2021</i>, 2021
                </a>
			</li>

            <li>
                <a href="https://www.youtube.com/watch?v=cQjY2R4GbcM">
                Youtube (BGHDDevelopment), <i>Exploring UC Berkeley in Minecraft (Blockeley)</i>, 2022
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

export default Blockeley;
