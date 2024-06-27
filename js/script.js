
const apiUrl = 'https://ericaalbuquerque.github.io/api_quotes/quotes.json'; 
const btnSearch = document.getElementById('searchButton');
const idInput = document.getElementById('idInput');
const autorInput = document.getElementById('autorInput');
const quotesEncontrada = document.getElementById('quotesEncontrada');

btnSearch.addEventListener('click', async () => {
const id = idInput.value;
const autor = autorInput.value;
if (id ||autor ) { // Verifica se ID ou título está preenchido
    if (id) {
        encontrarPorId(id);
    } else {
        encontrarPorAutor(autor);
} 
}else {
    alert('Informe o ID ou o título do álbum.');
}
});

//função pra procurar frase por ID   
async function encontrarPorId(id) {
try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const quote = data.find(quote => quote.id === id);
    if (quote) {
        quotesEncontrada.textContent = `"${quote.quotes}" - ${quote.author}`; // Exibe a frase e o autor
    } else {
        alert('Frase não encontrada.');
    }
} catch (error) {
    console.error('Erro ao buscar dados:', error);
    alert('Erro ao buscar dados. Tente novamente.');
}
}
//função pra procurar frase por AUTOR
async function encontrarPorAutor(autor) {
try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const quoteAutor = data.find(quote => quote.author === autor);
    if (quoteAutor) {
        quotesEncontrada.textContent = `"${quoteAutor.quotes}" - ${quoteAutor.author}`; // Exibe a frase e o autor
    } else {
        alert('Frase não encontrada.');
    }
} catch (error) {
    console.error('Erro ao buscar dados:', error);
    alert('Erro ao buscar dados. Tente novamente.');
}
}


