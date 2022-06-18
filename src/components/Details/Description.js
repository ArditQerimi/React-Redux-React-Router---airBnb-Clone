import React, { useState, useRef } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "react-responsive-calendar-picker/dist/index.css";
import classes from "./Description.module.css";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "react-multi-date-picker/styles/colors/green.css";

import { DateObject, Calendar } from "react-multi-date-picker";

import "react-datepicker/dist/react-datepicker.css";

import L from "leaflet";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import "react-multi-date-picker/styles/colors/red.css";
import "./CalendarStyle.css";
const Description1 = ({ details }) => {
  const [shouldCloseCalendar, setShouldCloseCalendar] = useState(false);
  const [shouldOpenCalendar, setShouldOpenCalendar] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date("2022-06-17"),
      endDate: new Date("2022-06-20"),
      key: "selection",
    },
  ]);

  console.log(state[0].startDate);

  const icon = L.icon({
    // iconRetinaUrl: require("../../assets/icon2.png"),
    iconUrl: require("../../assets/icon1.png"),
    iconSize: [50, 50],

    // className: "marker-icon",
  });

  console.log(icon);
  const position = [42.6629, 21.1655];

  const datePickerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // const date = new DateObject();
  // console.log(date.format());
  // console.log(date.valueOf());

  const [values, setValues] = useState([
    new DateObject("2022/07/06"),
    new DateObject("2022/07/13"),
  ]);
  console.log("first date", values[0].format());
  console.log("first date", values[0]);
  console.log("second date", values[1]?.format());
  console.log(`${values[1]?.format()} -- ${values[0].format()} `);
  console.log("Days Selected", values[1]?.dayOfYear - values[0]?.dayOfYear);

  var date = new Date(values[0].valueOf());
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  var date_ = new Date(values[1]?.valueOf());
  var year_ = date_.getFullYear();
  var month_ = ("0" + (date_.getMonth() + 1)).slice(-2);
  var day_ = ("0" + date_.getDate()).slice(-2);

  let w = window.innerWidth;
  let h = window.innerHeight;

  console.log(`${year}-${month}-${day}`);

  const handleScroll = (event) => {
    console.log("scrollTop: ", event.currentTarget.scrollTop);
    console.log("offsetHeight: ", event.currentTarget.offsetHeight);
  };

  return (
    <>
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
              Amazing on this incredible island!, unique accommodation of its
              kind on the coasts of San Blas, ideal for couples and/or groups
              looking for privacy in their holidays, marvel at its natural
              environment and wake up every day facing the sea, enjoy Chimera
              Island with its 4 infinity pools with ocean views, all the rooms
              have their own private pool!, in addition to all the necessary
              services for a pleasant stay.
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
                <div className={classes.wheretosleepdescription}>
                  1 king bed
                </div>
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
          <div className={classes.customCalendar}>
            <Calendar
              value={values}
              onChange={setValues}
              range
              // className="red"
              numberOfMonths={2}
              showOtherDays
              format="MM/DD/YYYY"
              ref={datePickerRef}
              className="custom-calendar"
              // className={classes.calendarinput}
              // className={classes.customcalendar}

              // inputClass="custom-input"
            />

            {/* <DateRange
              editableDateInputs
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection
              ranges={state}
              months={2}
              direction={"horizontal"}
            /> */}

            {/* <div>{state[0]?.endDate}</div> */}

            {/* <div>
              <button>
                <div onClick={() => datePickerRef.current.openCalendar()}>
                  {values[0].day}
                </div>
              </button>
              <div>{values[1]?.day}</div>
              <div>{`${values[1]?.format()} -- ${values[0].format()} `}</div>
            </div> */}
          </div>
          {/* <div
            style={{
              width: 1150,
              height: 400,
              overflow: "hidden",
            }}
          >
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ width: 1100, height: 480 }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <CircleMarker
                center={position}
                radius={55}
                fillColor={"#e51d56"}
                color={"none"}
              >
                <Marker position={position} icon={icon}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </CircleMarker>
            </MapContainer>
          </div> */}
          {/* <div>MAP END!!!!!!!!!!!!!!!!</div> */}
          <div>{/* ///////////////// end /////////////// */}</div>
        </div>

        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}

        <div className={classes.rightcontainer}>
          <div className={classes.component}>
            <div className={classes.rightcontainerheader}>
              <div className={classes.pricepernight}>
                <div className={classes.price}>$3,000</div>

                <div className={classes.night}>night</div>
              </div>
              <div className={classes.placerating}>
                <img
                  src={require("../../assets/icons/star.png")}
                  style={{ objectFit: "contain", width: 20, height: 20 }}
                />
                <div className={classes.rating}>5.0</div>
                <div>·</div>
                <div className={classes.reviews}>3 reviews</div>
              </div>
            </div>

            <div className={classes.calendarcontainer}>
              <div
                onClick={() => setShouldOpenCalendar(!shouldOpenCalendar)}
                // style={{  }}
                className={classes.checkcontainer}
              >
                <div className={classes.check}>
                  <div className={classes.checktext}>Check-in</div>
                  {/* <div>{values[0].format()}</div> */}

                  <div>{`${year}/${month}/${day}`}</div>
                </div>
                <div className={classes.check}>
                  <div className={classes.checktext}>Checkout</div>

                  {year_ && month_ && day_ ? (
                    <div>{`${year_}/${month_}/${day_}`}</div>
                  ) : (
                    <div style={{ height: 18 }}></div>
                  )}
                </div>
              </div>
              <div className={classes.opencalendar}>
                {shouldOpenCalendar && (
                  <Calendar
                    value={values}
                    onChange={setValues}
                    range
                    numberOfMonths={2}
                    showOtherDays
                    format="MM/DD/YYYY"
                    ref={datePickerRef}
                    className="custom-calendar"
                  />
                )}
              </div>
              <div className={classes.guestscontainer}>
                <div>
                  <div className={classes.gueststext}>Guests</div>
                  <div className={classes.guestsnumber}>1 guest</div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={classes.chevron}
                  />
                </div>
              </div>
              <div className={classes.buttonreserve}>
                <div className={classes.buttonreservetext}>Reserve</div>
              </div>

              <div className={classes.dummytext}>You won't be charged yet</div>

              <div className={classes.calculationscontainer}>
                <div className={classes.calculations}>
                  <div className={classes.calcright}>
                    <div className={classes.pricepernight}>$314</div>
                    <div>X</div>
                    <div className={classes.allnights}>
                      <div className={classes.numofnight}>5</div>
                      <div className={classes.night}>night</div>
                    </div>
                  </div>
                  <div className={classes.calcleft}>$1,571</div>
                </div>
                <div className={classes.servicefee}>
                  <div className={classes.calcright}>
                    <div>Service fee</div>
                  </div>
                  <div className={classes.calcleft1}>$310</div>
                </div>
                <div className={classes.divider1}></div>
                <div className={classes.total}>
                  <div className={classes.totaltaxes}>Total before taxes</div>
                  <div className={classes.totalprice}>$1,881</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////// FOOTER ////////////////////////// */}
      <div style={{ marginTop: 5, marginBottom: 5 }}>
        <div className={classes.cleardatescontainer}>
          <div className={classes.cleardates}>Clear dates</div>
          <div className={classes.reportListing}>
            <img
              src={require("../../assets/flag.png")}
              className={classes.flag}
            />
            <div className={classes.cleardates1}>Report this listing</div>
          </div>
        </div>
        <div className={classes.mapcontainer}>
          <div className={classes.divider}></div>
          <div className={classes.wheretobe}>Where you’ll be</div>
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: 1400, height: 480, marginBottom: 20 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <CircleMarker
              center={position}
              radius={55}
              fillColor={"#e51d56"}
              color={"none"}
            >
              <Marker position={position} icon={icon}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </CircleMarker>
          </MapContainer>
        </div>

        <div className={classes.footer}>
          <div
            className={classes.footercontainer}
            // style={{ display: "grid", gridTemplateColumns: "2fr 2fr 2fr 2fr" }}
          >
            {/* <div className="footer" style={{ gridTemplateColumns: "2fr" }}> */}
            <div className={classes.footersection}>
              <h5 className={classes.footersectiontitle}>Support</h5>
              <p>Help Center</p>
              <p>AirCover</p>
              <p>Safety information</p>
              <p>Supporting people with disabilities</p>
              <p>Cancellation options</p>
              <p>Our COVID-19 Response</p>
              <p>Report a neighborhood concern</p>
            </div>
            <div className={classes.footersection}>
              <h5 className={classes.footersectiontitle}>Community</h5>
              <p>Airbnb.org: disaster relief housing</p>
              <p>Support Syrian refugees</p>
              <p>Combating discrimination</p>
            </div>
            <div className={classes.footersection}>
              <h5 className={classes.footersectiontitle}>Hosting</h5>
              <p>Try hosting</p>
              <p>AirCover for Hosts</p>
              <p>Explore hosting resources</p>
              <p>Visit our community forum</p>
              <p>How to host responsibly</p>
            </div>

            <div className={classes.footersection}>
              <h5 className={classes.footersectiontitle}>About</h5>
              <p>Newsroom</p>
              <p>Learn about new features</p>
              <p>Letter from our founders</p>
              <p>Careers</p>
              <p>Investors</p>
            </div>
          </div>
          <>
            <div className={classes.airbnbfootercontainer}>
              {/* <div className={classes.divider}></div> */}
              <div className={classes.copyright}>
                © 2022 Airbnb, Inc. {""} · {""} Privacy {""} · {""} Terms {""} ·{" "}
                {""} Sitemap {""} · {""} Destinations
              </div>
              <div className={classes.rightbuttons}>
                <div className={classes.languague}>
                  <img
                    className={classes.globeicon}
                    src={require("../../assets/icons/globeicon.png")}
                    alt=""
                  />

                  <div className={classes.footertext}>English (US)</div>
                </div>

                <div className={classes.footertext}>$ USD</div>

                <img
                  src={require("../../assets/social.png")}
                  style={{ width: 100, objectFit: "contain" }}
                />
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Description1;
