"use strict";

//main.js

var teste_orc;

var selecionado = 0;
var variavel_comparacao_two;

var variavel_comparacao;
var variavel_comparacao_two;

var repeat_listaPos = [];
var repeat_listaImg = [];


var selecionado_repeat = 0;

var modificadorC1R = window.document.querySelector('#carta1Repeat');

var modificadorC2R = window.document.querySelector('#carta2Repeat');

var modificadorC3R = window.document.querySelector('#carta3Repeat');

var modificadorC4R = window.document.querySelector('#carta4Repeat');

var Imagem01R = new Image(200, 300);
Imagem01R.src = './img/orc_img.jpg';

var Imagem02R = new Image(200, 300);
Imagem02R.src = './img/thief_img.jpg';

var Imagem03R = new Image(200, 300);
Imagem03R.src = './img/mage_img.jpg';

var Imagem04R = new Image(200, 300);
Imagem04R.src = './img/paladin_img.jpg';

var Image_default_Repeat = new Image(200, 300);
Image_default_Repeat.src = './img/fundo_carta.jpg';

var img_teste = new Image(200, 300);
img_teste.src = './img/Wattson_Img.jpg'

while(true){

    if(repeat_listaPos.length == 4 && repeat_listaImg.length == 4){
        break;
    }

    else{
        var rndCard_repeat = Math.floor(Math.random() * 4);
        while(true){
            let verificador = repeat_listaPos.find((elemento_em_lista) => elemento_em_lista == rndCard_repeat);

            if(verificador == undefined){
                repeat_listaPos.push(rndCard_repeat);
                break;
            }

            else{
                rndCard_repeat = Math.floor(Math.random() * 4);
            }   
        }
    
        var rndPictures_repeat = Math.floor(Math.random() * 4);
        while(true){
            let verificador = repeat_listaImg.find((elemento_em_lista) => elemento_em_lista == rndPictures_repeat);

            if(verificador == undefined){
                repeat_listaImg.push(rndPictures_repeat);
                break;
            }

            else{
                rndPictures_repeat = Math.floor(Math.random() * 4);
            }
        }

        if(rndCard_repeat == 0){
            var versionador0 = window.document.querySelector('#CardOneR');

            if(rndPictures_repeat == 0){
                versionador0.addEventListener('click', OrcCardOneRepeat);
            }

            else if(rndPictures_repeat == 1){
                versionador0.addEventListener('click', ThiefCardOneRepeat);
                
            }

            else if(rndPictures_repeat == 2){
                versionador0.addEventListener('click', MageCardOneRepeat);
            }

            else if(rndPictures_repeat == 3){
                versionador0.addEventListener('click', paladinCardOneRepeat);
            }
        }

        else if(rndCard_repeat == 1){
            
            var versionador1 = window.document.querySelector('#CardTwoR');

            if(rndPictures_repeat == 0){
                versionador1.addEventListener('click', OrcCardTwoRepeat);
            }

            else if(rndPictures_repeat == 1){
                versionador1.addEventListener('click', ThiefCardTwoRepeat);
                
            }

            else if(rndPictures_repeat == 2){
                versionador1.addEventListener('click', MageCardTwoRepeat);
            }

            else if(rndPictures_repeat == 3){
                versionador1.addEventListener('click', paladinCardTwoRepeat);
            }
        }

        else if(rndCard_repeat == 2){
            var versionador2 = window.document.querySelector('#CardThreeR');
            if(rndPictures_repeat == 0){
                versionador2.addEventListener('click', OrcCardThreeRepeat);
            }

            else if(rndPictures_repeat == 1){
                versionador2.addEventListener('click', ThiefCardThreeRepeat);
                
            }

            else if(rndPictures_repeat == 2){
                versionador2.addEventListener('click', MageCardThreeRepeat);
            }

            else if(rndPictures_repeat == 3){
                versionador2.addEventListener('click', paladinCardThreeRepeat);
            }
        }


        //provavelmente ira dar erro!
        else
        {
            var versionador3 = window.document.querySelector('#CardFourR');
            if(rndPictures_repeat == 0){
                versionador3.addEventListener('click', OrcCardFourRepeat);
            }
        
            else if(rndPictures_repeat == 1){
                versionador3.addEventListener('click', ThiefCardFourRepeat);
                    
            }
        
            else if(rndPictures_repeat == 2){
                versionador3.addEventListener('click', MageCardFourRepeat);
            }
        
            else if(rndPictures_repeat == 3){
                versionador3.addEventListener('click', paladinCardFourRepeat);
            }
        }
    }
}

