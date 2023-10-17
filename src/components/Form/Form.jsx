import React from "react";

// Assets
import { dollar, percent } from "../../assets/images";

// Components
import "./Form.css";
import FormInput from "./FormInput";
import TotalOutput from "../Total/TotalOutput";

const Form = () => {
  return (
    <div className="form">
      <h3 className="form__title">Calcular Descuento</h3>
      <div className="form__input-group">
        <FormInput icon={dollar}>
          <span>Ingresa el valor</span>
        </FormInput>
        <FormInput icon={percent}>
          <span>Ingresa el porcentaje</span>
        </FormInput>
      </div>

      <h3 className="form__title">Valor Final</h3>
      <TotalOutput />
    </div>
  );
};

export default Form;
