import { Personagem } from "./models/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { PersonagemMago } from "./models/personagem.js";

const personagemPedrinho = new Personagem("Pedrinho", 5, "Mago");
personagemPedrinho.magia = new PersonagemMago("Fogo", 10, 7);
const personagemJose = new Personagem("Jose", 3, "Arqueiro");

const personagens = [personagemPedrinho, personagemJose];

new PersonagemView(personagens).render();

console.log(personagemPedrinho.magia);