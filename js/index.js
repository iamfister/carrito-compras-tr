let filteredArticles = [...db];

let cart = [];

const articlesContainer = document.getElementById("articles-container");

const displayArticles = () => {
  if (filteredArticles.length < 1) {
    articlesContainer.innerHTML =
      "<h6>Lo sentimos, No hay productos que mostrar.</h6>";
    return;
  }

  articlesContainer.innerHTML = filteredArticles
    .map((item) => {
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

const cartContainer = document.getElementById("carrito-container");
const cartTotalValue = document.getElementById("carrito-total-value");

const displayCart = () => {
  totalCarrito = 0;

  if (cart.length < 1) {
    cartContainer.innerHTML = `<tr><h6>Lo sentimos, No hay productos que mostrar.</h6></tr>`;
    cartTotalValue.innerHTML = `$0.00`;
    return;
  }

  cartContainer.innerHTML = cart
    .map((item) => {
      const { id, name, image, price, quantity } = item;

      totalCarrito= (quantity * price) + totalCarrito;
      console.log(totalCarrito)

      cartTotalValue.innerHTML = `$${totalCarrito}`;

      return `
        <tr>
          <td>
            <img
              class="img-fluid"
              src="${image}"
              alt="imagen pc"
            />
          </td>
          <td>${name}</td>
          <td class="fw-bold">$${price}</td>
          <td class="flex align-items-start gap-4">
            <button type="button" class="btn btn-dark" onclick="removeQuantityArticuleToCart(${id})">-</button>
            ${quantity}
            <button type="button" class="btn btn-dark" onclick="addQuantityArticuleToCart(${id})">+</button>
          </td>
          <td>
            <button class="btn btn-danger" type="button" onclick="removeFromCart(${id})">X</button>
          </td>
        </tr>
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

  displayCart();
}

function removeFromCart(articleId) {
  const item = filteredArticles.find((item) => item.id === articleId);
  if (!item) {
    console.error("Artículo no encontrado");
    return;
  }

  const filteredCart = cart.filter(item => item.id !== articleId);

  cart = [...filteredCart];

  displayCart();
}

function clearCart() {
  cart = [];

  displayCart();
  console.log(cart);
}


function addQuantityArticuleToCart(articleId) {
  const item = filteredArticles.find((item) => item.id === articleId);
  if (!item) {
    console.error("Artículo no encontrado");
    return;
  }

  const itemExist = cart.findIndex((article) => article.id == item.id);

  cart[itemExist].quantity++;
  displayCart();
}

function removeQuantityArticuleToCart(articleId) {
  const item = filteredArticles.find((item) => item.id === articleId);
  if (!item) {
    console.error("Artículo no encontrado");
    return;
  }

  const itemExist = cart.findIndex((article) => article.id == item.id);

  if (cart[itemExist].quantity === 0) {
    return;
  }
  cart[itemExist].quantity--;
  displayCart();
}

displayArticles();
displayCart();
