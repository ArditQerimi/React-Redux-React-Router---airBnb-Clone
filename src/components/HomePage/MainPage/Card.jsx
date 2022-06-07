import React, { useEffect, useState } from "react";
import classes from "./MainPage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { cardsData } from "./MainPageData";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { slideNext, slidePrev } from "../../../store/cardCarousel-slice";

const Card = ({ card }) => {
  const index1 = useSelector((state) => state.cardCarousel.index);

  const dispatch = useDispatch();

  const increase1 = () => {
    dispatch(slideNext(card.carousel.length));
  };
  // console.log(card.carousel.length);

  const decrease1 = () => {
    dispatch(slidePrev(card.carousel.length));
  };
  const [index, setIndex] = useState(0);
  const carousel = card.carousel;

  const increase = () => {
    setIndex((prevState) => {
      if (prevState >= carousel.length - 1) return (prevState = 0);
      else return (prevState += 1);
    });
  };

  const decrease = () => {
    setIndex((prevState) => {
      if (prevState < 1) return (prevState = carousel.length - 1);
      else return (prevState += 1);
    });
  };
  return (
    <div className={classes.buttoncontainer} type="button" key={card.id}>
      <div
        key={carousel[index]}
        style={{
          backgroundImage: `url(${carousel[index].image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "260px",
          height: "260px",
        }}
      >
        {/* <img className={classes.image} src={card.image} alt="" /> */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flex: 0,
              paddingTop: 5,
              paddingRight: 5,
            }}
          >
            <FontAwesomeIcon icon={faHeart} className={classes.heart} />
          </div>
          <div
            style={{
              display: "flex",

              justifyContent: "space-between",
              marginTop: 85,
              paddingRight: 5,
              paddingLeft: 5,
            }}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={classes.chevron}
              onClick={decrease}
            />

            <FontAwesomeIcon
              icon={faChevronRight}
              className={classes.chevron}
              onClick={increase}
            />
          </div>
        </div>
      </div>
      <Link
        to={`/details/${card.id}`}
        state={card}
        title={card.title}
        className={classes.link}
      >
        <div className={classes.citystar}>
          <div>{card.city}</div>
          <div className={classes.rating}>
            <div>{card.rating}</div>

            <FontAwesomeIcon icon={faStar} className={classes.faStar} />
          </div>
        </div>
        <div className={classes.description}>{card.description}</div>
        {/* <div className={classes.title}>{card.title}</div> */}
        <div className={classes.date}>{card.date}</div>
        <div className={classes.pricecontainer}>
          <span className={classes.price}>{card.price}</span>
          <span> night</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
