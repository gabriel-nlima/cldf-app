import React, { Fragment } from "react";

const Result = props => (
  <Fragment>
    <p className="text-left">
      Deputados distritais seriam: {props.depsDistritais}
    </p>
    <p className="text-left">{props.message}</p>
  </Fragment>
);

export default Result;
