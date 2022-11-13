/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function takeachance() {
			setTimeout(function () {
			var randomNumber1 = Math.floor(Math.random() * 16);
			var Image_Id = document.getElementById('card');
                        if (Image_Id.src  !== ""){
                             Image_Id.src = "";
                            }
                         if (randomNumber1 === 0){
                             Image_Id.src = "imagens/Chancecard1.png";
                            }
                            if (randomNumber1 === 1){
                                Image_Id.src = "imagens/Chancecard2.png";
                            }
                            if (randomNumber1 === 2){
                            Image_Id.src = "imagens/Chancecard3.png";
                            }
                            if (randomNumber1 === 3){
                            Image_Id.src = "imagens/Chancecard4.png";    
                            }
                            if (randomNumber1 === 4){
                            Image_Id.src = "imagens/Chancecard5.png";
                            }
                            if (randomNumber1 === 5 || randomNumber1 === 16){
                            Image_Id.src = "imagens/Chancecard6.png";
                            }
                            if (randomNumber1 === 6){
                           Image_Id.src = "imagens/Chancecard7.png";
                            }
                            if (randomNumber1 === 7){
                            Image_Id.src = "imagens/Chancecard8.png";
                            }
                            if (randomNumber1 === 8){
                            Image_Id.src = "imagens/Chancecard9.png";
                            }
                            if (randomNumber1 === 9){
                            Image_Id.src = "imagens/Chancecard10.png";
                            }
                            if (randomNumber1 === 10){
                            Image_Id.src = "imagens/Chancecard11.png";
                            }
                            if (randomNumber1 === 11){
                            Image_Id.src = "imagens/Chancecard12.png";
                            }
                            if (randomNumber1 === 12){
                            Image_Id.src = "imagens/Chancecard13.png";
                            }
                            if (randomNumber1 === 13){
                            Image_Id.src = "imagens/Chancecard14.png";
                            }
                            if (randomNumber1 === 14){
                            Image_Id.src = "imagens/Chancecard15.png";
                            }
                            

			}, 2500);
		}
