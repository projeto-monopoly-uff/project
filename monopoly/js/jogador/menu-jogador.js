import {dados} from '../dados.js'
import {menuJogador} from './menuJogador.js'


/*
$('#centro').append('<div id=conteudo-centro> </div>');
$('#conteudo-centro').append('<div id="conteudo-centro-cima"> </div>')
$('#conteudo-centro-cima').append('<iframe title="Menu do Jogador da vez" id="frame-menu-jogador" src="menu-jogador.html"> </iframe>');
console.log($('#frame-menu-jogador').contents().find('#menu-jogador'));
$('#conteudo-centro').append('<div id="conteudo-centro-baixo"> </div>')
$('#conteudo-centro-baixo').append('<iframe title="Lista de Jogadores" id="frame-lista-jogadores" src="lista-de-jogadores.html"> </iframe>');
*/

const centro = document.querySelector('#centro');
const conteudoCentro = document.createElement('div');
conteudoCentro.id ='conteudo-centro';
const menu = menuJogador();
conteudoCentro.appendChild(menu);
centro.appendChild(conteudoCentro);
const popup = document.querySelector('#celula20 .popup');
console.log(popup);
popup.innerHTML = '<p> aaaa </p>';
popup.classList.add("show");