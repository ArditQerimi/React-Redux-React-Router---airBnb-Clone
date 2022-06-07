import React from "react";
import classes from "./PageNavigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  // faBars,
  // faUser,
  // faGlobe
} from "@fortawesome/free-solid-svg-icons";

const PageNavigation = () => {
  return (
    <>
      <div className={classes.container}>
        <img
          src={require("../../assets/airbnblogo.png")}
          className={classes.img}
          alt=""
        />
        <img
          src={require("../../assets/airbnb.png")}
          className={classes.img1}
          alt=""
        />
        <div className={classes.centerbuttons}>
          <button className={classes.centerbutton}>
            <div className={classes.centerbuttontext}>Anywhere</div>
          </button>
          <button className={classes.centerbutton}>
            <div className={classes.centerbuttontext}>Any week</div>
          </button>
          <button className={classes.centerbutton}>
            <div className={classes.lastcenterbuttontext}>Add guests</div>
          </button>
          <div className={classes.iconcontainersearch}>
            <FontAwesomeIcon icon={faSearch} className={classes.searchicon} />
          </div>
        </div>
        <div className={classes.rightcontainer}>
          <button className={classes.becomeahostbutton}>
            <div className={classes.becomeahosttext}>Become a Host</div>
          </button>
          <div className={classes.iconcontainerglobe}>
            <img
              className={classes.globeicon}
              src={require("../../assets/icons/globeicon.png")}
              alt=""
            />
            {/* <FontAwesomeIcon icon={faGlobe} className={classes.globeicon} /> */}
          </div>
          {/* <div className={classes.rightbuttonscontainer}> */}
          {/* <div className={classes.usermenu}> */}
          <img
            src={require("../../assets/icons/user.png")}
            className={classes.user}
            alt=""
          />
          {/* <FontAwesomeIcon icon={faBars} className={classes.barsicon} />
            <FontAwesomeIcon icon={faUser} className={classes.usericon} /> */}
          {/* <FontAwesomeIcon icon={faUserCircle} className={classes.usericon} /> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      <div className={classes.searchinputcontainer}>
        <FontAwesomeIcon icon={faSearch} className={classes.fasearch} />
        <input placeholder="Where to?" className={classes.input} />

        <img
          src={require("../../assets/filter.png")}
          className={classes.image}
          alt=""
        />
      </div>
    </>
  );
};

export default PageNavigation;
