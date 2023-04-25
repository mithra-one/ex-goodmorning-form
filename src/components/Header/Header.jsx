import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import yt from "../../assets/img/yt.svg";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <div className={style.headerWrapper}>
        <div className={style.header}>
          <div className={style.logo}>
            <span>Гуд Морнинг</span>
          </div>
          <div className={style.youtube}>
            <a
              href="https://www.youtube.com/@shakulin_vasya"
              target="_blank"
              rel="noreferrer"
              className={style.youtube}
            >
              <img src={yt} alt="" />
              <span>Подпишсь на канал</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
