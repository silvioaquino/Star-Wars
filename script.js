let currentPageUrl = 'https://swapi.dev/api/people/'

window.onload = async () => {
    try {
        await loadCharacters(currentPageUrl);
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar cards') 
    }
};

async function loadCharacters(url) {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = ''; //Limpar resultados anteriores

    try {
        const response = await fetch(url);
        const responsejson = await response.json();

        response.results.forEach((character) => {
            
        });

    } catch (error)  {
        alert('Erro ao carregar personagens')
        console.log(error)
    }
}