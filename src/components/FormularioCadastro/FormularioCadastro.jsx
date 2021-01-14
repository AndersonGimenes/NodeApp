import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this._titulo = "";
    this._texto = "";
    this._categoria = "Sem categoria";
    this.state = {categorias:[]}
    
    this._referenciaNovasCategorias = this._novasCategorias.bind(this);

  }

  componentDidMount(){
    this.props.categorias.inscrever(this._referenciaNovasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._referenciaNovasCategorias);
  }
  
  _novasCategorias(categorias){
    this.setState({...this.state, categorias});
  }

  _handleMudancaCategoria(evento){
    evento.stopPropagation();
    this._categoria = evento.target.value;
  }

  _handleMudancaTitulo(event){
    event.stopPropagation();
    this._titulo = event.target.value;
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this._texto = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this._titulo, this._texto, this._categoria);
  }

  render() {
    return (
      <form className="form-cadastro" 
        onSubmit={this._criarNota.bind(this)}>
        <select
           onChange={this._handleMudancaCategoria.bind(this)}
           className="form-cadastro_input"
        >
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) =>
            <option key={index}>{categoria}</option>  
          )}
        </select>
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
