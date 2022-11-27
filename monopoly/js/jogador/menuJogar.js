import {dados} from '../dados/dados.js' 

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

    const propriedade = document.createElement('div');
    propriedade.classList.add('propriedade-atual');
    
    return corpo;
}

export {menuJogar}