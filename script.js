let pessoa = [];

function adicionar() {

    let nome = salvar();

    listar(nome);

    addArray(nome)

    /* console.log(nome);
    console.log(pessoa); */

}

function salvar(nome) {

    let pessoa = document.getElementById("nome").value

    return pessoa
}

function listar(nome) {

    let lista = document.getElementById("lista");

    lista.innerHTML += `<p>${nome}</p>`
}

function addArray(nome) {

    pessoa.push(nome);

    document.getElementById("nome").value = ''
    document.getElementById("nome").focus()


}


function sortear() {
    let numeroB = pessoa.length
    let numeroS = Math.floor(Math.random() * numeroB)
    document.getElementById("h2").innerHTML = pessoa[numeroS]

}