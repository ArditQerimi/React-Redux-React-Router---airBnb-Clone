import React from "react";
import classes from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.filter}>
        <img
          src={require("../../../../assets/filter.png")}
          className={classes.image}
          alt=""
        />
        <div className={classes.filtertext}>Filters</div>
      </div>
    </div>
  );
};

export default Filter;
