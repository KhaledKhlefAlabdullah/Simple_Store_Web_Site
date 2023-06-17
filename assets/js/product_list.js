const url ="https://dummyjson.com/products"
//"https://jsonplaceholder.typicode.com/posts"
async function getProduct(){
    const response = await fetch(url)
    let data = await response.json()
    return data["products"]
}

async function fetchProducts() {
    let div_products=document.getElementById("products");
    //console.log(div_products);
    try {
        const products = await getProduct();
        products.forEach(the_product =>{
            const product=`
                        <div class="product" onclick="swapHideClasses(${the_product.id})">
                            <img src=${the_product.thumbnail} alt="product name" class="product-photo">
                            <h3>${the_product.title}h3>
                        </div>`;
            div_products.insertAdjacentHTML('beforeend',product);
            console.log(the_product)
        });
        // Process the products data or display it on the page
    } catch (error) {
        console.error(error.message)
    }
}

fetchProducts();

