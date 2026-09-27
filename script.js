// Método simples
const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Minha Loja";
document.body.appendChild(titulo);


// Método complexo
const produto = document.createElement("div");

produto.innerHTML = `
    <h2>Fone de Ouvido</h2>
    <p>Fone de ouvido sem fio com conexão Bluetooth.</p>
    <p>Preço: R$ 99,90</p>
`;

document.body.appendChild(produto);