console.log(repeat_listaPos);
console.log(repeat_listaImg);

function OrcCardOneRepeat(){
    if(selecionado_repeat == 0){
        selecionado_repeat = 1;
        modificadorC1R.src = Imagem01R.src;
        modificadorC1R.style.transform = 'rotateY(180deg)';
    }

    else{
        if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';
            selecionado_repeat = 1;

            modificadorC1R.src = Imagem01R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }

        else if(selecionado_repeat == 3){
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            selecionado_repeat = 1;
            modificadorC1R.src = Imagem01R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }

        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            selecionado_repeat = 1;

            modificadorC1R.src = Imagem01R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }
    }
    variavel_comparacao_two = 'Orc';

    teste_orc++;
}

function ThiefCardOneRepeat(){
    if(selecionado_repeat == 0){
        selecionado_repeat = 1;
        modificadorC1R.src = Imagem02R.src;
        modificadorC1R.style.transform = 'rotateY(180deg)';
    }

    else{
        if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';
            selecionado_repeat = 1;

            modificadorC1R.src = Imagem02R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }

        else if(selecionado_repeat == 3){
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            selecionado_repeat = 1;
            modificadorC1R.src = Imagem02R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }

        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            selecionado_repeat = 1;

            modificadorC1R.src = Imagem02R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }
    }

    variavel_comparacao_two = 'Thief';
}

function MageCardOneRepeat(){
    if(selecionado_repeat == 0){
        selecionado_repeat = 1;
        modificadorC1R.src = Imagem03R.src;
        modificadorC1R.style.transform = 'rotateY(180deg)';
    }

    else{
        if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';
            selecionado_repeat = 1;

            modificadorC1R.src = Imagem03R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }

        else if(selecionado_repeat == 3){
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            selecionado_repeat = 1;
            modificadorC1R.src = Imagem03R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }

        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            selecionado_repeat = 1;

            modificadorC1R.src = Imagem03R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }
    }
    variavel_comparacao_two = 'Mage';
}

function paladinCardOneRepeat(){
    if(selecionado_repeat == 0){
        selecionado_repeat = 1;
        modificadorC1R.src = Imagem04R.src;
        modificadorC1R.style.transform = 'rotateY(180deg)';
    }

    else{
        if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';
            selecionado_repeat = 1;

            modificadorC1R.src = Imagem04R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }

        else if(selecionado_repeat == 3){
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            selecionado_repeat = 1;
            modificadorC1R.src = Imagem04R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }

        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            selecionado_repeat = 1;

            modificadorC1R.src = Imagem04R.src;
            modificadorC1R.style.transform = 'rotateY(180deg)';
        }
    }
    variavel_comparacao_two = 'paladin';
}

function OrcCardTwoRepeat(){

    if(selecionado_repeat == 0){
        modificadorC2R.src = Imagem01R.src;
        modificadorC2R.style.transform = 'rotateY(180deg)';

        selecionado_repeat = 2;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem01R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }

        else if(selecionado_repeat == 3){
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem01R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }
        
        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem01R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }
    }
    variavel_comparacao_two = 'Orc';
    teste_orc++;
}

function ThiefCardTwoRepeat() {
    if(selecionado_repeat == 0){
        modificadorC2R.src = Imagem02R.src;
        modificadorC2R.style.transform = 'rotateY(180deg)';

        selecionado_repeat = 2;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem02R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }

        else if(selecionado_repeat == 3){
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem02R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }
        
        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem02R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }
    }
    variavel_comparacao_two = 'Thief';
}

