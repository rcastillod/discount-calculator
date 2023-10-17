import React from "react";

// Style
import "./TotalOutput.css";

const TotalOutput = ({ value, percent }) => {
  const discount = value * (percent / 100);
  const total = value - discount;

  const clp = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return <div className="form__total">{clp.format(total)}</div>;
};

export default TotalOutput;
