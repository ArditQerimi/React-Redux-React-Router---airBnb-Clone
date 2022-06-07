import React, { Component, useState } from "react";
import { DatePicker } from "react-responsive-calendar-picker";

import "react-responsive-calendar-picker/dist/index.css";
import classes from "./Description1.module.css";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Description1 = ({ details }) => {
  const [dates, setDates] = useState({
    checkin: new Date("2022-03-24"),

    checkout: new Date("2022-04-28"),
  });

  const [open, setOpen] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.leftcontainer}>
        <div>
          {details.map((detail, index) => (
            <>
              <div className={classes.hostcontainer}>
                <div>
                  <div key={index} className={classes.hostedbytitle}>
                    {detail.hostedbytitle}
                  </div>
                  <div className={classes.hostdescription}>
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
                <img src={detail.hostedby} className={classes.hostimage} />
              </div>
              <div className={classes.divider}></div>
            </>
          ))}
        </div>
        {details.map((detail, index) => {
          return (
            <>
              <div key={index} className={classes.descriptioncontainer}>
                <div className={classes.iconcontainer}>
                  <img
                    src={detail.description1Icon}
                    className={classes.descriptionIcon}
                  />
                </div>
                <div className={classes.titleanddescription}>
                  <div className={classes.titleofdescription}>
                    {detail.description1Title}
                  </div>
                  <div className={classes.description}>
                    {detail.description1}
                  </div>
                </div>
              </div>
              <div className={classes.descriptioncontainer}>
                <div className={classes.iconcontainer}>
                  <img
                    src={detail.description2Icon}
                    className={classes.descriptionIcon}
                  />
                </div>
                <div className={classes.titleanddescription}>
                  <div className={classes.titleofdescription}>
                    {detail.description2Title}
                  </div>
                  <div className={classes.description}>
                    {detail.description2}
                  </div>
                </div>
              </div>
              <div className={classes.descriptioncontainer}>
                <div className={classes.iconcontainer}>
                  <img
                    src={detail.description3Icon}
                    className={classes.descriptionIcon}
                  />
                </div>
                <div className={classes.titleanddescription}>
                  <div className={classes.titleofdescription}>
                    {detail.description3Title}
                  </div>
                  <div className={classes.description}>
                    {detail.description3}
                  </div>
                </div>
              </div>
              <div className={classes.divider}></div>
            </>
          );
        })}
        <div className={classes.aircovercontainer}>
          <div className={classes.aircover}>
            <img
              src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
              className={classes.aircoverimage}
            />

            <div>
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </div>
            <div className={classes.learnmore}>Learn more</div>
          </div>
          <div className={classes.divider}></div>
        </div>
        {/* <div className={classes.placedescriptioncontainer}> */}
        <div className={classes.placedescriptioncontainer}>
          <div className={classes.translatecontainer}>
            <div>
              <img
                src={require("../../assets/icons/translate.png")}
                className={classes.translateimage}
              />
            </div>
            <div>
              Some info has been automatically translated.{" "}
              <span className={classes.showoriginal}>
                Show original language
              </span>
            </div>
          </div>
          <div className={classes.placedescription}>
            Amazing on this incredible island!, unique accommodation of its kind
            on the coasts of San Blas, ideal for couples and/or groups looking
            for privacy in their holidays, marvel at its natural environment and
            wake up every day facing the sea, enjoy Chimera Island with its 4
            infinity pools with ocean views, all the rooms have their own
            private pool!, in addition to all the necessary services for a
            pleasant stay.
            <div>...</div>
          </div>
          <div className={classes.showmorecontainer}>
            <div className={classes.showmoretext}>Show more</div>
            <div>
              {" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className={classes.chevron}
              />
            </div>
          </div>
          <div className={classes.divider}></div>
        </div>
        {/* </div> */}
        <div className={classes.wheretosleepcontainer}>
          <div className={classes.wheretosleeptitle}>Where you'll sleep</div>
          <div className={classes.wheretosleep}>
            <div className={classes.wheretosleepcard}>
              <img
                src={require("../../assets/icons/bedroom.png")}
                className={classes.wheretosleepimage}
              />
              <div className={classes.wheretosleepbedroom}>Bedroom</div>
              <div className={classes.wheretosleepdescription}>1 king bed</div>
            </div>
          </div>
          <div className={classes.divider}></div>
        </div>

        <div className={classes.offerscontainer}>
          <div className={classes.wheretosleeptitle}>
            What this place offers
          </div>
          {/* <div className={classes.offers}> */}
          <div className={classes.offers}>
            {details.map((detail, index) => {
              return detail.placeOffers.map((offer, index) => {
                return (
                  // <div>
                  <div className={classes.offer}>
                    <div className={classes.offericoncontainer}>
                      <img src={offer.icon} className={classes.offericon} />
                    </div>
                    <div
                      className={
                        offer.title !== "Carbon monoxide alarm" &&
                        offer.title !== "Smoke alarm"
                          ? classes.offertitle
                          : classes.offertitlelinethrough
                      }
                    >
                      {offer.title}
                    </div>
                  </div>
                  // </div>
                );
              });
            })}
            <div className={classes.amenitiescontainer}>
              <div className={classes.amenities}>Show all 11 amenities</div>
            </div>
          </div>
          {/* </div> */}
          <div className={classes.divider}></div>
        </div>
        <div>
          <DatePicker
            dates={dates}
            setDates={setDates}
            open={open}
            setOpen={setOpen}
            // mobile={window.innerWidth>800:false:true}
          >
            <button onClick={() => setOpen(!open)}>
              {dates.checkin && dates.checkin.toDateString()} |{" "}
              {dates.checkout && dates.checkout.toDateString()}
            </button>
          </DatePicker>
        </div>
        <div>{/* ///////////////// end /////////////// */}</div>
      </div>

      {/* /////////////////////////////////////////////////////////////////// */}
      <div className={classes.rightcontainer}>rightcontainer</div>
    </div>
  );
};

export default Description1;