function MageCardTwoRepeat() {
    if(selecionado_repeat == 0){
        modificadorC2R.src = Imagem03R.src;
        modificadorC2R.style.transform = 'rotateY(180deg)';

        selecionado_repeat = 2;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem03R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }

        else if(selecionado_repeat == 3){
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem03R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }
        
        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem03R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }
    }

    variavel_comparacao_two = 'Mage';
}

function paladinCardTwoRepeat(){
    if(selecionado_repeat == 0){
        modificadorC2R.src = Imagem04R.src;
        modificadorC2R.style.transform = 'rotateY(180deg)';

        selecionado_repeat = 2;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem04R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }

        else if(selecionado_repeat == 3){
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem04R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }
        
        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            modificadorC2R.src = Imagem04R.src;
            modificadorC2R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 2;
        }
    }
    variavel_comparacao_two = 'paladin';
}

function OrcCardThreeRepeat(){
    if(selecionado_repeat == 0){
        modificadorC3R.src = Imagem01R.src;
        modificadorC3R.style.transform = 'rotateY(180deg)';

        selecionado_repeat = 3;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';
            
            modificadorC3R.src = Imagem01R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }

        else if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';

            modificadorC3R.src = Imagem01R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }

        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            modificadorC3R.src = Imagem01R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }
    }
    variavel_comparacao_two = 'Orc';
    teste_orc++;
}

function ThiefCardThreeRepeat() {
    if(selecionado_repeat == 0){
        modificadorC3R.src = Imagem02R.src;
        modificadorC3R.style.transform = 'rotateY(180deg)';

        selecionado_repeat = 3;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';
            
            modificadorC3R.src = Imagem02R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }

        else if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';

            modificadorC3R.src = Imagem02R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }

        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            modificadorC3R.src = Imagem02R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }
    }
    variavel_comparacao_two = 'Thief';
}

function MageCardThreeRepeat() {
    if(selecionado_repeat == 0){
        modificadorC3R.src = Imagem03R.src;
        modificadorC3R.style.transform = 'rotateY(180deg)';

        selecionado_repeat = 3;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';
            
            modificadorC3R.src = Imagem03R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }

        else if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';

            modificadorC3R.src = Imagem03R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }

        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            modificadorC3R.src = Imagem03R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }
    }
    variavel_comparacao_two = 'Mage';
}

function paladinCardThreeRepeat(){
    if(selecionado_repeat == 0){
        modificadorC3R.src = Imagem04R.src;
        modificadorC3R.style.transform = 'rotateY(180deg)';

        selecionado_repeat = 3;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';
            
            modificadorC3R.src = Imagem04R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }

        else if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';

            modificadorC3R.src = Imagem04R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }

        else{
            modificadorC4R.src = Image_default_Repeat.src;
            modificadorC4R.style.transform = 'rotateY(0deg)';

            modificadorC3R.src = Imagem04R.src;
            modificadorC3R.style.transform = 'rotateY(180deg)';

            selecionado_repeat = 3;
        }
    }
    variavel_comparacao_two = 'paladin';
}

function OrcCardFourRepeat(){
    if(selecionado_repeat == 0){
        modificadorC4R.src = Imagem01R.src;
        modificadorC4R.style.transform = 'rotateY(180deg)';
        selecionado_repeat = 4;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem01R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }

        else if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem01R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }

        else{
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem01R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }
    }
    variavel_comparacao_two = 'Orc';
    teste_orc++;
}

function ThiefCardFourRepeat() {
    if(selecionado_repeat == 0){
        modificadorC4R.src = Imagem02R.src;
        modificadorC4R.style.transform = 'rotateY(180deg)';
        selecionado_repeat = 4;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem02R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }

        else if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem02R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }

        else{
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem02R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }
    }
    variavel_comparacao_two = 'Thief';
}

