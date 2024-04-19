let filteredArticles = [...db];

console.log(filteredArticles);

filteredArticles = []

console.log(filteredArticles);

const articlesContainer = document.getElementById('articles-container');

const displayArticles = () => {
    debugger;
    if (filteredArticles.length < 1) {
        articlesContainer.innerHTML = "<h6>Lo sentimos, No hay productos que mostrar :C</h6>";
        return;
    }
}

displayArticles();