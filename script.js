// Método simples
const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Minha Loja";
document.body.appendChild(titulo);


// Método complexo
const produto = document.createElement("div");

produto.innerHTML = `
    <img src="https://m.media-amazon.com/images/I/61dRLHx9tpL._AC_SL1500_.jpg" alt="Fone de ouvido sem fio">
    <h2>Fone de Ouvido Headphone</h2>
    <p>Fone de ouvido preto sem fio com conexão Bluetooth Tune 530BT</p>
    <p>Com até 76 horas de duração da bateria, ouça por mais tempo sem diminuir a velocidade.</p>
    <p>Preço: R$ 259,90</p>
`;

produto.style.width = "400px";
produto.style.margin = "30px auto";
produto.style.padding = "20px";
produto.style.textAlign = "center";
produto.style.fontFamily = "Arial";
produto.style.backgroundColor = "#f2f2f2";
produto.style.borderRadius = "10px";

produto.querySelector("img").style.width = "200px";
produto.querySelector("img").style.height = "200px";
produto.querySelector("img").style.objectFit = "contain";

produto.querySelector("h2").style.fontSize = "24px";

produto.querySelectorAll("p").forEach(function(paragrafo) {
    paragrafo.style.fontSize = "18px";
});

document.body.appendChild(produto);