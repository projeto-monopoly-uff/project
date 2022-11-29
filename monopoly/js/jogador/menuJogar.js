import {dados} from '../dados/dados.js'
import {baralhochance} from './chance/chancecard.js' 

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

    const propriedade = document.createElement('div');
    propriedade.classList.add('propriedade-atual');
    
    return corpo;
}

export {menuJogar}