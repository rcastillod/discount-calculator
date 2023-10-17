import React from "react";

// Style
import "./FormInput.css";

const FormInput = ({ icon, children }) => {
  return (
    <div className="form__input">
      {children}
      <div>
        <div className="form__input-icon">
          <img src={icon} alt="Icono" />
        </div>
        <input type="text" />
      </div>
    </div>
  );
};

export default FormInput;
