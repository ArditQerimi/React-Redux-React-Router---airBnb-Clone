import React from "react";
import classes from "./ImageGallery.module.css";
// console.log(classes.imageContainer);
// console.log(classes);

const ImageGallery = ({ details }) => {
  return (
    <div className={classes.container}>
      <>
        {details.map((detail, index) => {
          // console.log(index);
          return detail.images.map((image, index) => {
            //   console.log(index);
            return (
              index === 0 && (
                // <div key={index} className={classes.image1container}>
                <img
                  key={index}
                  src={image.image}
                  className={classes.image1}
                  alt=""
                />
              )
            );
          });
        })}
      </>
      <div className={classes.image2Container}>
        {details.map((detail, index) => {
          // console.log(index);
          return detail.images.map((image, index) => {
            //   console.log(index);
            return (
              index > 0 &&
              index < 5 && (
                // <div key={index} className={classes.image2container}>
                <img
                  key={index}
                  src={image.image}
                  className={classes.image2}
                  alt=""
                />
                // </div>
              )
            );
          });
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
