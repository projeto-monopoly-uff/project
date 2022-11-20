function menuJogador(){
    $('#centro').append('<div class="menu-jogador"> </div>');
    $('menu-jogador'.append('<h3 class="titulo-jogador menu-principal"> </h3>'))
    
}
$('#centro').append('<div id=conteudo-centro> </div>');
$('#conteudo-centro').append("<object name='foo' type='text/html' data='diceview.html' id='dados'></object>")
$('#conteudo-centro').append('<iframe title="Menu do Jogador da vez" id="frame-menu-jogador" src="menu-jogador.html"> </iframe>');