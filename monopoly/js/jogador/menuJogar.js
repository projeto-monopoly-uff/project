
import {dados} from '../dados/dados.js'
import {baralhochance} from './chance/chancecard.js' 
import {Jogador} from './jogador.js'


function menuJogar(){
    const corpo = document.createElement('div');;
    corpo.classList.add('menu-jogar');
    const dadosContainer = dados();
    corpo.appendChild(dadosContainer);

    const rollButton = document.createElement('button');
    rollButton.type = 'button';
    rollButton.classList.add('butn');
    rollButton.id = 'botao-rolar-dados';
    rollButton.innerText = 'Rolar os dados';
    corpo.appendChild(rollButton);

   
    const rollButtontwo = document.createElement('button');
    rollButtontwo.type = 'button';
    rollButtontwo.classList.add('butn');
    rollButtontwo.id = 'botao-sortear-cartas';
    rollButtontwo.innerText = 'Sortear as cartas chance';
    corpo.appendChild(rollButtontwo);
    
    const rollButtonthree = document.createElement('button');
    rollButtonthree.type = 'button';
    rollButtonthree.classList.add('butn');
    rollButtonthree.id = 'botao-sortear-cartas';
    rollButtonthree.innerText = 'Sortear as cartas community chest';
    corpo.appendChild(rollButtonthree);

    var NotProp = [1,3,5,8,11,18,21,23,31,34,37,39];

    if (NotProp.includes(Jogador.contaPosicao) == false){
    const rollButtonfour = document.createElement('button');
    rollButtonfour.type = 'button';
    rollButtonfour.classList.add('butn');
    rollButtonfour.id = 'botao-comprar';
    rollButtonfour.innerText = 'Comprar propriedade';
    corpo.appendChild(rollButtonfour);
    }

    const propriedade = document.createElement('div');
    propriedade.classList.add('propriedade-atual');
    
    return corpo;
}

export {menuJogar}