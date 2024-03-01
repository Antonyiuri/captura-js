// Conectar com os elementos no arquivo HTML
const tituloElement = document.getElementById('titulo');
const listaNaoOrdenadaElement = document.querySelector('ul');
const linkElement = document.getElementById('link');
const listaOrdenadaElement = document.getElementById('lista-ordenada');

// Adicionar conteúdo aos elementos
tituloElement.innerText = 'Título Adicionado com JavaScript';
linkElement.innerText = 'Clique aqui para visitar o site';
linkElement.target = '_blank';  // Abrir o link em uma nova guia

// Adicionar itens à lista não ordenada
for (let i = 1; i <= 3; i++) {
    const itemNaoOrdenado = document.createElement('li');
    itemNaoOrdenado.innerText = `Item ${i}`;
    listaNaoOrdenadaElement.appendChild(itemNaoOrdenado);
}

// Adicionar itens à lista ordenada com links para outros sites
const sites = ['https://example.com', 'https://example.org', 'https://example.net'];

for (let i = 0; i < 3; i++) {
    const itemOrdenado = document.createElement('li');
    const linkSite = document.createElement('a');
    linkSite.href = sites[i];
    linkSite.innerText = `Site ${i + 1}`;
    linkSite.target = '_blank';  // Abrir o link em uma nova guia
    itemOrdenado.appendChild(linkSite);
    listaOrdenadaElement.appendChild(itemOrdenado);
}
