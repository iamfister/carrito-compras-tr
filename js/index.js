let filteredArticles = [...db];

let cart = [];

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
                    class="btn btn-dark w-100"
                    onclick="addToCart(${id})"
                >Agregar al Carrito</button>
            </div>
        </div>
        `;
    })
    .join("");
};

function addToCart(articleId) {

  const item = filteredArticles.find((item) => item.id === articleId);
  if (!item) {
    console.error("Artículo no encontrado");
    return;
  }

  const itemExist = cart.findIndex((article) => article.id == item.id);
  if (itemExist >= 0) {
    cart[itemExist].quantity++;
  } else {
    item.quantity = 1;
    cart = [...cart, item];
  }

  console.log(cart);
}

function removeFromCart(articleId){

}

function clearCart() {
    cart = [];
    console.log(cart);
}


displayArticles();
