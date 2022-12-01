function listaDeJogadores(jogadores = []){
    const conteudoLista = $('#frame-lista-jogadores').contents();
    //conteudoLista.find()
    jogadores.forEach(function(jogador, indice){
        const idJogador = `jogador-${indice + 1}`;
        conteudoLista.find('#lista-jogadores-container').append(`<div class="lista-jogadores-item" id="${idJogador}"> </div>`);
        conteudoLista.find(`#${idJogador}`).append(`<p class="nome-jogador"> ${jogador.nome} </p>`);
    }); 
}

export {listaDeJogadores}