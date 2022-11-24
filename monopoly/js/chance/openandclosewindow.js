/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var window;
function openandclosewindow(posicao) {
 this.posicao=integer(); 
 if(posicao===8){
window.window.open(
"chancecard8.html",
"chancecard", "width=300, height=350");
setTimeout("window.close()",3000) ;
 }
  if(posicao===23){
window.window.open(
"chancecard.html",
"chancecard23", "width=300, height=350");
setTimeout("window.close()",3000) ;
 }
  if(posicao===37){
window.window.open(
"chancecard37.html",
"chancecard", "width=300, height=350");
setTimeout("window.close()",3000) ;
 }
}
export {openandclosewindow};

