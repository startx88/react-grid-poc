import React from "react";
import Moment from "react-moment";
import Icons from "./Icons";
const Date = ({ from, to, icon, ...rest }) => {
  return (
    <div className="date">
      {icon ? (
        <div className="date-icon">
          <Icons icon="clock" />
          <Moment format="DD-MM-YYYY HH:mm">{from}</Moment>
        </div>
      ) : (
        <Moment format="DD-MM-YYYY HH:mm">{from}</Moment>
      )}

      {to && <Moment format="DD-MM-YYYY HH:mm">{to}</Moment>}
    </div>
  );
};

export default Date;
