import { Carteira } from "./jogador/carteira.js";
import { desenhaJogador } from "./jogador/desenharJogador.js";
import { Jogador } from "./jogador/jogador.js";

let jogador1 = new Jogador(1, 'Zezinho', new Carteira(), "#004DFF");

desenhaJogador(jogador1);

