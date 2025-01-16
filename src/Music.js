import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

import ImageGallery from "./ImageGallery";

import music1 from "./assets/images/music/jpg/music1.jpg";
import music2 from "./assets/images/music/jpg/music2.jpg";
import music3 from "./assets/images/music/jpg/music3.jpg";
import music4 from "./assets/images/music/jpg/music4.jpg";
import music5 from "./assets/images/music/jpg/music5.jpg";
import music6 from "./assets/images/music/jpg/music6.jpg";
import music7 from "./assets/images/music/jpg/music7.jpg";
import music8 from "./assets/images/music/jpg/music8.jpg";
import music9 from "./assets/images/music/jpg/music9.jpg";
import music10 from "./assets/images/music/jpg/music10.jpg";
import music11 from "./assets/images/music/jpg/music11.jpg";
import music12 from "./assets/images/music/jpg/music12.jpg";
import music13 from "./assets/images/music/jpg/music13.jpg";
import music14 from "./assets/images/music/jpg/music14.jpg";
import music15 from "./assets/images/music/jpg/music15.jpg";
import music16 from "./assets/images/music/jpg/music16.jpg";
import music17 from "./assets/images/music/jpg/music17.jpg";

const images = [
    { src: music1, link: "/music/photos/music1" },
    { src: music2, link: "/music/photos/music2" },
    { src: music3, link: "/music/photos/music3" },
    { src: music4, link: "/music/photos/music4" },
    { src: music5, link: "/music/photos/music5" },
    { src: music6, link: "/music/photos/music6" },
    { src: music7, link: "/music/photos/music7" },
    { src: music8, link: "/music/photos/music8" },
    { src: music9, link: "/music/photos/music9" },
    { src: music10, link: "/music/photos/music10" },
    { src: music11, link: "/music/photos/music11" },
    { src: music12, link: "/music/photos/music12" },
    { src: music13, link: "/music/photos/music13" },
    { src: music14, link: "/music/photos/music14" },
    { src: music15, link: "/music/photos/music15" },
    { src: music16, link: "/music/photos/music16" },
    { src: music17, link: "/music/photos/music17" },
];
  

