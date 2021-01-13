import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this._titulo = "";
    this._texto = "";
  }

  _handleMudancaTitulo(event) {
    this._titulo = event.target.value;
    event.stopPropagation();
  }

  _handleMudancaTexto(event) {
    this._texto = event.target.value;
    event.stopPropagation();
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this._titulo, this._texto);
  }

  render() {
    return (
      <form className="form-cadastro" 
        onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
