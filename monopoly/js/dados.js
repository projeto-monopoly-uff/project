function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "imagens/Dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "imagens/Dice" + randomNumber2 + ".png");

        var sum = randomNumber1 + randomNumber2;
                        document.getElementById("sum").value = sum;
    }, 2500);
}

function dados(){
    //const conteudo = document.createElement('div');

    const majorContainer = document.createElement('div')
    majorContainer.classList.add('dice-major-container');
    
    const container1 = document.createElement('container');
    container1.classList.add('dice-container');

    const container1Title = document.createElement('h1');
    container1Title.innerText = "Let's play";
    container1.appendChild(container1Title);

    const firstDice = document.createElement('div');
    firstDice.classList.add('dice');
    firstDice.innerHTML = '<img class="dice-img img2" src="imagens/Dice6.png">'
    container1.appendChild(firstDice);

    const secondDice = document.createElement('div');
    secondDice.classList.add('dice');
    secondDice.innerHTML = '<img class="dice-img img1" src="imagens/Dice6.png">';
    container1.appendChild(secondDice);
    
    const container2 = document.createElement('container');
    container2.classList.add('dice-container');

    const rollButton = document.createElement('button');
    rollButton.type = 'button';
    rollButton.classList.add('butn');
    rollButton.addEventListener('click', rollTheDice);
    rollButton.innerText = 'Rolar os dados';

    container2.appendChild(rollButton);
    container2.appendChild(document.createElement('br'));
    container2.appendChild(document.createElement('br'));

    const input = document.createElement('input');
    input.classList.add('result');
    input.id = 'sum';
    input.readOnly = true;

    container2.appendChild(input);
    container2.appendChild(document.createElement('br'));
    container2.appendChild(document.createElement('br'));

    majorContainer.appendChild(container1);
    majorContainer.appendChild(container2);
    return majorContainer;
}

export {dados};