import React from "react";
import Carousel from "../components/HomePage/categories/Carousel/Carousel";
import Filter from "../components/HomePage/categories/Filter/Filter";
import MainPage from "../components/HomePage/MainPage/MainPage";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={classes.categories}>
        <Carousel />
        <Filter />
      </div>
      <div className={classes.mainpage}>
        <MainPage />
      </div>
    </div>
  );
};

export default HomePage;
