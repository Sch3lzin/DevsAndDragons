import { Personagem } from "./models/personagem.js";

const personagemPedrinho = new Personagem();
personagemPedrinho.nome = "Pedrinho";
personagemPedrinho.vida = 7;
personagemPedrinho.mana = 12;
personagemPedrinho.level = 5;
personagemPedrinho.tipo = "Mago";

const personagemJose = new Personagem();

console.log(personagemPedrinho);