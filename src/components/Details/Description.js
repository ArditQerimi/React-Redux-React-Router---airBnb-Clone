import React from "react";
import classes from "./Description.module.css";

const Description = ({ details }) => {
  return (
    <>
      <div className={classes.container}>
        {details.map((detail, index) => {
          return (
            <div key={index} className={classes.containers}>
              <div className={classes.hostdescription}>
                <div className={classes.hostedbycontainer}>
                  <div className={classes.leftcontainer}>
                    <div className={classes.hostedbytitle}>
                      {detail.hostedbytitle}
                    </div>
                    <div className={classes.rooms}>
                      <div>
                        {detail.numOfGuests > 1
                          ? `${detail.numOfGuests} guests`
                          : `${detail.numOfGuests} guest`}
                      </div>
                      <div>·</div>
                      <div>
                        {detail.bedrooms > 1
                          ? `${detail.bedrooms} rooms`
                          : `${detail.bedrooms} room`}
                      </div>
                      <div>·</div>
                      <div>
                        {detail.beds > 1
                          ? `${detail.beds} beds`
                          : `${detail.beds} bed`}
                      </div>
                      <div>·</div>
                      <div>
                        {detail.baths > 1
                          ? `${detail.baths} shared baths`
                          : `${detail.baths} shared bath`}
                      </div>
                    </div>
                  </div>
                  <div className={classes.rightcontainer}>
                    <img className={classes.hostimage} src={detail.hostedby} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ width: "40%" }}>Cart</div>
      </div>
      <div>div</div>
      <div>another div</div>
    </>
  );
};

export default Description;
