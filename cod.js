const btnProdutos = document.querySelector('.btnProdutos');
const btnInicio = document.querySelector(".btnInicio");
const btnContatos = document.querySelector(".btnContatos");
const foto = document.querySelector(".foto");
const produtos = document.querySelector(".produtos");
const contatos = document.querySelector(".contatos");


btnProdutos.addEventListener('click', abrirProdutos);
btnInicio.addEventListener('click', abrirInicio);
btnContatos.addEventListener('click', abrirContatos)

function abrirProdutos() {
    contatos.style.visibility = "hidden";
    foto.style.visibility = 'hidden';
    produtos.style.visibility = 'visible';
}

function abrirInicio() {
    contatos.style.visibility = "hidden";
    produtos.style.visibility = "hidden";
    foto.style.visibility = "visible";

}

function abrirContatos() {
    foto.style.visibility = "hidden";
    produtos.style.visibility = "hidden";
    contatos.style.visibility = "visible";
}