function MageCardFourRepeat() {
    if(selecionado_repeat == 0){
        modificadorC4R.src = Imagem03R.src;
        modificadorC4R.style.transform = 'rotateY(180deg)';
        selecionado_repeat = 4;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem03R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }

        else if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem03R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }

        else{
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem03R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }
    }
    variavel_comparacao_two = 'Mage';
}

function paladinCardFourRepeat(){
    if(selecionado_repeat == 0){
        modificadorC4R.src = Imagem04R.src;
        modificadorC4R.style.transform = 'rotateY(180deg)';
        selecionado_repeat = 4;
    }

    else{
        if(selecionado_repeat == 1){
            modificadorC1R.src = Image_default_Repeat.src;
            modificadorC1R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem04R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }

        else if(selecionado_repeat == 2){
            modificadorC2R.src = Image_default_Repeat.src;
            modificadorC2R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem04R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }

        else{
            modificadorC3R.src = Image_default_Repeat.src;
            modificadorC3R.style.transform = 'rotateY(0deg)';

            modificadorC4R.src = Imagem04R.src;
            modificadorC4R.style.transform = 'rotateY(180deg)';
            selecionado_repeat = 4;
        }
    }
    variavel_comparacao_two = 'paladin';
}

const Lista = [];
const ListaTwo = [];

var imagem01 = new Image(200, 300);
imagem01.src = './img/orc_img.jpg';

var imagem02 = new Image(200, 300);
imagem02.src = './img/thief_img.jpg';

var imagem03 = new Image(200, 300);
imagem03.src = './img/mage_img.jpg';

var imagem04 = new Image(200, 300);
imagem04.src = './img/paladin_img.jpg';

var imagem_default = new Image(200, 300);
imagem_default.src = './img/fundo_carta.jpg';

var modificadorC1 = window.document.querySelector('#carta1');

var modificadorC2 = window.document.querySelector('#carta2');

var modificadorC3 = window.document.querySelector('#carta3');

var modificadorC4 = window.document.querySelector('#carta4');

while(true){

    if(Lista.length == 4 && ListaTwo.length == 4){
        break;
    }

    else{
        var rndCard = Math.floor(Math.random() * 4);
        while(true){
            let verificador = Lista.find((elemento_em_lista) => elemento_em_lista == rndCard);

            if(verificador == undefined){
                Lista.push(rndCard);
                break;
            }

            else{
                rndCard = Math.floor(Math.random() * 4);
                }   
        }
    
        var rndPictures = Math.floor(Math.random() * 4);
        while(true){
            let verificador = ListaTwo.find((elemento_em_lista) => elemento_em_lista == rndPictures);

            if(verificador == undefined){
                ListaTwo.push(rndPictures);
                break;
            }

            else{
                rndPictures = Math.floor(Math.random() * 4);
            }
        }

        if(rndCard == 0){
            var valor0 = window.document.querySelector('#CardOne');

            if(rndPictures == 0){
                valor0.addEventListener('click', OrcCardOne);
            }

            else if(rndPictures == 1){
                valor0.addEventListener('click', ThiefCardOne);
                
            }

            else if(rndPictures == 2){
                valor0.addEventListener('click', MageCardOne);
            }

            else if(rndPictures == 3){
                valor0.addEventListener('click', paladinCardOne);
            }
        }

        else if(rndCard == 1){
            
            var valor1 = window.document.querySelector('#CardTwo');

            if(rndPictures == 0){
                valor1.addEventListener('click', OrcCardTwo);
            }

            else if(rndPictures == 1){
                valor1.addEventListener('click', ThiefCardTwo);
                
            }

            else if(rndPictures == 2){
                valor1.addEventListener('click', MageCardTwo);
            }

            else if(rndPictures == 3){
                valor1.addEventListener('click', paladinCardTwo);
            }
        }

        else if(rndCard == 2){
            var valor2 = window.document.querySelector('#CardThree');
            if(rndPictures == 0){
                valor2.addEventListener('click', OrcCardThree);
            }

            else if(rndPictures == 1){
                valor2.addEventListener('click', ThiefCardThree);
                
            }

            else if(rndPictures == 2){
                valor2.addEventListener('click', MageCardThree);
            }

            else if(rndPictures == 3){
                valor2.addEventListener('click', paladinCardThree);
            }
        }


        //provavelmente ira dar erro!
        else
        {
            var valor3 = window.document.querySelector('#CardFour');
            if(rndPictures == 0){
                valor3.addEventListener('click', OrcCardFour);
            }
        
            else if(rndPictures == 1){
                valor3.addEventListener('click', ThiefCardFour);
                    
            }
        
            else if(rndPictures == 2){
                valor3.addEventListener('click', MageCardFour);
            }
        
            else if(rndPictures == 3){
                valor3.addEventListener('click', paladinCardFour);
            }
        }
    }
}

