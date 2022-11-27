import { Carteira } from "./jogador/carteira.js";
import { desenhaJogador } from "./jogador/desenharJogador.js";
import { Jogador } from "./jogador/jogador.js";
import { listaDeJogadores } from "./jogador/lista-de-jogadores.js";
const jogador1 = new Jogador(1, 'Joãozinho', new Carteira(), '#e600ac');
const jogador2 = new Jogador(2, 'Zézão', new Carteira(), '#009933');
const jogador3 = new Jogador(3, 'Julia', new Carteira(), '#0099ff');

listaDeJogadores([jogador1, jogador2, jogador3]);



