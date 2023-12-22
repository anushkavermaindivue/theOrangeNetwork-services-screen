'use client'

import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import * as math from 'mathjs';


const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [customVariables, setCustomVariables] = useState({});
  // Default mode is "rad"
  const [mode, setMode] = useState("rad");

  function handleChange(e) {
    setExpression(e.target.value);
  }

  function handleClick(input) {
    setExpression((prevExpression) => prevExpression + input);
  }

  function calculate() {
    try {
      const allVariables = {
        ...customVariables,
        π: Math.PI,
        e: Math.E,
        ln: math.log,
        log: math.log10,
        // Add factorial function
        fact: math.factorial,
        sin: mode === "rad" ? Math.sin : math.sin,
        cos: mode === "rad" ? Math.cos : math.cos,
        tan: mode === "rad" ? Math.tan : math.tan
      };

      const result = math.evaluate(expression, allVariables);
      if (typeof result === "number" && !isNaN(result)) {
        setExpression(Number(result).toFixed(4));
      } else {
        setExpression("Error: Invalid expression");
      }
    } catch (error) {
      setExpression("Error: Invalid expression");
    }
  }

  function clearScreen() {
    setExpression("");
  }

  // function backspace() {
  //   const newExpression = expression.slice(0, -1);
  //   setExpression(newExpression);
  // }

  function toggleMode() {
    // Toggle between "rad" and "deg" modes
    setMode(mode);
  }

  return (
    <section className="w-[50vw] m-auto p-2 flex flex-col gap-y-4">
        {/* calculator display */}
      <div>
        <Input onChange={handleChange} value={expression} placeholder='0' disableUnderline readOnly className="w-full border border-[#DADCE0] p-3 text-3xl rounded-lg" inputProps={{style: { textAlign: 'right'}}} />
        {/* <div>{screenVal}</div> */}
      </div>

      {/* calculator buttons */}
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between gap-x-2">
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => toggleMode("rad")}>Rad</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-[#70757A] w-24 normal-case" onClick={() => toggleMode("deg")}>Deg</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("fact(")}>x!</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("(")}>(</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick(")")}>)</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("%")}>%</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={clearScreen}>AC</Button>
        </div>
        <div className="flex justify-between gap-x-2">
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("^")}>Inv</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("sin(")}>sin</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("ln(")}>ln</Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case" onClick={() => handleClick("7")}>7</Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case" onClick={() => handleClick("8")}>8</Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case" onClick={() => handleClick("9")}>9</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case text-lg" onClick={() => handleClick("/")}>÷</Button>
        </div>
        <div className="flex justify-between gap-x-2">
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("π")}>π</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("cos(")}>cos</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("log(")}>log</Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case" onClick={() => handleClick("4")}>4</Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case" onClick={() => handleClick("5")}>5</Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case" onClick={() => handleClick("6")}>6</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case text-lg" onClick={() => handleClick("*")}>×</Button>
        </div>
        <div className="flex justify-between gap-x-2">
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("e")}>e</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("tan(")}>tan</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("sqrt(")}>√</Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case" onClick={() => handleClick("1")}>1</Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case" onClick={() => handleClick("2")}>2</Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case" onClick={() => handleClick("3")}>3</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case text-lg" onClick={() => handleClick("-")}>-</Button>
        </div>
        <div className="flex justify-between gap-x-2">
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick('Ans')}>Ans</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick("EXP")}>EXP</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case" onClick={() => handleClick('')}>x<sup>y</sup> </Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case" onClick={() => handleClick("0")}>0</Button>
          <Button className="bg-[#F1F3F4] hover:bg-[#F1F3F4] text-black w-24 normal-case text-lg" onClick={() => handleClick(".")}>.</Button>
          <Button className="bg-[#4285F4] hover:bg-[#4285F4] text-white w-24 normal-case font-semibold text-lg" onClick={calculate}>=</Button>
          <Button className="bg-[#DADCE0] hover:bg-[#DADCE0] text-black w-24 normal-case text-lg" onClick={() => handleClick("+")}>+</Button>
        </div>
      </div>
    </section>
  )
}

export default Calculator
