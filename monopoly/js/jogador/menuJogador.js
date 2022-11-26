import {opcoesJogador} from './opcoesJogador.js'
import {menuJogar} from './menuJogar.js'

function menuJogador(){
    const menu = document.createElement('div');
    menu.classList.add('menu-jogador');
    const opcoes = opcoesJogador(); 
    menu.appendChild(opcoes);
    const corpo = menuJogar();
    menu.appendChild(corpo);
    return menu;
}

export {menuJogador}