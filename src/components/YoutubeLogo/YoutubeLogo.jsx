import React from "react";
import "./YoutubeLogo.css";
import { ReactComponent as YoutubeSVG } from "../../img/yt.svg";

const YoutubeLogo = () => {
  return (
    <div className="floating-youtube-logo" id="youtube">
      <a
        href="https://www.youtube.com/channel/UCdbSnqJIqth1Uu76RP0r37Q"
        target="_blank"
        rel="noreferrer"
      >
        <YoutubeSVG />
        <span>
          Подпишись
          <br />
          на канал!
        </span>
      </a>
    </div>
  );
};

export default YoutubeLogo;
