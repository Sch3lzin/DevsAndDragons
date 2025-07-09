import { Personagem } from "./models/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { PersonagemMago } from "./models/mago.js";
import { PersonagemArqueiro } from "./models/arqueiro.js";
import { PersonagemArqueiroMago } from "./models/arqueiro-mago.js";
import { PersonagemGuerreiro } from "./models/guerreiro.js";

const magoAntonio = new PersonagemMago("Antonio", "Fogo", 4, 3);
const magaJulia = new PersonagemMago("Julia", "Gelo", 7, 10);
const arqueiroPaulo = new PersonagemArqueiro("Paulo", 6);
const arqueiroLuiz = new PersonagemArqueiro("Luiz", 4);
const arqueiroMagoChico = new PersonagemArqueiroMago("Chico", 10, "Ar", 4, 8);
const guerreiroDaniel = new PersonagemGuerreiro("Daniel", 7);

const personagens = [magoAntonio, magaJulia, arqueiroPaulo, arqueiroLuiz, arqueiroMagoChico, guerreiroDaniel];

new PersonagemView(personagens).render();