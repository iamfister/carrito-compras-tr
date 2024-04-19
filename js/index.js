let filteredArticles = [...db];

console.log(filteredArticles);

console.log(filteredArticles);

const articlesContainer = document.getElementById("articles-container");

const displayArticles = () => {
  if (filteredArticles.length < 1) {
    articlesContainer.innerHTML =
      "<h6>Lo sentimos, No hay productos que mostrar :C</h6>";
    return;
  }

  articlesContainer.innerHTML = filteredArticles
    .map((item) => {
      //mapear los valores del nodo de la lista a un constante, y posteriormente la respresento en un producto
      const { id, name, image, description, price } = item;
      return `
        <div class="col-md-6 col-lg-4 my-4 row align-items-center" data-id="${id}">
            <div class="col-4">
                <img class="img-fluid" src="${image}" alt="imagen pc"/>
            </div>
            <div class="col-8">
                <h3 class="text-black fs-4 fw-bold text-uppercase">${name}</h3>
                <p>${description}</p>
                <p class="fw-black text-primary fs-3">$${price}</p>
                <button 
                    type="button"
                    class="btn btn-dark w-100 "
                >Agregar al Carrito</button>
            </div>
        </div>
        `;
    })
    .join("");
};

displayArticles();
