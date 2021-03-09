const btnProdutos = document.querySelector('.btnProdutos');
const btnInicio = document.querySelector(".btnInicio");
const btnContatos = document.querySelector(".btnContatos");
const foto = document.querySelector(".slide");
const produtos = document.querySelector(".produtos");
const contatos = document.querySelector(".contatos");

contatos.style.display = "none";
produtos.style.display = "none";
foto.style.display = "block";

btnProdutos.addEventListener('click', abrirProdutos);
btnInicio.addEventListener('click', abrirInicio);
btnContatos.addEventListener('click', abrirContatos)

function abrirProdutos() {
    contatos.style.display = "none";
    foto.style.display = 'none';
    produtos.style.display = 'grid';
}

function abrirInicio() {
    contatos.style.display = "none";
    produtos.style.display = "none";
    foto.style.display = "block";
}

function abrirContatos() {
    foto.style.display = "none";
    produtos.style.display = "none";
    contatos.style.display = "block";
}