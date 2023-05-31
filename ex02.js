/*Exercicio para ver se a imagem esta no modo paisagem ou não*/ 

function ePaisagem (largura, altura) {
    return largura > altura ? true : false;
}

console.log (ePaisagem(1920, 1080));