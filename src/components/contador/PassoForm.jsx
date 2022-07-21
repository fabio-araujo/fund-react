import React from "react";

export default (props) => {
  return (
    <div className="Input">
      <label htmlFor="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={props.passo}
        onChange={props.setPasso}
      ></input>
    </div>
  );
};
