/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


		// Function to roll the dice
		function rollTheDice() {
			alert('hey!');
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

export{rollTheDice}