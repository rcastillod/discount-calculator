import React, { useState } from "react";

// Assets
import { dollarIcon, percentIcon } from "../../assets/images";

// Components
import "./Form.css";
import FormInput from "./FormInput";
import TotalOutput from "../Total/TotalOutput";
import FormButton from "./FormButton";

const Form = () => {
  const [value, setValue] = useState("");
  const [percent, setPercent] = useState("");

  return (
    <div className="form">
      <h3 className="form__title">Calcular Descuento</h3>
      <div className="form__input-group">
        <FormInput icon={dollarIcon} value={value} onSetValue={setValue}>
          <span>Ingresa el valor</span>
        </FormInput>
        <FormInput icon={percentIcon} value={percent} onSetValue={setPercent}>
          <span>Ingresa el porcentaje</span>
        </FormInput>
      </div>

      <h3 className="form__title">Valor Final</h3>
      <TotalOutput value={value} percent={percent} />
      {value && <FormButton onSetValue={setValue} onSetPercent={setPercent} />}
    </div>
  );
};

export default Form;
