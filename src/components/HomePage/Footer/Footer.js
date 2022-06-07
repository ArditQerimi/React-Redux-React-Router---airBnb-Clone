import React from "react";
import {
  faChevronUp,
  // faGlobe,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footercontainer}>
        <div className={classes.copyright}>
          © 2022 Airbnb, Inc. {""} · {""} Privacy {""} · {""} Terms {""} · {""}{" "}
          Sitemap {""} · {""} Destinations
        </div>
        <div className={classes.rightbuttons}>
          <div className={classes.languague}>
            <img
              className={classes.globeicon}
              src={require("../../../assets/icons/globeicon.png")}
              alt=""
            />

            <div className={classes.footertext}>English (US)</div>
          </div>

          <div className={classes.footertext}>$ USD</div>

          <div className={classes.support}>
            <div className={classes.footertext}>Support & resources</div>
            <div>
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
          </div>
        </div>
      </footer>
      <footer
        className={classes.footer2container}
        style={{
          marginTop: 1,
          backgroundColor: "#fff",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <div
          style={{
            marginTop: 1,
            padding: 1,
            backgroundColor: "#fff",
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <div style={{ height: 25, color: "#ff385c" }}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ width: 25, height: 25 }}
            />
          </div>
          <div style={{ height: 5 }}>Explore</div>
        </div>
        <div
          style={{
            marginTop: 1,
            padding: 1,
            backgroundColor: "#fff",
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingRight: 40,
            paddingLeft: 40,
            cursor: "pointer",
          }}
        >
          <div style={{ height: 25, color: "#717171" }}>
            <FontAwesomeIcon icon={faHeart} style={{ width: 25, height: 25 }} />
          </div>
          <div style={{ height: 5 }}>Wishlists</div>
        </div>
        <div
          style={{
            marginTop: 1,
            padding: 1,
            backgroundColor: "#fff",
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <div style={{ height: 25 }}>
            <FontAwesomeIcon icon={faUser} className={classes.usericon} />
          </div>
          <div style={{ height: 5 }}>Log in</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
