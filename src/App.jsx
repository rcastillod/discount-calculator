import { useState } from "react";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <div className="main">
        <div className="gradient__shape gradient__shape--green"></div>
        <div className="gradient__shape gradient__shape--blue"></div>
        <div className="container">
          <div className="form__wrapper">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
