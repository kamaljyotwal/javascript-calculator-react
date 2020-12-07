import "./CSS/app.css";

import React, { Component } from "react";

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
const calcoperations = ["AC", "C", "%"];
const operators = ["÷", "×", "-", "+", "="];

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      screenData: "",
    };
  }

  render() {
    let mappingNumVar = numberArray.map((i) => <div className="button numbers">{i}</div>);
    let calcOperationsVar = calcoperations.map((i) => <div className="button">{i}</div>);
    let operatorsVar = operators.map((i) => <div className="operators button">{i}</div>);
    return (
      <div className="App">
        <div className="calculator-body">
          <div className="screen"></div>

          <div className="buttonContainer">
            <div className="leftPanel">
              <div className="calcoperations">{calcOperationsVar}</div>
              <div className="numerals">{mappingNumVar}</div>
            </div>

            <div className="operators">{operatorsVar}</div>
          </div>
        </div>
      </div>
    );
  }
}
