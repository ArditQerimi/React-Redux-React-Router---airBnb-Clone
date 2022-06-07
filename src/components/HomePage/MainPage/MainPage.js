import React, { useEffect } from "react";
import classes from "./MainPage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { cardsData } from "./MainPageData";
import Card from "./Card";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { slideNext, slidePrev } from "../../../store/cardCarousel-slice";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
const id = cardsData.map(
  // (card) => card.carousel.map((image) => image.image.map((image) => image.id))
  (card) => card.carousel.map((image, index) => image.id)
);
// console.log(id);

const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/homepage", { replace: true });
  }, [navigate]);
  // const [changeIndex, setChangeIndex] = useState(0);

  const currentPosition = useSelector((state) => state.cardCarousel.value);
  // console.log(`-------- POSITION: ${currentPosition} ---------`);

  // const onChangeIndex = () => {
  //   setChangeIndex();
  // };

  const dispatch = useDispatch();
  const increase = () => {
    dispatch(slideNext(id));
  };

  const decrease = () => {
    dispatch(slidePrev(id));
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.cards}>
          {cardsData.map((card, index) => {
            return <Card card={card} />;
          })}
        </div>
      </div>
    </>
  );
};
// index === currentPosition && (
//   <div
//     className={classes.buttoncontainer}
//     type="button"
//     key={index}
//   >
//     <div
//       key={index}
//       style={{
//         backgroundImage: `url(${carousel.image})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         width: "260px",
//         height: "260px",
//       }}
//     >
//       {/* <img className={classes.image} src={card.image} alt="" /> */}

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           flex: 1,
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             flex: 0,
//             paddingTop: 5,
//             paddingRight: 5,
//           }}
//         >
//           <FontAwesomeIcon
//             icon={faHeart}
//             className={classes.heart}
//           />
//         </div>
//         <div
//           style={{
//             display: "flex",

//             justifyContent: "space-between",
//             marginTop: 85,
//             paddingRight: 5,
//             paddingLeft: 5,
//           }}
//         >
//           <FontAwesomeIcon
//             icon={faChevronLeft}
//             className={classes.chevron}
//             onClick={decrease}
//           />

//           <FontAwesomeIcon
//             icon={faChevronRight}
//             className={classes.chevron}
//             onClick={increase}
//           />
//         </div>
//       </div>
//     </div>
//     <Link
//       to={`/details/${card.id}`}
//       state={card}
//       title={card.title}
//       className={classes.link}
//     >
//       <div className={classes.citystar}>
//         <div>{card.city}</div>
//         <div className={classes.rating}>
//           <div>{card.rating}</div>

//           <FontAwesomeIcon
//             icon={faStar}
//             className={classes.faStar}
//           />
//         </div>
//       </div>
//       <div className={classes.description}>
//         {card.description}
//       </div>
//       {/* <div className={classes.title}>{card.title}</div> */}
//       <div className={classes.date}>{card.date}</div>
//       <div className={classes.pricecontainer}>
//         <span className={classes.price}>{card.price}</span>
//         <span> night</span>
//       </div>
//     </Link>
//   </div>
export default MainPage;
