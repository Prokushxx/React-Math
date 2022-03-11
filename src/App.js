import React, { useState } from "react";
import Button from "./Button";
import Input from "./InputNum"
import Operator from "./Operator";
import Diplay from './Display';

import Image from "./Image";


function App() {

  const [cal, setCal] = useState({
    val1: '',
    val2: '',
    opt: '',
    result: '',
  });

  function calculate() {
    // console.log(cal.opt);
    // console.log(cal.val2);
    // console.log(cal.val1);
  var maths = '';

    switch (cal.opt) {
      case '+':
        maths = parseFloat(cal.val1) + parseFloat(cal.val2);
        break;

      case '-':
        maths = cal.val1 - cal.val2;
        break;

      case '*':
        maths = cal.val1 * cal.val2;
        break;

      case '/':
        maths = cal.val1 / cal.val2;
        break;

        default:

          break;
    
    }

    setCal(
      (prev) => {
        return {
          ...prev,
          result: maths
        }
      }
    )
  }

  return (
    <div>
      <Input changeEventHandler={
        (event) => {
          setCal(
            (prev) => {
              return {
                ...prev,
                val1: event.target.value
              }
            }
          )
        }
      } />

      <Operator changeEventOpt={
        (event) => {
          setCal(
            (prev) => {
              return {
                ...prev,
                opt: event.target.value
              }
            }
          )
        }
      } />

      <Input changeEventHandler={
        (event) => {
          setCal(
            (prev) => {
              return {
                ...prev,
                val2: event.target.value
              }
            }
          )
        }} />
      <Button caption="Calc" eventHandler={calculate} />

      <Diplay calResult={cal.result}/>
    </div>
  );
}

export default App;
