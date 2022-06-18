import React from "react";
import classes from "./Details.module.css";
import { cardsData } from "../components/HomePage/MainPage/MainPageData";
import DetailsHeader from "../components/Details/DetailsHeader";
import ImageGallery from "../components/Details/ImageGallery";
import { useParams } from "react-router-dom";
import Description from "../components/Details/Description";
// import Description1 from "../components/Details/Description1";

const Details = () => {
  const params = useParams();
  const id = params.detailsId;

  const details = cardsData.filter((product, index) => {
    return product.id === +id;
  });

  return (
    <div className={classes.container}>
      <DetailsHeader details={details} />
      <ImageGallery details={details} />
      {/* <Description details={details} /> */}
      <Description details={details} />
    </div>
  );
};

export default Details;
