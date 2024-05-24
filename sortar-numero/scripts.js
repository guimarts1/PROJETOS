const sort = document.querySelector('.sort');
const div = document.querySelector('.numberSort');

function generateNumber(){

    //Entrada: Ele recebe um único número como entrada, que pode ser um inteiro ou um número de ponto flutuante (decimal).
    //Saída: Ele retorna um inteiro, que é o menor inteiro maior ou igual ao número de entrada. Math.ceil pega o valor do input-min and max

    const minValue = Math.ceil(document.querySelector("#input-min").value);
    const maxValue = Math.ceil(document.querySelector("#input-max").value);
    const btn = document.querySelector("#btn-sorteio")

    if(maxValue == ""){

        alert("Coloque um número no local indicado!");
        return;

    };

    if(maxValue <= minValue){

        alert("Número máximo incorreto!");
        return;

    };

    div.style.visibility = "visible"

    //Entrada: Ele recebe um único número como entrada, que pode ser um inteiro ou um número de ponto flutuante (decimal).
    //Saída: Ele retorna um inteiro, que é o maior inteiro menor ou igual ao número de entrada. Math floor--->
    //Math random ----> No JavaScript, a função Math.random() gera um número pseudoaleatório entre 0 (inclusivo) e 1 (exclusivo). Isso significa que o número retornado pode ser qualquer valor decimal entre 0 e 1, mas nunca exatamente 1.
    const result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    sort.innerHTML = result

    btn.addEventListener("click", generateNumber);

}

div.addEventListener('click', hide)

function hide() {
    if (div.style.visibility == 'visible') {
        div.style.visibility = 'hidden';
    } else {
        div.style.visibility = 'visible';
    }
}
