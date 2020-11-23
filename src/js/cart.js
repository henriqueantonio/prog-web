$(document).ready(() => {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const addToCart = (id) => {
    const newProductsArray = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: (product.quantity += 1) };
      } else {
        return product;
      }
    });
    localStorage.setItem("products", JSON.stringify(newProductsArray));
    loadProducts(newProductsArray);
  };

  const removeToCart = (id) => {
    const newProductsArray = products.map((product) => {
      if (product.id === id) {
        if (product.quantity !== 0) {
          return { ...product, quantity: (product.quantity -= 1) };
        } else {
          return { ...product, quantity: 0 };
        }
      }

      return product;
    });
    localStorage.setItem("products", JSON.stringify(newProductsArray));
    loadProducts(newProductsArray);
  };

  const loadProducts = (productsArray) => {
    $("#products").empty();
    productsArray.forEach((product) => {
      if (product.quantity === 0) return;
      $("#products").append(`
          <li class="media">
            <img src="${product.image}" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0 mb-1">${name}</h5>
              <p><strong>Preço:</strong> R$ ${
                parseFloat(product.price) * product.quantity
              }</p>
              <p><strong>Cor:</strong> ${product.color}</p>
              <p>
                <strong>Descrição:</strong> ${product.description}
              </p>
              <p>
                <div class="cartControls">
                <h6>${product.quantity}</h6>
                <div class="btn-group align-items-center" role="group" aria-label="Basic example">
                <button id="addButton-${
                  product.id
                }" type="button" class="btn btn-secondary">+</button>
                <button id="delButton-${
                  product.id
                }" type="button" class="btn btn-secondary">-</button>
              </div>
              </div>
            </p>
            </div>
          </li>
    `);
    });

    products.forEach(({ id }) => {
      $(`#delButton-${id}`).click(() => removeToCart(id));
      $(`#addButton-${id}`).click(() => addToCart(id));
    });
  };

  loadProducts(products);
});
