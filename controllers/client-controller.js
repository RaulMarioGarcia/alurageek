import { clientServices } from "../service/client-service.js";

const createNewProduct = (imgURL, prodName, price, id) =>{
    const product = document.createElement("div");
    product.classList.add("products__item--allProducts");
    const content = `
    <img src="${imgURL}" class="products__img">
    <p class="products__description"> ${prodName} </p>
    <p class="products__price"> ${price} </p>
    <a href="../editProduct.html?id=${id}" class="products__link">
        <p class="products__show">Ver producto</p>
    </a>
    <a href="" class="products__link">
        <button class="products__delete" id="${id}">Eliminar producto</button>
    </a>
    `;
    product.innerHTML = content;
    const btn = product.queryselector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        clientServices
        .deleteProduct(id)
        .then((response) => {
            console.log(response)
        })
        .catch((err) => alert("Error"));
    });
    return product;
};

const grid = document.querySelector("[data-grid]");

clientServices
    .productsList()
    .then ((data) => {
        data.forEach(({imgURL, prodName, price, id}) => {
            const newProduct = createNewProduct(imgURL, prodName, price, id)
            grid.appendChild(newProduct)
        });
    });
