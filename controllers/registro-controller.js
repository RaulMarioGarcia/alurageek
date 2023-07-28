import { clientServices } from "../service/client-service.js";

const prodForm = document.querySelector("[data-form]")

prodForm.addEventListener("submit", (action) =>{
    action.preventDefault();
    const imgURL = document.querySelector ("[data-imgURL]").value
    const prodName = document.querySelector("[data-prodName]").value
    const price = document.querySelector("[data-price]").value
    clientServices
        .createProduct(imgURL, prodName, price)
        .then(() => {
            window.location.href = "../allProducts.html"
        })
        .catch((err) => console.log(err))
});
