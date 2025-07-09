import { PersonagemArqueiro } from "./arqueiro.js";
import { PersonagemMago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class PersonagemArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = "ArqueiroMago"
    static descricao = "Detentor de lancas e flechas mágicas!"

    constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome, level);
        this.ladoArqueiro = new PersonagemArqueiro(nome, level, destreza);
        this.ladoMago = new PersonagemMago(nome, level, elementoMagico, levelMagico, inteligencia);
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}