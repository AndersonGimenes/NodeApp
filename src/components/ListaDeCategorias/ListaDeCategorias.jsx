import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]};
        this._referenciaNovasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._referenciaNovasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._referenciaNovasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    _handlerEventoInput(e){
        if(e.key === 'Enter'){
            let categoria = e.target.value;        
            this.props.adicionarCategoria(categoria);
        }
            
    }

    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.categorias.map((categoria, index) =>
                        <li key={index} className="lista-categorias_item">
                        {categoria}
                      </li>
                    )}                    
                </ul>
                <input type="text" 
                    className="lista-categorias_input" 
                    placeholder="Digita uma nova categoria..." 
                    onKeyPress={this._handlerEventoInput.bind(this)}/>
            </section>
        );
    }
}
 
export default ListaDeCategorias;