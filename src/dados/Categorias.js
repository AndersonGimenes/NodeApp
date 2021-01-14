export default class Categorias{
    constructor(){
        this.categorias = [];
        this.inscritos = [];
    }

    inscrever(func){
        this.inscritos.push(func);
    }

    desinscrever(func){
        this.inscritos = this.inscritos.filter(f => f !== func);
    }

    notificar(){
        this.inscritos.forEach(func => 
            func(this.categorias)
        );
    }

    adicionarCategoria(categoria){
        this.categorias.push(categoria);
        this.notificar();
    }
}