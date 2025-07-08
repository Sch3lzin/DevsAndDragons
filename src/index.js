import { Personagem } from "./models/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { PersonagemMago } from "./models/mago.js";
import { PersonagemArqueiro } from "./models/arqueiro.js";
import { PersonagemArqueiroMago } from "./models/arqueiro-mago.js";

const magoAntonio = new PersonagemMago("Antonio", 4, "Fogo", 4, 3);
const magaJulia = new PersonagemMago("Julia", 8 , "Gelo", 7, 10);
const arqueiroPaulo = new PersonagemArqueiro("Paulo", 6, 6);
const arqueiroLuiz = new PersonagemArqueiro("Luiz", 4, 4);
const arqueiroMagoChico = new PersonagemArqueiroMago("Chico", 7, 10, "Ar", 4, 8);

const personagens = [magoAntonio, magaJulia, arqueiroPaulo, arqueiroLuiz, arqueiroMagoChico];

new PersonagemView(personagens).render();