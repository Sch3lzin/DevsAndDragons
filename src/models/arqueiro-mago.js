import { PersonagemArqueiro } from "./arqueiro.js";
import { PersonagemMago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class PersonagemArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = "ArqueiroMago"
    static descricao = "Detentor de lancas e flechas mágicas!"

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome);
        this.ladoArqueiro = new PersonagemArqueiro(nome, destreza);
        this.ladoMago = new PersonagemMago(nome, elementoMagico, levelMagico, inteligencia);
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}