const Music= () => {
  return (
    <div>
      <Helmet>
        <title>Music</title>
      </Helmet>
        <p>
          
          <Link to="/">↩ Home</Link><br />
          <ul>
            <li>
                Soundcloud
            </li>
            <ul>
                <li> {' '}
                <a href="https://soundcloud.com/bjor-n/tracks" target="_blank" rel="noopener noreferrer">
                    Bjorn (2015 - 2019)
                </a>
                ↪
                </li>
                <li> {' '}
                <a href="https://soundcloud.com/dj909openhat/tracks" target="_blank" rel="noopener noreferrer">
                    DJ909OpenHat (2017 - 2022)
                </a>
                ↪
                </li>
                <li> {' '}
                <a href="https://soundcloud.com/user-493886494/tracks" target="_blank" rel="noopener noreferrer">
                    User 493886494 (2023)
                </a>
                ↪
                </li><li> {' '}
                <a href="https://soundcloud.com/bjorn-live-show-archives/tracks" target="_blank" rel="noopener noreferrer">
                    Bjorn Live Show Archives (2024 - Current)
                </a>
                ↪
                </li>
            </ul>
            <li>
                Shows
            </li>
                <ul>
                    <li>
                        Broken Oscillators, <i>Synthesizers for Mental Health @ Lewis Hall, Berkeley, CA</i>, Aug 15, 2019
                    </li>
                    <li>
                        DJ909OpenHat, <i>Engineering Ball @ Wurster Hall, Berkeley, CA</i>, Feb 7, 2020
                    </li>
                    <li>
                    <a href="https://ra.co/events/1408702" target="_blank" rel="noopener noreferrer">
                        DJ909OpenHat, <i>Blockeley Music Festival @ Blockeley, The Internet</i>, May 29, 2020
                    </a>
                    </li>
                    <li>
                        Broken Oscillators, <i>Live 1 @ Treehaven, Berkeley, CA</i>, Feb 13, 2021
                    </li>
                    <li>
                        Broken Oscillators, <i>Live 2 @ Treehaven, Berkeley, CA</i>, Feb 18, 2021
                    </li>
                    <li>
                        Broken Oscillators, <i>Live 3 @ Treehaven, Berkeley, CA</i>, Feb 19, 2021
                    </li>
                    <li>
                        Broken Oscillators, <i>Live 4 @ Treehaven, Berkeley, CA</i>, Feb 24, 2021
                    </li>
                    <li>
                        Broken Oscillators, <i>Live 5 @ Treehaven, Berkeley, CA</i>, Mar 5, 2021
                    </li>
                    <li>
                        Broken Oscillators, <i>Live 6 @ Treehaven, Berkeley, CA</i>, Mar 9, 2021
                    </li>
                    <li>
                        Bjorn, <i>The Knockout Set @ The Knockout, San Francisco, CA</i>, Nov 9, 2021
                    </li>
                    <li>
                        Bjorn, <i>The Knockout Set @ The Knockout, San Francisco, CA</i>, Mar 1, 2022
                    </li>
                    <li>
                        Bjorn, <i>The Milk Bar Set @ The Milk Bar, San Francisco, CA</i>, Mar 18, 2022
                    </li>
                    <li>
                        Bjorn, <i>The Log Cabin Set @ The Log Cabin, San Anselmo, CA</i>, Jun 29, 2023
                    </li>
                    <li>
                        Bjorn, <i>Smiley's Set @ Smiley's, Bolinas, CA</i>, Jul 7, 2023
                    </li>
                    <li>
                      <s>Bjorn, <i>Bolinas Hardware Store Set @ Bolinas Hardware Store, Bolinas, CA</i>, Sept 16, 2023 </s> CANCELLED I GOT COVID 
                    </li>
                    
                    <li>
                    <a href="https://soundcloud.com/bjorn-live-show-archives/bolinas-hardware-in-bolinas-ca-april-6th-2024" target="_blank" rel="noopener noreferrer">
                    Bjorn, <i>Bolinas Hardware Store Set @ Bolinas Hardware Store, Bolinas, CA</i>, Apr 6, 2024
                    </a>
                        
                    </li>
                    <li>
                        Bjorn, <i>Techno in Golden Gate Park @ Chain of Lakes, Golden Gate Park, San Francisco, CA</i>, Jun 22, 2024
                    </li>
                    
                    
                </ul>
        </ul>
            <b>Imgs ↴</b> 
            <br />
        
            <ImageGallery images={images} />
        
            <ul>
            <li>
                Gear
            </li>
            <ul>
                <li>
                    Yamaha DX7 (Sold)
                </li>
                <li>
                    Roland SH-101
                </li>
                <li>
                    Roland TR-707
                </li>
                <li>
                    Roland TR-09
                </li>
                <li>
                    Roland JV-1080 (Sold)
                </li>
                <li>
                    Akai S01 (Sold)
                </li>
                <li>
                    Boss BX-8
                </li>
                <li>
                    Mackie 1604 VLZ Pro (2x both broke)
                </li>
                <li>
                    Doepfer MAQ 16/3 (Sold)
                </li>
                <li>
                    Midas Venice 160
                </li>
                <li>
                    Roland MKS-30 + DT-200 Programmer (Loaned out)
                </li>
                <li>
                    Acidlab Miami
                </li>
                <li>
                    Roland TR-606 (with TR-608 mod)
                </li>
                <li>
                    Roland Alpha Juno 2 + DT-300 Programmer
                </li>
                <li>
                    Roland HS-80 (Sold)
                </li>
                <li>
                    Ableton Push 2
                </li>
                <li>
                    Oto Bim (Sold)
                </li>
                <li>
                    Oto Bam (Sold)
                </li>
                <li>
                    Oto Boum (Sold)
                </li>
                <li>
                    Eventide Modfactor (Sold)
                </li>
                <li>
                    Eventide Timefactor (Sold)
                </li>
                <li>
                    Ensoniq DP/2
                </li>
                <li>
                    Ensoniq DP/4
                </li>
                <li>
                    Alesis Quadraverb
                </li>
                <li>
                    Alesis Midiverb 2
                </li>
                <li>
                    Yamaha DX27
                </li>
                <li>
                    M-Audio BX-8 (2x but one is broken and was sacrificed)
                </li>
                <li>
                    Yamaha NS-344 (2x)
                </li>
                <li>
                    Genelec 8010a (1x)
                </li>
                <li>
                    Elektron Analog Rytm MkI
                </li>
                <li>
                    Moog Subharmonicon (Sold)
                </li>
                <li>
                    Moog Spectravox (Sold)
                </li>
                <li>
                    Moog DFAM (2x Sold)
                </li>
                <li>
                    Moog Mother-32 (Sold)
                </li>
                <li>
                    Moog Little Phatty Stage II
                </li>
                <li>
                    Behringer RD-9 (Sold)
                </li>
                <li>
                    Behringer TD-3 (2x)
                </li>
                <li>
                    Behringer TD-3-MO (Sold)
                </li>
                <li>
                    Sequential Circuits Prophet 5 Rev4 (Serial #185 + 5 voice expansion)
                </li>
                <li>
                    Korg MS-20 Mini (Sold, also used it as a bed leg for 5 months)
                </li>
                <li>
                    Roland Space Echo RE-201 (Sold)
                </li>
                <li>
                    Access Virus B (Sold)
                </li>
                <li>
                    FMR RNC1337 (Loaned out)
                </li>
                <li>
                    Boss CE-2W (1x Lost, 1x Sold)
                </li>
                <li>
                    Boss Blues Driver (Lost?)
                </li>
                <li>
                    Boss Compressor Sustainer (Lost?)
                </li>
                <li>
                    Ableton Live 12
                </li>
                <li>
                    Kenton Pro CV to Midi
                </li>
                <li>
                    Kenton Pro Midi to CV
                </li>
                <li>
                    Yamaha S115v (2x loaned out)
                </li>
                <li>
                    Tascam 244 Portastudio (Sold)
                </li>
                <li>
                    Moog MuRF (Sold)
                </li>
                <li>
                    Korg SQ-64 (Sold)
                </li>
                <li>
                    Korg SQ-1 (Sold)
                </li>
                <li>
                    HKA Digitizer
                </li>
                <li>
                    Pro-Co Rat (Loaned out)
                </li>
                <li>
                    DBX-118 (Loaned out)
                </li>
                <li>
                    Behringer Model D (Sold)
                </li>
            </ul>
          </ul>

        </p>
    </div>
  );
};

export default Music;
