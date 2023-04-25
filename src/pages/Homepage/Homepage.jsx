import React, { useState, useEffect } from "react";
import style from "./Homepage.module.scss";
import html2canvas from "html2canvas";
import { FileUploader } from "react-drag-drop-files";
import { ReactComponent as DelSVG } from "../../assets/img/clear.svg";
import { ReactComponent as SaveSVG } from "../../assets/img/save.svg";
import { useMediaQuery } from "../../assets/hooks/useMediaQuery";
import bg from "../../assets/img/cardbg.jpg";

const Homepage = () => {
  const isPortrait = useMediaQuery("(orientation: portrait)");

  const isXSscreen = useMediaQuery("(min-width: 0) and (max-width: 320px)");
  const isSMscreen = useMediaQuery("(min-width: 321px) and (max-width: 480px)");
  const isSMDscreen = useMediaQuery(
    "(min-width: 481px) and (max-width: 700px)"
  );
  const isMDscreen = useMediaQuery("(min-width: 701px) and (max-width: 768px)");
  const isLGscreen = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const isXLscreen = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1200px)"
  );
  const isXXLscreen = useMediaQuery(
    "(min-width: 1201) and (max-width: 1400px)"
  );
  const isXXXLscreen = useMediaQuery("(min-width: 1401px)");

  const [question01, setQuestion01] = useState("");
  const [question02, setQuestion02] = useState("");
  const [question03, setQuestion03] = useState("");
  const [question04, setQuestion04] = useState("");
  const [question05, setQuestion05] = useState("");
  const [question06, setQuestion06] = useState("");
  const [question07, setQuestion07] = useState("");
  const [question08, setQuestion08] = useState("");
  const [question09, setQuestion09] = useState("");
  const [question10, setQuestion10] = useState("");
  const [question11, setQuestion11] = useState("");
  const [question12, setQuestion12] = useState("");
  const [question13, setQuestion13] = useState("");
  const [question14, setQuestion14] = useState("");
  const [question15, setQuestion15] = useState("");
  const [question16, setQuestion16] = useState("");
  const [question17, setQuestion17] = useState("");
  const [question18, setQuestion18] = useState("");
  const [question19, setQuestion19] = useState("");

  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleQuestion01 = (e) => {
    setQuestion01(e.target.value);
  };

  const handleQuestion02 = (e) => {
    setQuestion02(e.target.value);
  };

  const handleQuestion03 = (e) => {
    setQuestion03(e.target.value);
  };

  const handleQuestion04 = (e) => {
    setQuestion04(e.target.value);
  };

  const handleQuestion05 = (e) => {
    setQuestion05(e.target.value);
  };

  const handleQuestion06 = (e) => {
    setQuestion06(e.target.value);
  };

  const handleQuestion07 = (e) => {
    setQuestion07(e.target.value);
  };

  const handleQuestion08 = (e) => {
    setQuestion08(e.target.value);
  };

  const handleQuestion09 = (e) => {
    setQuestion09(e.target.value);
  };

  const handleQuestion10 = (e) => {
    setQuestion10(e.target.value);
  };

  const handleQuestion11 = (e) => {
    setQuestion11(e.target.value);
  };

  const handleQuestion12 = (e) => {
    setQuestion12(e.target.value);
  };

  const handleQuestion13 = (e) => {
    setQuestion13(e.target.value);
  };

  const handleQuestion14 = (e) => {
    setQuestion14(e.target.value);
  };

  const handleQuestion15 = (e) => {
    setQuestion15(e.target.value);
  };

  const handleQuestion16 = (e) => {
    setQuestion16(e.target.value);
  };

  const handleQuestion17 = (e) => {
    setQuestion17(e.target.value);
  };

  const handleQuestion18 = (e) => {
    setQuestion18(e.target.value);
  };

  const handleQuestion19 = (e) => {
    setQuestion19(e.target.value);
  };

  const handleFileChange = (file) => {
    setFile(file);
    setImage(URL.createObjectURL(file));
  };

  const handleDownload = () => {
    const card = document.querySelector("#container");
    html2canvas(card, {
      ignoreElements: function (element) {
        return (
          element.id === "download" ||
          element.id === "delPhoto" ||
          element.id === "uploader" ||
          element.id === "header" ||
          element.id === "footer"
        );
      },
      // scale: 3,
      onclone: function (document) {
        document.querySelector(
          "#container"
        ).style.backgroundImage = `url(${bg})`;
        document.querySelector("#container").style.padding = `75px`;

        document.querySelector("#container").style.flexDirection = `row`;
        document.querySelector("#container").style.justifyContent = `center`;
        document.querySelector("#container").style.maxWidth = `unset`;
        document.querySelector("#container").style.minWidth = `650px`;
        document.querySelector("#container").style.width = `800px`;

        document.querySelector(".render4br").style.display = `inline-block`;
        document.querySelector(".render16br").style.display = `inline-block`;

        if (document.querySelector(".input1")) {
          document.querySelector(".input1").style.display = "none";
          document.querySelector(".render1").style.display = "inline-block";
          document.querySelector(".render1").style.fontSize = "18px";
          document.querySelector(".render1").style.lineHeight = "18px";
          document.querySelector(".render1").style.fontFamily = "Hortensia";
          document.querySelector(".render1").style.fontWeight = "700";
          document.querySelector(".render1").style.color = "#a90a77";
          document.querySelector(".render1").style.textDecoration = "underline";
          document.querySelector(".render1").style.flexGrow = 1;
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock1").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input2")) {
          document.querySelector(".input2").style.display = "none";
          document.querySelector(".render2").style.display = "inline-block";
          document.querySelector(".render2").style.fontSize = "18px";
          document.querySelector(".render2").style.lineHeight = "18px";
          document.querySelector(".render2").style.fontFamily = "Hortensia";
          document.querySelector(".render2").style.fontWeight = "700";
          document.querySelector(".render2").style.color = "#a90a77";
          document.querySelector(".render2").style.textDecoration = "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock2").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input3")) {
          document.querySelector(".input3").style.display = "none";
          document.querySelector(".render3").style.display = "inline-block";
          document.querySelector(".render3").style.fontSize = "18px";
          document.querySelector(".render3").style.lineHeight = "18px";
          document.querySelector(".render3").style.fontFamily = "Hortensia";
          document.querySelector(".render3").style.fontWeight = "700";
          document.querySelector(".render3").style.color = "#a90a77";
          document.querySelector(".render3").style.textDecoration = "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock3").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input4")) {
          document.querySelector(".input4").style.display = "none";
          document.querySelector(".render4").style.display = "inline-block";
          document.querySelector(".render4").style.fontSize = "18px";
          document.querySelector(".render4").style.lineHeight = "18px";
          document.querySelector(".render4").style.fontFamily = "Hortensia";
          document.querySelector(".render4").style.fontWeight = "700";
          document.querySelector(".render4").style.color = "#a90a77";
          document.querySelector(".render4").style.textDecoration = "underline";
          document.querySelector(".render4").style.width = "100%";
          // document.querySelector(".render4").style.textAlign = "right";
          // document.querySelector(".render4").style.marginRight = "10%";

          // if (isXSscreen || isSMscreen || isSMDscreen) {
          //   document.querySelector(".inputBlock4").style.flexDirection = `row`;
          // }
        }

        if (document.querySelector(".input5")) {
          document.querySelector(".input5").style.display = "none";
          document.querySelector(".render5").style.display = "inline-block";
          document.querySelector(".render5").style.fontSize = "18px";
          document.querySelector(".render5").style.lineHeight = "18px";
          document.querySelector(".render5").style.fontFamily = "Hortensia";
          document.querySelector(".render5").style.fontWeight = "700";
          document.querySelector(".render5").style.color = "#a90a77";
          document.querySelector(".render5").style.textDecoration = "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock5").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input6")) {
          document.querySelector(".input6").style.display = "none";
          document.querySelector(".render6").style.display = "inline-block";
          document.querySelector(".render6").style.fontSize = "18px";
          document.querySelector(".render6").style.lineHeight = "18px";
          document.querySelector(".render6").style.fontFamily = "Hortensia";
          document.querySelector(".render6").style.fontWeight = "700";
          document.querySelector(".render6").style.color = "#a90a77";
          document.querySelector(".render6").style.textDecoration = "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock6").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input7")) {
          document.querySelector(".input7").style.display = "none";
          document.querySelector(".render7").style.display = "inline-block";
          document.querySelector(".render7").style.fontSize = "18px";
          document.querySelector(".render7").style.lineHeight = "18px";
          document.querySelector(".render7").style.fontFamily = "Hortensia";
          document.querySelector(".render7").style.fontWeight = "700";
          document.querySelector(".render7").style.color = "#a90a77";
          document.querySelector(".render7").style.textDecoration = "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock7").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input8")) {
          document.querySelector(".input8").style.display = "none";
          document.querySelector(".render8").style.display = "inline-block";
          document.querySelector(".render8").style.fontSize = "18px";
          document.querySelector(".render8").style.lineHeight = "18px";
          document.querySelector(".render8").style.fontFamily = "Hortensia";
          document.querySelector(".render8").style.fontWeight = "700";
          document.querySelector(".render8").style.color = "#a90a77";
          document.querySelector(".render8").style.textDecoration = "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock8").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input9")) {
          document.querySelector(".input9").style.display = "none";
          document.querySelector(".render9").style.display = "inline-block";
          document.querySelector(".render9").style.fontSize = "18px";
          document.querySelector(".render9").style.lineHeight = "18px";
          document.querySelector(".render9").style.fontFamily = "Hortensia";
          document.querySelector(".render9").style.fontWeight = "700";
          document.querySelector(".render9").style.color = "#a90a77";
          document.querySelector(".render9").style.textDecoration = "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock9").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input10")) {
          document.querySelector(".input10").style.display = "none";
          document.querySelector(".render10").style.display = "inline-block";
          document.querySelector(".render10").style.fontSize = "18px";
          document.querySelector(".render10").style.lineHeight = "18px";
          document.querySelector(".render10").style.fontFamily = "Hortensia";
          document.querySelector(".render10").style.fontWeight = "700";
          document.querySelector(".render10").style.color = "#a90a77";
          document.querySelector(".render10").style.textDecoration =
            "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock10").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input11")) {
          document.querySelector(".input11").style.display = "none";
          document.querySelector(".render11").style.display = "inline-block";
          document.querySelector(".render11").style.fontSize = "18px";
          document.querySelector(".render11").style.lineHeight = "18px";
          document.querySelector(".render11").style.fontFamily = "Hortensia";
          document.querySelector(".render11").style.fontWeight = "700";
          document.querySelector(".render11").style.color = "#a90a77";
          document.querySelector(".render11").style.textDecoration =
            "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock11").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input12")) {
          document.querySelector(".input12").style.display = "none";
          document.querySelector(".render12").style.display = "inline-block";
          document.querySelector(".render12").style.fontSize = "18px";
          document.querySelector(".render12").style.lineHeight = "18px";
          document.querySelector(".render12").style.fontFamily = "Hortensia";
          document.querySelector(".render12").style.fontWeight = "700";
          document.querySelector(".render12").style.color = "#a90a77";
          document.querySelector(".render12").style.textDecoration =
            "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock12").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input13")) {
          document.querySelector(".input13").style.display = "none";
          document.querySelector(".render13").style.display = "inline-block";
          document.querySelector(".render13").style.fontSize = "18px";
          document.querySelector(".render13").style.lineHeight = "18px";
          document.querySelector(".render13").style.fontFamily = "Hortensia";
          document.querySelector(".render13").style.fontWeight = "700";
          document.querySelector(".render13").style.color = "#a90a77";
          document.querySelector(".render13").style.textDecoration =
            "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock13").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input14")) {
          document.querySelector(".input14").style.display = "none";
          document.querySelector(".render14").style.display = "inline-block";
          document.querySelector(".render14").style.fontSize = "18px";
          document.querySelector(".render14").style.lineHeight = "18px";
          document.querySelector(".render14").style.fontFamily = "Hortensia";
          document.querySelector(".render14").style.fontWeight = "700";
          document.querySelector(".render14").style.color = "#a90a77";
          document.querySelector(".render14").style.textDecoration =
            "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock14").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input15")) {
          document.querySelector(".input15").style.display = "none";
          document.querySelector(".render15").style.display = "inline-block";
          document.querySelector(".render15").style.fontSize = "18px";
          document.querySelector(".render15").style.lineHeight = "18px";
          document.querySelector(".render15").style.fontFamily = "Hortensia";
          document.querySelector(".render15").style.fontWeight = "700";
          document.querySelector(".render15").style.color = "#a90a77";
          document.querySelector(".render15").style.textDecoration =
            "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock15").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input16")) {
          document.querySelector(".input16").style.display = "none";
          document.querySelector(".render16").style.display = "inline-block";
          document.querySelector(".render16").style.fontSize = "18px";
          document.querySelector(".render16").style.lineHeight = "18px";
          document.querySelector(".render16").style.fontFamily = "Hortensia";
          document.querySelector(".render16").style.fontWeight = "700";
          document.querySelector(".render16").style.color = "#a90a77";
          document.querySelector(".render16").style.textDecoration =
            "underline";
          document.querySelector(
            ".inputBlock16"
          ).style.alignItems = `flex-start`;
        }

        if (document.querySelector(".input17")) {
          document.querySelector(".input17").style.display = "none";
          document.querySelector(".render17").style.display = "inline-block";
          document.querySelector(".render17").style.fontSize = "18px";
          document.querySelector(".render17").style.lineHeight = "18px";
          document.querySelector(".render17").style.fontFamily = "Hortensia";
          document.querySelector(".render17").style.fontWeight = "700";
          document.querySelector(".render17").style.color = "#a90a77";
          document.querySelector(".render17").style.textDecoration =
            "underline";
          if (isXSscreen || isSMscreen || isSMDscreen) {
            document.querySelector(".inputBlock17").style.flexDirection = `row`;
          }
        }

        if (document.querySelector(".input18")) {
          document.querySelector(".input18").style.display = "none";
          document.querySelector(".render18").style.display = "inline-block";
          document.querySelector(".render18").style.fontSize = "18px";
          document.querySelector(".render18").style.lineHeight = "18px";
          document.querySelector(".render18").style.fontFamily = "Hortensia";
          document.querySelector(".render18").style.fontWeight = "700";
          document.querySelector(".render18").style.color = "#a90a77";
          document.querySelector(".render18").style.textDecoration =
            "underline";
          // document.querySelector(".inputBlock18").style.flexDirection = `row`;
        }

        if (document.querySelector(".input19")) {
          document.querySelector(".input19").style.display = "none";
          document.querySelector(".render19").style.display = "inline-block";
          document.querySelector(".render19").style.fontSize = "18px";
          document.querySelector(".render19").style.lineHeight = "18px";
          document.querySelector(".render19").style.fontFamily = "Hortensia";
          document.querySelector(".render19").style.fontWeight = "700";
          document.querySelector(".render19").style.color = "#a90a77";
          document.querySelector(".render19").style.textDecoration =
            "underline";
          document.querySelector(".render19").style.maxWidth = `350px`;
          document.querySelector(".render19").style.wordWrap = `break-word`;
          // if (isXSscreen || isSMscreen || isSMDscreen) {
          //   document.querySelector(".inputBlock19").style.flexDirection = `row`;
          // }
        }
      },
    }).then((canvas) => {
      const dataURL = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = dataURL;
      downloadLink.download = `${question01}_анкета.png`;
      downloadLink.click();
    });
  };

  return (
    <div className={style.pageWrapper}>
      <div className={style.pageContent}>
        <div
          id="container"
          style={{
            display: "flex",
            alignItems: "flex-start",
            columnGap: "20px",
            rowGap: "25px",
            width: "100%",
            //   maxWidth: "900px",
            //    padding: "0 25px",
            margin: "0 auto",
            flexDirection: isPortrait ? "column" : "row",
            padding: "35px 0",
          }}
        >
          <div
            className="column column1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              rowGap: "25px",
              // width: "100%",
              // maxWidth: "100%",
              flexWrap: "wrap",
              //    width: "50%",
              width: isPortrait ? "100%" : "50%",
            }}
          >
            <div
              className={`inputBlock inputBlock1 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input1" style={{ flexShrink: 0 }}>
                1. Твоё имя:
              </label>
              <input
                id="input1"
                name="input1"
                type="text"
                className="input1"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion01}
              />
              <span
                className="render1"
                style={{
                  display: "none",
                }}
              >
                {question01}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock2 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input2" style={{ flexShrink: 0 }}>
                2. День рождения:
              </label>
              <input
                id="input2"
                name="input2"
                type="text"
                className="input2"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion02}
              />
              <span
                className="render2"
                style={{
                  display: "none",
                }}
              >
                {question02}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock3 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input3" style={{ flexShrink: 0 }}>
                3. Знак зодиака:
              </label>
              <input
                id="input3"
                name="input3"
                type="text"
                className="input3"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion03}
              />
              <span
                className="render3"
                style={{
                  display: "none",
                }}
              >
                {question03}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock4 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                rowGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label
                htmlFor="input4"
                style={{
                  width: "100%",
                  lineHeight: 1,
                  wordWrap: "break-word",
                }}
              >
                4. Есть ли у тебя дом.животное?{" "}
                <br
                  className="render4br"
                  style={{
                    display: "none",
                  }}
                />
                (если да, то какое?)
              </label>
              <input
                id="input4"
                name="input4"
                type="text"
                className="input4"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  width: "100%",
                  maxWidth: "calc(100% - 10px)",
                }}
                onChange={handleQuestion04}
              />
              <span
                className="render4"
                style={{
                  display: "none",
                }}
              >
                {question04}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock5 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input5" style={{ flexShrink: 0 }}>
                5. Любимый цветок:
              </label>
              <input
                id="input5"
                name="input5"
                type="text"
                className="input5"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion05}
              />
              <span
                className="render5"
                style={{
                  display: "none",
                }}
              >
                {question05}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock6 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input6" style={{ flexShrink: 0 }}>
                6. Любимый праздник:
              </label>
              <input
                id="input6"
                name="input6"
                type="text"
                className="input6"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion06}
              />
              <span
                className="render6"
                style={{
                  display: "none",
                }}
              >
                {question06}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock7 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input7" style={{ flexShrink: 0 }}>
                7. Любимый день недели:
              </label>
              <input
                id="input7"
                name="input7"
                type="text"
                className="input7"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion07}
              />
              <span
                className="render7"
                style={{
                  display: "none",
                }}
              >
                {question07}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock8 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input8" style={{ flexShrink: 0 }}>
                8. Любимый фильм:
              </label>
              <input
                id="input8"
                name="input8"
                type="text"
                className="input8"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion08}
              />
              <span
                className="render8"
                style={{
                  display: "none",
                }}
              >
                {question08}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock9 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input9" style={{ flexShrink: 0 }}>
                9. Любимое время года:
              </label>
              <input
                id="input9"
                name="input9"
                type="text"
                className="input9"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion09}
              />
              <span
                className="render9"
                style={{
                  display: "none",
                }}
              >
                {question09}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock10 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input10" style={{ flexShrink: 0 }}>
                10. Любимый урок в школе:
              </label>
              <input
                id="input10"
                name="input10"
                type="text"
                className="input10"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion10}
              />
              <span
                className="render10"
                style={{
                  display: "none",
                }}
              >
                {question10}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock11 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input11" style={{ flexShrink: 0 }}>
                11. Любимый вид спорта:
              </label>
              <input
                id="input11"
                name="input11"
                type="text"
                className="input11"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion11}
              />
              <span
                className="render11"
                style={{
                  display: "none",
                }}
              >
                {question11}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock12 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input12" style={{ flexShrink: 0 }}>
                12. Любимая книга:
              </label>
              <input
                id="input12"
                name="input12"
                type="text"
                className="input12"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion12}
              />
              <span
                className="render12"
                style={{
                  display: "none",
                }}
              >
                {question12}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock13 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input13" style={{ flexShrink: 0 }}>
                13. Любимый напиток:
              </label>
              <input
                id="input13"
                name="input13"
                type="text"
                className="input13"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion13}
              />
              <span
                className="render13"
                style={{
                  display: "none",
                }}
              >
                {question13}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock14 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input14" style={{ flexShrink: 0 }}>
                14. Любимый цвет:
              </label>
              <input
                id="input14"
                name="input14"
                type="text"
                className="input14"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion14}
              />
              <span
                className="render14"
                style={{
                  display: "none",
                }}
              >
                {question14}
              </span>
            </div>
          </div>
          <div
            className="column column2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              rowGap: "25px",
              // width: "100%",
              // maxWidth: "100%",
              flexWrap: "wrap",
              //    width: "50%",
              width: isPortrait ? "100%" : "50%",
            }}
          >
            <div
              className={`inputBlock inputBlock15 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input15" style={{ flexShrink: 0 }}>
                15. Твоё хобби:
              </label>
              <input
                id="input15"
                name="input15"
                type="text"
                className="input15"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion15}
              />
              <span
                className="render15"
                style={{
                  display: "none",
                }}
              >
                {question15}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock16 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: "100%",
                rowGap: "5px",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label
                htmlFor="input16"
                style={{
                  width: "100%",
                  lineHeight: 1,
                  maxWidth: "100%",
                }}
              >
                16. Черты характера, которые тебе нравятся
                <br
                  className="render16br"
                  style={{
                    display: "none",
                  }}
                />{" "}
                в людях:
              </label>
              <input
                id="input16"
                name="input16"
                type="text"
                className="input16"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  width: "100%",
                  maxWidth: "calc(100% - 10px)",
                }}
                onChange={handleQuestion16}
              />
              <span
                className="render16"
                style={{
                  display: "none",
                }}
              >
                {question16}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock17 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                rowGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label htmlFor="input17" style={{ flexShrink: 0 }}>
                17. Какие не нравятся?
              </label>
              <input
                id="input17"
                name="input17"
                type="text"
                className="input17"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  flexGrow: 1,
                  width:
                    isXSscreen || isSMscreen || isSMDscreen
                      ? "calc(100% - 10px)"
                      : "unset",
                }}
                onChange={handleQuestion17}
              />
              <span
                className="render17"
                style={{
                  display: "none",
                }}
              >
                {question17}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock18 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                maxWidth: "100%",
                rowGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label
                htmlFor="input18"
                style={{
                  width: "100%",
                  lineHeight: 1,
                }}
              >
                18. Кем хочешь стать когда вырастешь?
              </label>
              <input
                id="input18"
                name="input18"
                type="text"
                className="input18"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  width: "100%",
                  maxWidth: "calc(100% - 10px)",
                }}
                onChange={handleQuestion18}
              />
              <span
                className="render18"
                style={{
                  display: "none",
                }}
              >
                {question18}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock19 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                maxWidth: "100%",
                rowGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <label
                htmlFor="input19"
                style={{
                  width: "100%",
                  lineHeight: 1,
                }}
              >
                19. Твои пожелания мне:
              </label>
              <textarea
                rows="5"
                id="input19"
                name="input19"
                type="text"
                className="input19"
                style={{
                  display: "block",
                  padding: "5px",
                  position: "relative",
                  top: "-5px",
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                  fontSize: "18px",
                  lineHeight: "18px",
                  fontFamily: "Hortensia",
                  fontWeight: "700",
                  color: "#a90a77",
                  textDecoration: "underline",
                  width: "100%",
                  maxWidth: "calc(100% - 10px)",
                }}
                onChange={handleQuestion19}
              ></textarea>

              <span
                className="render19"
                style={{
                  display: "none",
                }}
              >
                {question19}
              </span>
            </div>

            <div
              className={`inputBlock inputBlock20 ${style.inputBlock}`}
              style={{
                display: "flex",
                flexDirection:
                  isXSscreen || isSMscreen || isSMDscreen ? "column" : "row",
                alignItems:
                  isXSscreen || isSMscreen || isSMDscreen
                    ? "flex-start"
                    : "center",
                width: "100%",
                maxWidth: "100%",
                columnGap: "5px",
                fontSize: "18px",
                fontFamily: "Hortensia",
                color: "#bf0c87",
              }}
            >
              <div
                div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "15px",
                  width: "100%",
                }}
              >
                <label
                  htmlFor="input20"
                  style={{
                    flexShrink: 0,
                  }}
                >
                  20. Оставь на память рисунок или наклейку:
                </label>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    columnGap: "15px",
                    width: "100%",
                  }}
                >
                  {image && (
                    <img
                      src={image}
                      alt="Preview"
                      style={{
                        width: "auto",
                        maxHeight: "200px",
                        maxWidth: "220px",
                      }}
                    />
                  )}

                  {image && (
                    <span
                      className={style.delPhoto}
                      id="delPhoto"
                      style={{
                        color: "red",
                      }}
                      onClick={async (e) => {
                        if (
                          window.confirm("Вы хотите удалить изображение?") ||
                          e.preventDefault()
                        ) {
                          setFile(null);
                          setImage(null);
                        }
                      }}
                    >
                      <DelSVG />
                    </span>
                  )}
                  {!image && (
                    <div className={style.uploader} id="uploader">
                      <FileUploader
                        handleChange={handleFileChange}
                        name="file"
                        types={fileTypes}
                        label="Нажмите / перетащите файл сюда"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className={style.download}
          id="download"
          style={{
            backgroundColor: "#F6E6F1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid #a90a77",
            borderRadius: "150px",
            cursor: "pointer",
            position: "fixed",
            right: "6%",
            bottom: "35px",
            zIndex: "999",
            height: "60px",
            width: "60px",
          }}
        >
          <SaveSVG />
        </button>
      </div>
    </div>
  );
};

export default Homepage;