//Script.js


console.log(Lista);
console.log(ListaTwo);

function OrcCardOne(){
    if(selecionado == 0){
        modificadorC1.src = imagem01.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem01.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else if(selecionado == 3){
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem01.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem01.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }
    
    variavel_comparacao = 'Orc';
    teste_orc++;
}

function ThiefCardOne(){
    if(selecionado == 0){
        modificadorC1.src = imagem02.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem02.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else if(selecionado == 3){
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem02.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem02.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    variavel_comparacao = 'Thief';
}

function MageCardOne(){
    if(selecionado == 0){
        modificadorC1.src = imagem03.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem03.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else if(selecionado == 3){
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem03.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem03.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    variavel_comparacao = 'Mage';
}

function paladinCardOne(){
    if(selecionado == 0){
        modificadorC1.src = imagem04.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem04.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else if(selecionado == 3){
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem04.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC1.src = imagem04.src;
        modificadorC1.style.transform = 'rotateY(180deg)';
        selecionado = 1;
    }

    variavel_comparacao = 'paladin';
} 


function OrcCardTwo(){
    if(selecionado == 0){
        modificadorC2.src = imagem01.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem01.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else if(selecionado == 3){
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem01.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem01.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    variavel_comparacao = 'Orc';
    teste_orc++;
}

function ThiefCardTwo(){
    if(selecionado == 0){
        modificadorC2.src = imagem02.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem02.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else if(selecionado == 3){
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem02.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem02.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    variavel_comparacao = 'Thief';
}

function MageCardTwo(){
    if(selecionado == 0){
        modificadorC2.src = imagem03.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem03.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else if(selecionado == 3){
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem03.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem03.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    variavel_comparacao = 'Mage';
}

function paladinCardTwo(){
    if(selecionado == 0){
        modificadorC2.src = imagem04.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem04.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else if(selecionado == 3){
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem04.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC2.src = imagem04.src;
        modificadorC2.style.transform = 'rotateY(180deg)';
        selecionado = 2;
    }

    variavel_comparacao = 'paladin';
} 


function OrcCardThree(){
    if(selecionado == 0){
        modificadorC3.src = imagem01.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem01.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem01.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }
    
    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem01.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }
    variavel_comparacao = 'Orc';
    teste_orc++;
}

function ThiefCardThree(){
    if(selecionado == 0){
        modificadorC3.src = imagem02.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem02.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem02.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }
    
    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem02.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    variavel_comparacao = 'Thief';
}

function MageCardThree(){
    if(selecionado == 0){
        modificadorC3.src = imagem03.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem03.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem03.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }
    
    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem03.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    variavel_comparacao = 'Mage';
}

function paladinCardThree(){
    if(selecionado == 0){
        modificadorC3.src = imagem04.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem04.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem04.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }
    
    else{
        modificadorC4.src = imagem_default.src;
        modificadorC4.style.transform = 'rotateY(0deg)';

        modificadorC3.src = imagem04.src;
        modificadorC3.style.transform = 'rotateY(180deg)';
        selecionado = 3;
    }

    variavel_comparacao = 'paladin';
} 

function OrcCardFour(){
    if(selecionado == 0){
        modificadorC4.src = imagem01.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem01.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem01.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else {
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem01.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }  
    
    variavel_comparacao = 'Orc';
    teste_orc++;
}

function ThiefCardFour(){
    if(selecionado == 0){
        modificadorC4.src = imagem02.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem02.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem02.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else {
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem02.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }    

    variavel_comparacao = 'Thief';
}

function MageCardFour(){
    if(selecionado == 0){
        modificadorC4.src = imagem03.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem03.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem03.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else {
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem03.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }    

    variavel_comparacao = 'Mage';
}

function paladinCardFour(){
    if(selecionado == 0){
        modificadorC4.src = imagem04.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else if(selecionado == 1){
        modificadorC1.src = imagem_default.src;
        modificadorC1.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem04.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else if(selecionado == 2){
        modificadorC2.src = imagem_default.src;
        modificadorC2.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem04.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }

    else {
        modificadorC3.src = imagem_default.src;
        modificadorC3.style.transform = 'rotateY(0deg)';

        modificadorC4.src = imagem04.src;
        modificadorC4.style.transform = 'rotateY(180deg)';
        selecionado = 4;
    }    

    variavel_comparacao = 'paladin';
} 

//Rules

var contador;

const refresh = setInterval(() =>{
    if(variavel_comparacao == 'Orc' && variavel_comparacao_two == 'Orc'){
        if(modificadorC1.src == imagem01.src){
            modificadorC1.style.transform = 'rotateY(0deg)';
            const close = setInterval(() => {
                modificadorC1.style.display = 'none';
            },350);
            
        }
    
        else if(modificadorC2.src == imagem01.src){
            modificadorC2.style.transform = 'rotateY(0deg)';
            const close = setInterval(() => {
                modificadorC2.style.display = 'none';
            },350);
            
        }
    
        else if(modificadorC3.src == imagem01.src){
            modificadorC3.style.transform = 'rotateY(0deg)';
            const close = setInterval(() => {
                modificadorC3.style.display = 'none';
            },350);
            
        }
    
        else if(modificadorC4.src == imagem01.src){
            modificadorC4.style.transform = 'rotateY(0deg)';
            const close = setInterval(() => {
                modificadorC4.style.display = 'none';
            },350);
        }

        contador++;

        if(modificadorC1R.src == imagem01.src){
            const close = setInterval(() => {
                modificadorC1R.style.display = 'none';
            },350);

        }

        else if(modificadorC2R.src == imagem01.src){
            const close = setInterval(() => {
                modificadorC2R.style.display = 'none';
            },350);
        }

        else if(modificadorC3R.src == imagem01.src){
            const close = setInterval(() => {
                modificadorC3R.style.display = 'none';
            },350);
        }

        else if(modificadorC4R.src == imagem01.src){
            const close = setInterval(() => {
                modificadorC4R.style.display = 'none';
            },350);
        }

        variavel_comparacao_two = null;
        selecionado_repeat = 0;
        variavel_comparacao = null;
        selecionado = 0;
    }

    else if(variavel_comparacao == 'Thief' && variavel_comparacao_two == 'Thief'){
        if(modificadorC1.src == imagem02.src){
            modificadorC1.style.transform = 'rotateY(0deg)';
            const close = setInterval(() =>{
                modificadorC1.style.display = 'none';
            }, 350);
        }

        else if(modificadorC2.src == imagem02.src){
            modificadorC2.style.transform = 'rotateY(0deg)';
            const close = setInterval(() =>{
                modificadorC2.style.display = 'none';
            }, 350);
        }

        else if(modificadorC3.src == imagem02.src){
            modificadorC3.style.transform = 'rotateY(0deg)';
            const close = setInterval(() =>{
                modificadorC3.style.display = 'none';
            }, 350);
        }

        else if(modificadorC4.src == imagem02.src){
            modificadorC4.style.transform = 'rotateY(0deg)';

            const close = setInterval(() =>{
                modificadorC4.style.display = 'none';
            }, 350);
        }

        contador++;

        if(modificadorC1R.src == imagem02.src){
            modificadorC1R.style.transform = 'rotateY(0deg)';

            const close = setInterval(() => {
                modificadorC1R.style.display = 'none';
            }, 350);
        }

        else if(modificadorC2R.src == imagem02.src){
            modificadorC2R.style.transform = 'rotateY(0deg)';

            const close = setInterval(() =>{
                modificadorC2R.style.display = 'none';
            }, 350);
        }

        else if(modificadorC3R.src == imagem02.src){
            modificadorC3R.style.transform = 'rotateY(0deg)';

            const close = setInterval(() =>{
                modificadorC3R.style.display = 'none';
            }, 350);
        }   

        else if(modificadorC4R.src == imagem02.src){
            modificadorC4R.style.transform = 'rotateY(0deg)';

            const close = setInterval(() => {
                modificadorC4R.style.display = 'none';
            }, 350);
        }

        variavel_comparacao_two = null;
        selecionado_repeat = 0;
        variavel_comparacao = null;
        selecionado = 0;
    }

    else if(variavel_comparacao == 'Mage' && variavel_comparacao_two == 'Mage'){
        if(modificadorC1.src == imagem03.src){
            modificadorC1.style.transform = 'rotateY(0deg)';

            const close = setInterval(() =>{
                modificadorC1.style.display = 'none';
            }, 350);
        }

        else if(modificadorC2.src == imagem03.src){
            modificadorC2.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC2.style.display = 'none';
            }, 350);
        }

        else if(modificadorC3.src == imagem03.src){
            modificadorC3.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC3.style.display = 'none';
            }, 350);
        }

        else if(modificadorC4.src == imagem03.src){
            modificadorC4.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC4.style.display = 'none';
            }, 350);
        }

        contador++;

        if(modificadorC1R.src == imagem03.src){
            modificadorC1R.style.transform = 'rotateY(0deg)';

            const close = setInterval(() =>{
                modificadorC1R.style.display = 'none';
            }, 350);
        }

        else if(modificadorC2R.src == imagem03.src){
            modificadorC2R.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC2R.style.display = 'none';
            }, 350);
        }

        else if(modificadorC3R.src == imagem03.src){
            modificadorC3R.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC3R.style.display = 'none';
            }, 350);
            
        }

        else if(modificadorC4R.src == imagem03.src){
            modificadorC4R.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC4R.style.display = 'none';
            }, 350);
        }

        variavel_comparacao_two = null;
        selecionado_repeat = 0;
        variavel_comparacao = null;
        selecionado = 0;
    }   

    else if(variavel_comparacao == 'paladin' && variavel_comparacao_two == 'paladin'){
        if(modificadorC1.src == imagem04.src){
            modificadorC1.style.transform = 'rotateY(0deg)';

            const close = setInterval(() =>{
                modificadorC1.style.display = 'none';
            }, 350);
        }

        else if(modificadorC2.src == imagem04.src){
            modificadorC2.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC2.style.display = 'none';
            }, 350);
        }

        else if(modificadorC3.src == imagem04.src){
            modificadorC3.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC3.style.display = 'none';
            }, 350);
        }

        else if(modificadorC4.src == imagem04.src){
            modificadorC4.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC4.style.display = 'none';
            }, 350);
        }

        contador++;

        if(modificadorC1R.src == imagem04.src){
            modificadorC1R.style.transform = 'rotateY(0deg)';

            const close = setInterval(() =>{
                modificadorC1R.style.display = 'none';
            }, 350);
        }

        else if(modificadorC2R.src == imagem04.src){
            modificadorC2R.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC2R.style.display = 'none';
            }, 350);
        }

        else if(modificadorC3R.src == imagem04.src){
            modificadorC3R.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC3R.style.display = 'none';
            }, 350);
        }

        else if(modificadorC4R.src == imagem04.src){
            modificadorC4R.style.transform = 'rotateY(0deg)';

            let close = setInterval(() => {
                modificadorC4R.style.display = 'none';
            }, 350);
        }
        variavel_comparacao_two = null;
        selecionado_repeat = 0;
        variavel_comparacao = null;
        selecionado = 0;
    }   
}, 100);

