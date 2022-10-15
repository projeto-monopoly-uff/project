/*$(document).ready(function(){
    for(i = 1; i++; i <= 11){
        //$("insert-here").append(`<div class="grid-item first">${i}</div>`);
    }
}) */
for(var i = 1; i < 12; i++){
    for(var j = 1; j < 12; j++){
        if(i == 1 || i == 11){
            $(".grid-container").append(`<div class="grid-item limit-row">${i}</div>`);
        } else {
            if(j == 1 || j == 11){
                $(".grid-container").append(`<div class="grid-item limit-col">${i}</div>`);
            } else if(i == 2 && j == 2) {
                $(".grid-container").append(`<div class="grid-item center">"Center"</div>`);
            }
        }
    }
}