import React from "react";

// Style
import "./FormButton.css";

const FormButton = ({ onSetValue, onSetPercent }) => {
  const handleResetValues = () => {
    onSetValue("");
    onSetPercent("");
  };

  return (
    <div className="form__btn">
      <button onClick={handleResetValues}>Reset</button>
    </div>
  );
};

export default FormButton;
