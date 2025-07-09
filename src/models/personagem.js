export class Personagem {
    nome
    mana = 100;
    vida = 100;
    #level
    tipo
    descricao

    constructor(nome, level) {
        this.nome = nome;
        this.#level = level;
    }

    get level() {
        return this.#level;
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacavel ${this.constructor.tipo}`;
        } 
        return `${this.constructor.tipo} iniciante`;
    }

    static verificarVencedor(personagem1, personagem2) {
        if(personagem1.level === personagem2.level) {
            return "Empate";
        } if (personagem1.level > personagem2.level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor`;
        } return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor`;
    }
}