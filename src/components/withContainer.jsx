import React, { Fragment } from "react";

const withContainer = Component => props => {
  return (
    <Fragment>
      <section className="container">
        <Component {...props} />
      </section>
    </Fragment>
  );
};
export default withContainer;
