$(document).ready(() => {
  const productsArray = [
    {
      id: 1,
      name: "aiFone 01",
      quantity: 0,
      color: "preto",
      image: "../../assets/cellphone2.png",
      price: "600,00",
      description:
        "5G, chip A14 Bionic, novo design, Ceramic Shield, tela OLED de ponta a ponta e modo Noite em todas as câmeras. Tudo isso em dois tamanhos, incluindo o novo aiFone 01.",
    },
    {
      id: 2,
      name: "aiFone ASW",
      quantity: 0,
      color: "Branco",
      image: "../../assets/cellphone4.png",
      price: "1200,00",
      description:
        "Um chip incrivelmente poderoso e o formato que se encaixa perfeitamente na sua mão. O iPhone ASW é tudo que você queria.",
    },
    {
      id: 3,
      name: "aiFone ASW Pro",
      quantity: 0,
      color: "Cinza Espacial",
      image: "../../assets/cellphone5.png",
      price: "2000,00",
      description:
        "A velocidade do 5G na sua forma mais Pro. O A14 Bionic ultrapassa os outros chips de smartphone como um foguete. O sistema de câmera Pro deixa as fotos em pouca luz claramente melhores — uma diferença ainda mais nítida no aiFone AWS Pro Pro Max. O Ceramic Shield é quatro vezes mais duro na queda. As novidades são poderosas. Agora é ver o que ele consegue fazer.",
    },
  ];

  let products = JSON.parse(localStorage.getItem("products"));

  if (!products) {
    products = localStorage.setItem("products", JSON.stringify(productsArray));
  }

  const addToCart = (id) => {
    const newProductsArray = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: (product.quantity += 1) };
      } else {
        return product;
      }
    });
    localStorage.setItem("products", JSON.stringify(newProductsArray));
    location.href = "../Cart";
  };

  productsArray.forEach((product) => {
    $("#products").append(
      `
        <li class="media my-4" id="${product.id}">
        <img src="${product.image}" class="mr-3" alt="..." />
        <div class="media-body">
            <h5 class="mt-0 mb-1">${product.name}</h5>
            <p>
            <strong>Preço:</strong> R$ ${product.price}
            </p>
            <p>
            <strong>Cor:</strong> ${product.color}
            </p>
            <p>
            <strong>Descrição:</strong> ${product.description}
            </p>
            <p>
            <button id="button-${product.id}" class="btn btn-secondary">Adicionar ao carrinho</button>
            </p>
        </div>
    </li>
        `
    );
  });

  productsArray.forEach(({ id }) => {
    $(`#button-${id}`).click(() => addToCart(id));
  });
});
