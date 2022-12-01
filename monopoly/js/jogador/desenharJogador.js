import {Jogador} from './jogador.js'
function desenhaJogador(jogador){
    const posicao = jogador.posicao;
    const id_token = `token-jogador-${jogador.id}`;
    $(`#celula${posicao}anchor`).append(`<div id=${id_token} class="token-jogador" style="background-color: ${jogador.cor}"> </div>`);
}

export {desenhaJogador};