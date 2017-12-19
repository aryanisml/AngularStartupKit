import Product from "./Classes/Product";

var ProductList = [

    new Product("Mobile", 10),
    new Product("IPod", 5),
    new Product("MackBook", 10),
    new Product("Laptop", 20)

]

ProductList.forEach((productObj) => {
    console.log(productObj.GetProductDetails());
});