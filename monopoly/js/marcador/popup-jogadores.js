import {Jogador} from '../jogador/jogador.js'

function removerToken(jogador){
    //console.log(jogador);
    const marcadorAtual = document.querySelector('#marcador-jogador-' + jogador.id);
    console.log(marcadorAtual);
    if(marcadorAtual != null){
        const popupJogadores = marcadorAtual.parentElement;
        marcadorAtual.remove();
        if(popupJogadores.hasChildNodes() == false){
            popupJogadores.classList.remove('show');
        } 
    }
    
}

function adicionarToken(jogador){

    const id = '#jogadores-celula-' + jogador.posicao;
    const popupJogadores = document.querySelector(id);
    console.log(jogador.posicao);
    //console.log(popupJogadores);
    /* Faz o popup aparecer caso não haja nenhum jogador na celula*/
    //console.log(popupJogadores);
    
    if(popupJogadores.hasChildNodes() == false){
        popupJogadores.classList.add('show');
    }

    /* Adiciona o jogador a celula */
    
    const marcadorJogador = document.createElement('div');
    marcadorJogador.classList.add('marcador-jogador');
    marcadorJogador.style.backgroundColor = jogador.cor;
    marcadorJogador.id = `marcador-jogador-${jogador.id}`;
    popupJogadores.appendChild(marcadorJogador);
    
}

/** 
 * Move o token do jogador na tela, apagando o token antigo e adicionando o novo na posição informada.
 * */ 
function moverToken(jogador){
    removerToken(jogador);
    adicionarToken(jogador);
}

export {moverToken};