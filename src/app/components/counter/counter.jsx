import React, { useState } from "react";
import "./counter.scss";
//rafce
const Counter = () => {
  //hooks=son funciones de react que nos permite trabajar con el ciclo de vida de react
  //useState= forma dentro de react donde podemos tener variables que pueden cambiar en el tiempo
  const [value, setValue] = useState(0); //valor actual del estado = value
  //setValue = funcion que actualiza este valor, set y el nombre del estado
  //usestate retorno un array con dos valores o los que se quieran
  const handlePlus = () => {
    setValue(value + 1);
  };
  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <button className="buttonMinus" onClick={handleMinus}>
        -
      </button>
      <span className="number">{value}</span>
      <button className="buttonPlus" onClick={handlePlus}>
        +
      </button>
    </div>
  );
};


export default Counter;
