const productsList = () => {
    fetch("http://localhost:3000/producto").then((Response) => Response.json());
}

const createProduct = () => {
   return fetch("http://localhost:3000/producto", {
        method: "POST",
        Headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imgURL, prodName, price, id:uuid.v4()}),
    });
};

const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
    })
}

const productDetails = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((Response) => Response.json());
};

const updateProduct = (imgURL, prodName, price, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        Headers: {
            "Content Type": "application/json",
        },
        body: JSON.stringify(imgURL, prodName, price)
    })
    .then ((response) => response)
    .catch ((err) => console.log(err));
};

export const clientServices = {
    productsList,
    createProduct,
    deleteProduct,
    productDetails,
    updateProduct
};