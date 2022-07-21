import '../../styles/contador.css'
import React, { Component } from "react";
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';
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
        <Display numero={this.state.numero}></Display>
        <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
        <Botoes onInc={this.inc} onDec={this.dec}></Botoes>        
      </div>
    );
  } 
}

export default Contador;
