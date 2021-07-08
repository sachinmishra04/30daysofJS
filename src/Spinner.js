/*
 * Project:  class
 * File:      Spinner.js
 * Author:   Amit Mishra (amit.mishra+CODA@gmail.com)
 *
 * Description:
 *
 * Revision History:
 *   2021-January-06:
 *
 * Copyright (c) 2021 Self
 *
 * License:
 *
 */

import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader test">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading",
};
export default Spinner;
