import {dados} from '../dados.js' 

function menuJogar(){
    const corpo = document.createElement('div');;
    corpo.classList.add('menu-jogar');
    const dadosContainer = dados();
    corpo.appendChild(dadosContainer);
    const propriedade = document.createElement('div');
    propriedade.classList.add('propriedade-atual');
    
    return corpo;
}

export {menuJogar}