function Celula(nome, precotexto, cor, preco, groupNumber, baserent, aluguel1, aluguel2, aluguel3, aluguel4, aluguel5) {
    this.nome = nome;
    this.precotexto = precotexto;
    this.cor = cor;
    this.donos = 0;
    this.hipoteca = false;
    this.casa = 0;
    this.hotel = 0;
    this.groupNumber = groupNumber || 0;
    this.preco = (preco || 0);
    this.baserent = (baserent || 0);
    this.aluguel1 = (aluguel1 || 0);
    this.aluguel2 = (aluguel2 || 0);
    this.aluguel3 = (aluguel3 || 0);
    this.aluguel4 = (aluguel4 || 0);
    this.aluguel5 = (aluguel5 || 0);
    this.landcount = 0;
}

var celula = [];

celula[1] = new Celula("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
celula[2] = new Celula("Mediterranean Avenue", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
celula[3] = new Celula("Community Chest", "", "#FFFFFF");
celula[4] = new Celula("Baltic Avenue", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
celula[5] = new Celula("City Tax", "Pay $200", "#FFFFFF");
celula[6] = new Celula("Reading Railroad", "$200", "#FFFFFF", 200, 1);
celula[7] = new Celula("Oriental Avenue", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
celula[8] = new Celula("Chance", "", "#FFFFFF");
celula[9] = new Celula("Vermont Avenue", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
celula[10] = new Celula("Connecticut Avenue", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
celula[11] = new Celula("Just Visiting", "", "#FFFFFF");
celula[12] = new Celula("St. Charles Place", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
celula[13] = new Celula("Electric Company", "$150", "#FFFFFF", 150, 2);
celula[14] = new Celula("States Avenue", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
celula[15] = new Celula("Virginia Avenue", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
celula[16] = new Celula("Pennsylvania Railroad", "$200", "#FFFFFF", 200, 1);
celula[17] = new Celula("St. James Place", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
celula[18] = new Celula("Community Chest", "", "#FFFFFF");
celula[19] = new Celula("Tennessee Avenue", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
celula[20] = new Celula("New York Avenue", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
celula[21] = new Celula("Free Parking", "", "#FFFFFF");
celula[22] = new Celula("Kentucky Avenue", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
celula[23] = new Celula("Chance", "", "#FFFFFF");
celula[24] = new Celula("Indiana Avenue", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
celula[25] = new Celula("Illinois Avenue", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
celula[26] = new Celula("B&O Railroad", "$200", "#FFFFFF", 200, 1);
celula[27] = new Celula("Atlantic Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
celula[28] = new Celula("Ventnor Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
celula[29] = new Celula("Water Works", "$150", "#FFFFFF", 150, 2);
celula[30] = new Celula("Marvin Gardens", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
celula[31] = new Celula("Go to Jail", "", "#FFFFFF");
celula[32] = new Celula("Pacific Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
celula[33] = new Celula("North Carolina Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
celula[34] = new Celula("Community Chest", "", "#FFFFFF");
celula[35] = new Celula("Pennsylvania Avenue", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
celula[36] = new Celula("Short Line", "$200", "#FFFFFF", 200, 1);
celula[37] = new Celula("Chance", "", "#FFFFFF");
celula[38] = new Celula("Park Place", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
celula[39] = new Celula("LUXURY TAX", "Pay $100", "#FFFFFF");
celula[40] = new Celula("Boardwalk", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var celulaAtual;
var celulaAtualAnchor;
var celulaAtualPositionHolder;
var celulaAtualcor;
var celulaAtualNome;
var celulaAtualPreco;
var celulaAtualDono;
var celulaAtualImagem;

var centro = document.getElementById("centro").appendChild(document.createElement("div"));;
centro.innerHTML = "<img src='imagens/monopoly_logo.png'/>";

//For para atribuir a informações a cada quadrado do grid
for (var i = 1; i <= 40; i++) {
    quadrado = celula[i];

    //Pegando a celula atual
    celulaAtual = document.getElementById("celula" + i);

    celulaAtualAnchor = celulaAtual.appendChild(document.createElement("div"));
    celulaAtualAnchor.id = "celula" + i + "anchor";
    celulaAtualAnchor.className = "celula-anchor";

    celulaAtualPositionHolder = celulaAtualAnchor.appendChild(document.createElement("div"));
    celulaAtualPositionHolder.id = "celula" + i + "positionholder";
    celulaAtualPositionHolder.className = "celula-position-holder";
    //celulaAtualPositionHolder.enlargeId = "enlarge" + i;

    //HTML += "<div id='enlarge" + i + "color' class='enlarge-color'></div>";

    //Passando cor da celula
    celulaAtualcor = celulaAtualAnchor.appendChild(document.createElement("div"));
    celulaAtualcor.id = "celula" + i + "cor";
    celulaAtualcor.className = "celula-cor";
    celulaAtualcor.innerHTML = "<div id='enlarge" + i + "color' class='enlarge-color'></div>";
    document.getElementById("enlarge" + i + "color").style.backgroundColor = quadrado.cor;

    //Colocando ícones nos quadrados
    //Início
    if (i == 1) {
        celulaAtualImagem = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualImagem.innerHTML = "<img src='imagens/arrow_icon.png'/>";
    }
    //Just Visiting
    if (i == 11) {
        celulaAtualImagem = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualImagem.innerHTML = "<img src='imagens/jake_icon.png'/>";
    }
    //Community Chest
    else if (i == 3 || i == 18 || i == 34) {
        celulaAtualImagem = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualImagem.innerHTML = "<img src='imagens/community_chest_icon.png'/>";
    }
    //Trem do Reading Railroad
    else if (i == 6 || i == 16 || i == 26 || i == 36) {
        celulaAtualImagem = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualImagem.innerHTML = "<img src='imagens/train_icon.png'/>";
    }
    //Chance
    else if (i == 8 || i == 23 || i == 37) {
        celulaAtualImagem = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualImagem.innerHTML = "<img src='imagens/chance_icon.png'/>";
    }
    //Electric Company
    else if (i == 13) {
        celulaAtualImagem = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualImagem.innerHTML = "<img src='imagens/electric_icon.png'/>";
    }
    //Free Parking
    else if (i == 21) {
        celulaAtualImagem = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualImagem.innerHTML = "<img src='imagens/free_parking_icon.png'/>";
    }
    //Water Works
    else if (i == 29) {
        celulaAtualImagem = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualImagem.innerHTML = "<img src='imagens/water_icon.png'/>";
    }
    //Go to jail
    else if (i == 31) {
        celulaAtualImagem = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualImagem.innerHTML = "<img src='imagens/police_icon.png'/>";
    }
    //Luxury Tax
    else if (i == 39) {
        celulaAtualImagem = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualImagem.innerHTML = "<img src='imagens/tax_icon.png'/>";
    }

    //Passando nome da celula
    celulaAtualNome = celulaAtualAnchor.appendChild(document.createElement("div"));
    celulaAtualNome.id = "celula" + i + "nome";
    celulaAtualNome.className = "celula-nome";
    celulaAtualNome.textContent = quadrado.nome;

    //Passando preco da celula
    celulaAtualPreco = celulaAtualAnchor.appendChild(document.createElement("div"));
    celulaAtualPreco.textContent = quadrado.precotexto;

    //Passando donos da celula
    if (celula[i].groupNumber) {
        celulaAtualDono = celulaAtualAnchor.appendChild(document.createElement("div"));
        celulaAtualDono.id = "celula" + i + "dono";
        celulaAtualDono.className = "celula-dono";
    }
}