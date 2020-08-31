//EVENTOS E MÉTODOS
function clicou() {
    document.querySelector('p.mostraFrase').innerHTML = "<strong>Olá, mundo!</strong>";
    document.getElementsByTagName('p')[1].innerHTML = "Passe o mouse aqui, por gentileza.";
}
function redireciona() {
    window.open("http://www.google.com")
    //window.location.href = "https://web.digitalinnovation.one"; // atua na url

}
function mudaFrase() {
    
        document.querySelector('p.fraseLink').innerHTML = "Obrigado por passar o mouse, se clicar em mim te mando pro google.com";

}
function voltaFrase() {
        document.querySelector('p.fraseLink').innerHTML = "Passe o mouse aqui, por gentileza.";
}



/*ESTRUTURAS DE CONTROLE
// LAÇOS E REPETIÇÃO
var count = 0
while (count <= 10) {
    console.log(count);
    count++;
} //0 1 2 3 4 5 6 7 8 9 10
for (var i=9; i>=0; i--) {
    console.log(i);
} //9 8 7 6 5 4 3 2 1 0

*/

/*
//IF, ELSE, ELSE IF
//FUNÇÕES

function validaIdade(idade) {
    if (idade >= 18) {
        let maioridade = true;
    } else {
        maioridade = false
    }
    return maioridade; //-> not defined porque está inacessível fora do bloco que a contém.
}

function checaHabilitacao(cnh) {
    if (cnh == 'sim' || cnh == 'Sim' || cnh == 'tenho') {
        return true
    }
    else {
        return false;
    }
}

function podeDirigir(validaIdade, checaHabilitacao) {
    if (validaIdade == true && checaHabilitacao == true) {
        return "Você pode dirigir!";
    } else {
        return "Você não pode dirigir!";
    }
}

console.log(podeDirigir(validaIdade(21),checaHabilitacao('tenho')));
/* ARRAYS E MÉTODOS PARA SUA MANIPULAÇÃO
var listaVegetais = ['alface','couve','acelga','rúcula','espinafre', 'repolho'];
listaVegetais.push('cebolinha');
listaVegetais.reverse();
listaVegetais.pop();
//alert(listaVegetais.toString());
var compras = 'Hoje eu vou comprar ' + listaVegetais.join(', ') + '. Orgânicos e bem baratos!';

//OBJETOS (DICIONÁRIOS)
var alface = {tipo: 'folhagem', cor:'verde-claro', principalNutriente: 'cálcio'};
listaVegetais.push(alface);
console.log(listaVegetais[6].cor);

/*VARIÁVEIS
var pais = 'Brasil'
var frase = pais + ' é um dos países com maior qualidade de vida do mundo.'
var fraseMaiuscula = frase.toUpperCase();

console.log(fraseMaiuscula.replace('BRASIL','CANADÁ'));

var nome = 'Harry';
var anoNascimento = 1992;
var anoAtual = 2020;
var idade = (anoAtual - anoNascimento);
console.log(nome + ' tem ' + idade + ' anos de idade.');*/