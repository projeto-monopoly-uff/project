import {dados, rolarDados} from './dados/dados.js'
import {menuJogador} from './jogador/menuJogador.js'
import {Jogador} from './jogador/jogador.js'
import { Carteira } from './jogador/carteira.js';
import {moverToken} from './marcador/popup-jogadores.js'
import { propriedades } from './propriedades.js';

import {baralhochance, sortearBaralho} from './chance/chancecard.js'


/*
$('#centro').append('<div id=conteudo-centro> </div>');
$('#conteudo-centro').append('<div id="conteudo-centro-cima"> </div>')
$('#conteudo-centro-cima').append('<iframe title="Menu do Jogador da vez" id="frame-menu-jogador" src="menu-jogador.html"> </iframe>');
console.log($('#frame-menu-jogador').contents().find('#menu-jogador'));
$('#conteudo-centro').append('<div id="conteudo-centro-baixo"> </div>')
$('#conteudo-centro-baixo').append('<iframe title="Lista de Jogadores" id="frame-lista-jogadores" src="lista-de-jogadores.html"> </iframe>');
*/


function iniciarJogo(jogadores) {

    /* Desenha o menu na tela do jogador */
    const centro = document.querySelector('#centro');
    const conteudoCentro = document.createElement('div');
    conteudoCentro.id ='conteudo-centro';
    const menu = menuJogador();
    conteudoCentro.appendChild(menu);
    centro.appendChild(conteudoCentro);

    const popup = document.querySelector('#jogadores-celula-20');
    popup.classList.add('show');
    const div = document.createElement('div');
    div.classList.add('marcador-jogador-1');
    popup.appendChild(div);
}

function compraPropriedade(){
    
    propriedades.compraProp();

}

function dispararMovimento(){
    const jogadorId = document.getElementById('id-jogador-turno').textContent;
    //console.log(jogadorId);
    const jogador = jogadores.find(i => i.id == jogadorId);
    //console.log(jogador);
    const resultadoDados = rolarDados();
    //console.log(resultadoDados);
    jogador.mover(resultadoDados);
    //console.log(jogador);
    //console.log(jogador.posicao);

    if(resultadodosDados===8 ||resultadodosDados===23 || resultadodosDados===37){
    stateHandlechance();
    }
 if(resultadodosDados===3 ||resultadodosDados===18 || resultadodosDados===34){
    stateHandlecommunitychest();
    }
    moverToken(jogador);
}
function dispararchanceMovimento(casas){
    const jogadorId = document.getElementById('id-jogador-turno').textContent;
    //console.log(jogadorId);
    const jogador = jogadores.find(i => i.id == jogadorId);
    //console.log(jogador);
    //console.log(resultadoDados);
    jogador.mover(casas);
    //console.log(jogador);
    //console.log(jogador.posicao);

    moverToken(jogador);
}


const centro = document.querySelector('#centro');
const conteudoCentro = document.createElement('div');
conteudoCentro.id ='conteudo-centro';
const menu = menuJogador();
conteudoCentro.appendChild(menu);
centro.appendChild(conteudoCentro);
const jogador = new Jogador(1, 'José', new Carteira(), '#FFF');
jogador.moverAbsoluto(1);
moverToken(jogador);



const idJogador = document.getElementById('id-jogador-turno');
idJogador.innerText = jogador.id;


const body = document.querySelector('body');

const jogadores = [jogador];

const botaoRolarDados = document.getElementById('botao-rolar-dados');

const botaoComprar = document.getElementById('botao-comprar');

//botaoRolarDados.addEventListener('click', dispararMovimento(jogador));
botaoRolarDados.onclick = function () {
    dispararMovimento();
}
console.log(botaoRolarDados.onclick);

botaoComprar.onclick = function () {
    compraPropriedade();
}
console.log(botaoRolarDados.onclick);

botaoEscolherCartas.onclick = function () {
    sortearBaralho(Jogador);
}
console.log(botaoEscolherCartas.onclick);

botaoSortearCartas.onclick = function () {
    sortearCartas(Jogador);
}
console.log(botaoSortearCartas.onclick);

botaoEscolherCartas.disabled = true;
function stateHandlechance() {
    botaoEscolherCartas.disabled = false;
}

botaoSortearCartas.disabled = true;
function stateHandlecommunitychest() {
    botaoSortearCartas.disabled = false;
}
function disablechance() {
    botaoEscolherCartas.disabled = true;
}
function disablecommunitychest() {
    botaoSortearCartas.disabled = true;
}









