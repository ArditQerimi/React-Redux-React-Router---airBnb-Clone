import React from "react";
import classes from "./DetailsHeader.module.css";

const DetailsHeader = ({ details }) => {
  return (
    <>
      {details.map((detail, index) => (
        <div key={index}>
          <div className={classes.titlecontainer}>
            {detail.titleIcon && (
              <img
                src={detail.titleIcon}
                alt="title-icon"
                className={classes.titleIcon}
              />
            )}

            <div className={classes.title}>{detail.title}</div>
          </div>
          <div className={classes.details1}>
            <div className={classes.details1left}>
              <img
                src={require("../../assets/icons/star.png")}
                alt="star"
                className={classes.details1icon}
              />
              <div className={classes.rating}>{detail.rating}</div>
              <div>·</div>
              <div className={classes.reviews}>{detail.reviews} reviews</div>
              <div>·</div>
              <img
                src={require("../../assets/icons/superhostheart.png")}
                className={classes.details1icon}
                alt=""
              />
              <div className={classes.superhost}>Superhost</div>
              <div>·</div>
              <div className={classes.city}>{detail.city}</div>
            </div>
            <div className={classes.details1right}>
              <div className={classes.share}>
                <img
                  src={require("../../assets/icons/shareicon.png")}
                  className={classes.details1icon}
                  alt=""
                />
                <span className={classes.sharetext}>Share</span>
              </div>
              <div className={classes.share}>
                <img
                  src={require("../../assets/icons/saveicon.png")}
                  className={classes.details1icon}
                  alt=""
                />
                <span className={classes.savetext}>Save</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailsHeader;
