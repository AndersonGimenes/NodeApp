export default class Notas{
    constructor(){
        this.notas = [];
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
            func(this.notas)
        );
    }

    criarNota(titulo, texto, categoria) {
        let nota = {
            titulo: titulo,
            texto: texto,
            categoria: categoria
        }

        this.notas.push(nota);
        this.notificar();
    }
    
    deletarNota(index) {
        this.notas.splice(index, 1);
        this.notificar();
    }
    
}