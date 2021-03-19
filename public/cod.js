//BOTÕES RELACIONADO A COMPRA
const btnCarrinho = document.querySelector(".btnCarrinho");
const btnComprar = document.querySelectorAll(".btnComprar");


//BOTÕES BARRA DE MENU
const btnProdutos = document.querySelector('.btnProdutos');
const btnInicio = document.querySelector(".btnInicio");
const btnContatos = document.querySelector(".btnContatos");



const html = document.querySelector('.html');

// DIV DE CADA SEÇÃO    -    usada aqui para fazer sumir quando uma delas é selecionada
const foto = document.querySelector(".slide");
const produtos = document.querySelector(".produtos");
const contatos = document.querySelector(".contatos");
const localizacao = document.querySelector(".localizacao");
const mapa = document.querySelector(".mapa");

contatos.style.display = "none";
produtos.style.display = "none";
foto.style.display = "block";
mapa.style.display = "none";


// AÇÕES DOS BOTÔES

btnProdutos.addEventListener('click', abrirProdutos);
btnInicio.addEventListener('click', abrirInicio);
btnContatos.addEventListener('click', abrirContatos);
localizacao.addEventListener('click', mostrar);





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

function comprar() {
    imgCarrinho.style.display = "none";
    imgCarrinhoCheio.style.display = "block";
}

function mostrar() {
    if (mapa.style.display == "none") {
        mapa.style.display = "block"
    } else { mapa.style.display = "none" }
}