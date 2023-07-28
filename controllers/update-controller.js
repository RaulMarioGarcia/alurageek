import { clientServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

const getInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        alert("Error");
    }

    const imgURL = document.querySelector("[data-imgURL]");
    const prodName = document.querySelector("[data-prodName]");
    const price = document.querySelector("[data-price]");

    try {
        const product = await clientServices.productDetails(id);
        if (product.imgURL && product.prodName && product.price){
            imgURL.value = product.imgURL;
            prodName.value = product.prodName;
            price.value = product.price;
        } else {
            throw new Error();
        }
    } catch (error) {
        alert("Error")
    }
};

getInfo();

form.addEventListener("submit", (action) => {
    action.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imgURL = document.querySelector ("[data-imgURL]").value;
    const prodName = document.querySelector("[data-prodName]").value;
    const price = document.querySelector("[data-price]").value;
    clientServices.updateProduct(imgURL, prodName, price, id).then(() => {
        window.location.href = "../allProducts.html"
    });
});