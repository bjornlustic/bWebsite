import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Music= () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Bjorn Lustic's Music Page" />
        <meta name="keywords" content="Bjorn Lustic, Music" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Bjorn Lustic" />
        <title>Music</title>
      </Helmet>
      <body>
        <h1>Bjorn Lustic</h1>
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
                    <a href="https://ra.co/events/1408702" target="_blank" rel="noopener noreferrer">
                        DJ909OpenHat, <i>Blockeley Music Festival</i>, May 31, 2020
                    </a>
                    
                </ul>
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
            </ul>
          </ul>

          <b>Imgs ↴</b> 
          <br />
          <br />

          <img src="/assets/images/music/jpg/music1.jpg"/>	
          <br />
        </p>

        <Link to="/">
          <div className="fix_txt">BJØRN</div>
        </Link>

        <footer>©</footer>
      </body>
    </div>
  );
};

export default Music;
