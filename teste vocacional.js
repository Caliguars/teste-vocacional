
// Variaveis para as opções
var quantidade_a = 0;
var quantidade_b = 0;
var quantidade_c = 0;
var quantidade_d = 0;
var quantidade_e = 0;

// Função para cada select
function contarOpcao(select) {
    if (select.value == 'a') {
        quantidade_a++;
    } else if (select.value == 'b') {
        quantidade_b++;
    }
    else if (select.value == 'c') {
      quantidade_c++;
    }
    else if (select.value == 'd') {
      quantidade_d++;
    }
    else if (select.value == 'e') {
      quantidade_e++;
    }

}

function lerSelects(){
    quantidade_a=0;
    quantidade_b=0;
    quantidade_c=0;
    quantidade_d=0;
    quantidade_e=0;

    // Pega todos os <select> da página e guarda em uma variavel
    const selects = document.querySelectorAll('select');
    // Percorre cada select usando forEach (parecido com loop)
    selects.forEach(contarOpcao);
    // Mostra o resultado no console depois de rodar "todo o loop"
    console.log('Quantidade de A:', quantidade_a);
    console.log('Quantidade de B:', quantidade_b);
    console.log('Quantidade de C:', quantidade_c);
    console.log('Quantidade de D:', quantidade_d);
    console.log('Quantidade de E:', quantidade_e);
    mostrarResultado();
    atualizarPorcentagem();
}
// Maneira simples de mostrar os resultados
function mostrarResultado(){
    document.getElementById("resultado1").innerHTML = "Sua afinidade à area de Ciências Exatas ou Tecnologia é de:"+quantidade_a;
    document.getElementById("resultado2").innerHTML = "Sua afinidade à area de Artes ou Comunicação é de:"+quantidade_b;
    document.getElementById("resultado3").innerHTML = "Sua afinidade à area de Ciências Humanas ou Saúde é de:"+quantidade_c;
    document.getElementById("resultado4").innerHTML = "Sua afinidade à area de Ciências Biológicas ou Ambientais é de:"+quantidade_d;
    document.getElementById("resultado5").innerHTML = "Sua afinidade à area de Gestão ou Negócios é de:"+quantidade_e;
}
// Mostrando com barra de porcentagem
function atualizarPorcentagem(){
    const skillBar = document.getElementById('exatas');
    // Multiplicando por 10 pq temos 10 questões, mudem se tiverem números diferentes.
    skillBar.style.width = quantidade_a*10+'%';
    skillBar.innerHTML = quantidade_a*10+'%';
}