const temporizador = setInterval(() =>{
    if (variavel_comparacao == 'Orc' && variavel_comparacao_two == 'Thief'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem01.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem01.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem01.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem01.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem02.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem02.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem02.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem02.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }

    else if (variavel_comparacao == 'Orc' && variavel_comparacao_two == 'Mage'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem01.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem01.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem01.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem01.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem03.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem03.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem03.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem03.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }

    else if (variavel_comparacao == 'Orc' && variavel_comparacao_two == 'paladin'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem01.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem01.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem01.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem01.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem04.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem04.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem04.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem04.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }
    
    else if (variavel_comparacao == 'Thief' && variavel_comparacao_two == 'Orc'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem02.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem02.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem02.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem02.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem01.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem01.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem01.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem01.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }
    
    else if (variavel_comparacao == 'Thief' && variavel_comparacao_two == 'Mage'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem02.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem02.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem02.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem02.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem03.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem03.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem03.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem03.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }

    else if (variavel_comparacao == 'Thief' && variavel_comparacao_two == 'paladin'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem02.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem02.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem02.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem02.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem04.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem04.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem04.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem04.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }

    else if (variavel_comparacao == 'Mage' && variavel_comparacao_two == 'Orc'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem03.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem03.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem03.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem03.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem01.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem01.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem01.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem01.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }

    else if (variavel_comparacao == 'Mage' && variavel_comparacao_two == 'Thief'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem03.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem03.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem03.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem03.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem02.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem02.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem02.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem02.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }

    else if (variavel_comparacao == 'Mage' && variavel_comparacao_two == 'paladin'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem03.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem03.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem03.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem03.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem04.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem04.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem04.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem04.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }

    else if (variavel_comparacao == 'paladin' && variavel_comparacao_two == 'Orc'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem04.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem04.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem04.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem04.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem01.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem01.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem01.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem01.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }

    else if (variavel_comparacao == 'paladin' && variavel_comparacao_two == 'Orc'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem04.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem04.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem04.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem04.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem01.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem01.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem01.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem01.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }

    else if (variavel_comparacao == 'paladin' && variavel_comparacao_two == 'Thief'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem04.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem04.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem04.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem04.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem02.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem02.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem02.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem02.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }

    else if (variavel_comparacao == 'paladin' && variavel_comparacao_two == 'Mage'){
        const temporizadorFinale = setTimeout(() =>{
            if(modificadorC1.src == imagem04.src){
                modificadorC1.src = imagem_default.src;
                modificadorC1.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2.src == imagem04.src){
                modificadorC2.src = imagem_default.src;
                modificadorC2.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3.src == imagem04.src){
                modificadorC3.src = imagem_default.src;
                modificadorC3.style.transform = 'rotateY(0deg)';
            }  

            else if(modificadorC4.src == imagem04.src){
                modificadorC4.src = imagem_default.src;
                modificadorC4.style.transform = 'rotateY(0deg)';
            }


            variavel_comparacao = null;
            selecionado = 0;

            if(modificadorC1R.src == imagem03.src){
                modificadorC1R.src = imagem_default.src;
                modificadorC1R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC2R.src == imagem03.src){
                modificadorC2R.src = imagem_default.src;
                modificadorC2R.style.transform = 'rotateY(0deg)';
            }

            else if(modificadorC3R.src == imagem03.src){
                modificadorC3R.src = imagem_default.src;
                modificadorC3R.style.transform = 'rotateY(0deg)';
            }
            
            else if(modificadorC4R.src == imagem03.src){
                modificadorC4R.src = imagem_default.src;
                modificadorC4R.style.transform = 'rotateY(0deg)'
            }

            variavel_comparacao_two = null;
            selecionado_repeat = 0;
        }, 350);
    }
}, 100);
