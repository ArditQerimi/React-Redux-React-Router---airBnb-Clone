import React from "react";
import PageNavigation from "./PageNavigation";

const PageLayout = (props) => {
  // console.log(props.children[0].props.children[0].props.path);
  // console.log(props.children[0].props.children[1].props.path);
  // console.log(props.children[0].props.children[2].props.path);
  return (
    <>
      <>
        <PageNavigation />
        <div>{props.children}</div>
      </>
    </>
  );
};

export default PageLayout;
