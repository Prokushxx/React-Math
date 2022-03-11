import React from "react";


const Operator = (props) => {

  return (
    <div>
      <select onChange={props.changeEventOpt}>
        <option>Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
      </select>
    </div>
  );
}

export default Operator;