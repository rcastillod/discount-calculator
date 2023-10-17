import React from "react";

// Style
import "./FormInput.css";

const FormInput = ({ icon, value, onSetValue, children }) => {
  return (
    <div className="form__input">
      {children}
      <div>
        <div className="form__input-icon">
          <img src={icon} alt="Icono" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onSetValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FormInput;
