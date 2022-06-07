import React from "react";
import classes from "./Carousel.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { categoriesCarouselActions } from "../../../../store/categoriesCarousel-slice";
import { useDispatch, useSelector } from "react-redux";
import {
  slideNext,
  slidePrev,
} from "../../../../store/categoriesCarousel-slice";
// console.log(slideNext);
import { icons } from "./CarouselData";
// console.log(icons);

const Carousel = () => {
  const dispatch = useDispatch();
  // const carouselState = useSelector((state) => state.carousel);
  // const buttonLeft = useSelector((state) => state.carousel.faChevronLeft);
  // // console.log(buttonLeft);
  // // // console.log("Carousel State", carouselState);
  // console.log("buttonLeft is", buttonLeft);
  // const buttonRight = useSelector((state) => state.carousel.faChevronRight);
  // console.log("buttonRight is", buttonRight);
  const currentPosition = useSelector(
    (state) => state.categoriesCarousel.value
  );
  // console.log(`-------- POSITION: ${currentPosition} ---------`);

  const id = icons.map((icon) => icon.id);
  console.log(id);

  const increase = () => {
    dispatch(slideNext(id));
  };

  const decrease = () => {
    dispatch(slidePrev(id));
  };
  return (
    <>
      <div className={classes.chevroncontainer} onClick={decrease}>
        <FontAwesomeIcon icon={faChevronLeft} className={classes.chevron} />
      </div>

      <div
        className={classes.container}
        style={{ display: "flex", alignItems: "center" }}
        // style={{ flexDirection: "row", display: "flex" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {icons.map((icon, index) => {
            return (
              index === currentPosition &&
              icon.carousel.map((carousel, index) => {
                return (
                  <div
                    className={classes.buttoncontainer}
                    type="button"
                    key={index}
                  >
                    <img
                      className={classes.image}
                      src={carousel.image}
                      alt=""
                    />
                    <div className={classes.titlecontainer}>
                      <span className={classes.title}>{carousel.title}</span>
                    </div>
                  </div>
                );
              })
            );
          })}
        </div>
      </div>

      <div className={classes.chevroncontainer} onClick={increase}>
        <FontAwesomeIcon icon={faChevronRight} className={classes.chevron} />
      </div>
    </>
  );
};

export default Carousel;
