import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className={style.footerWrapper}>
        <div className={style.footer}>
          <div className={style.copy}>
            Special for ГудМорнинг © {year} by{" "}
            <a href="https://mithra.ru" target="_blank" rel="noreferrer">
              Mithra
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
