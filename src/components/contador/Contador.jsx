import '../../styles/contador.css'
import React, { Component } from "react";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (e) => {
    this.setState({
        passo: +e.target.value,
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <h2>{this.state.numero}</h2>
        <div className="Input">
          <label htmlFor="passoInput">Passo: </label>
          <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso}></input>
        </div>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    );
  } 
}

export default Contador;
