export class Personagem {
    nome
    mana = 100;
    vida = 100;
    level
    tipo
    descricao

    constructor(nome, level) {
        this.nome = nome;
        this.level = level;
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacavel ${this.tipo}`;
        } 
        return `${this.tipo} iniciante`;
    }
}