function opcoesJogador(){
    const opcoesContainer = document.createElement('opcoes-jogador-container');
    const opcoes = document.createElement('ul');
    opcoes.classList.add('opcoes-jogador');
    
    const opcao = document.createElement('li');
    opcao.classList.add('opcao-jogador');
    const textoOpcao = document.createElement('a');
    textoOpcao.href = "";
    textoOpcao.classList.add('texto-opcao-jogador');
    textoOpcao.classList.add('texto-menu');
    opcao.appendChild(textoOpcao);

    const opcao1 = opcao.cloneNode(true);
    opcao1.id = "op-1";
    const opcao2 = opcao.cloneNode(true);
    opcao2.id = "op-2";
    const opcao3 = opcao.cloneNode(true);
    opcao3.id = "op-3";

    const textoOp1 = opcao1.firstChild;
    textoOp1.id = 'op-jogar';
    textoOp1.innerText = 'Jogar';

    const textoOp2 = opcao2.firstChild;
    textoOp2.id = 'op-admnistrar';
    textoOp2.innerText = 'Admnistrar';

    const textoOp3 = opcao3.firstChild;
    textoOp3.id = 'op-vender';
    textoOp3.innerText = 'Vender';

    opcoes.appendChild(opcao1);
    opcoes.appendChild(opcao2);
    opcoes.appendChild(opcao3);

    opcoesContainer.appendChild(opcoes);
    return opcoesContainer;
}

export {opcoesJogador}