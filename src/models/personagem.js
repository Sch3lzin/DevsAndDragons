export class Personagem {
    nome
    mana = 100;
    vida = 100;
    level
    tipo
    descricao

    constructor(nome, level, tipo) {
        this.nome = nome;
        this.level = level;
        this.tipo = tipo;
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacavel ${this.tipo}`;
        } 
        return `${this.tipo} iniciante`;
    }
}

export class PersonagemMago {
    elementoMagico
    levelMagico
    inteligencia

    constructor(elementoMagico, levelMagico, inteligencia) {
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
    }
}