function addProducr(){
    document.getElementById('products-form-add').addEventListener('submit', function(event) {
    console.log(document.getElementById('products-form-add'));
    event.preventDefault();
    var title = document.getElementById('product-title').value;
    var description = document.getElementById('product-description').value;
    var img = document.getElementById('product-thumbnail').value;
    var price = document.getElementById('product-price').value;
    var brand = document.getElementById('product-brand').value;
    var data = {
        title:title,
        description:description,
        price:price,
        discountPercentage:12.96,
        rating:4.69,
        stock:94,
        brand:brand,
        category:"smartphones",
        thumbnail:"https://i.dummyjson.com/data/products/1/1.jpg",
        images:["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
    }
    console.log(data);
    fetch("https://dummyjson.com/products/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      if (response.ok) {
        return response.json();
      } else if (response.status === 400) {
        throw new Error('Bad request. Please check your input.');
      } else if (response.status === 401) {
        throw new Error('Unauthorized. Access denied.');
      } else if (response.status === 404) {
        throw new Error('Not found. The specified endpoint does not exist.');
      } else if (response.status === 500) {
        throw new Error('Internal server error. Please try again later.');
      } else {
        throw new Error('An error occurred while adding the product. Status code: ' + response.status);
      }
    }).then(function(jsonData) {
      alert('Product added successfully.')
    }).catch(function(error) {
      alert(error.message);
    });
    document.getElementById('product-title').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-thumbnail').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-brand').value = '';
  });
}