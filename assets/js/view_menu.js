
let element = document.getElementById("details-id");
let header = document.getElementById("header")
let home = document.getElementById("home_id")
let ourFeatures = document.getElementById("ourFeatures")
let myStore = document.getElementById("myStore_id")
let footer = document.getElementById("footer")
let elements_arr=[header,home,ourFeatures,myStore,footer]
function swapClasses() {
    let li=document.querySelector(".nave-items");
    let bar_list = document.getElementById("bar-list");
    //console.log(element);
    if (bar_list.classList.contains("fa-bars")){
        bar_list.classList.remove("fa-bars");
        bar_list.classList.add("fa-times");
        li.classList.add("active")
    }
    else{
        bar_list.classList.remove("fa-times");
        bar_list.classList.add("fa-bars");
        li.classList.remove("active")
        let add_product=document.getElementById("add-product")
        if (!add_product.classList.contains("hide")){
            show_hide()
        }
    }
}

async function swapHideClasses(id_) {
    let div_details= document.getElementById("product-details-id");
    try{
        const products = await getProduct();
        if (element.classList.contains("hide")){
            element.classList.remove("hide");
            elements_arr.forEach(e_arr=>{
                e_arr.classList.add("hide");
            })
            products.forEach(element => {
                if (element.id==id_) {
                    const containt=`<div class="product-details">
                                        <div class="header-details">
                                            <div class="details-description">
                                                <h1>${element.title}</h1>
                                                <p>${element.description}</p>
                                            </div>
                                            <div class="deader-img">
                                                <img id="h-img"  src="${element.thumbnail}" alt="productImg">
                                            </div>
                                        </div>
                                        <div class="body-details">
                                            <div class="imgs-details-list">
                                                <ul id="img-d" class="imgs-detailes">
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="footer-details">
                                            <div class="detailes-footer-containt">
                                            <h3>${element.brand}</h3> <h2>${element.price}$</h2>
                                            </div>
                                        </div>
                                    </div> 
                                    <button onclick="swapHideClasses(1)" class="btn">
                                        <a href="#"  class="back-posts">Go back products</a>
                                    </button>
                                    `;
                                    div_details.innerHTML= containt;
                                    let ul=document.getElementById("img-d")
                                    console.log(ul);
                                    element.images.forEach(arr =>{
                                        ul.insertAdjacentHTML("beforeend",`<li class="img-details">
                                                                              <img src="${arr}" alt="photo">
                                                                           </li>
                                        `)
                                    })
                }
            });
        }
        else{
            element.classList.add("hide");
            elements_arr.forEach(e_arr=>{
                e_arr.classList.remove("hide");
            })
        }
    }
    catch (error) {
        console.log(error.message);
    } 
}

function show_hide(){
    let elements_arr=[element,home,ourFeatures,myStore]
    let add_product=document.getElementById("add-product")
    if (add_product.classList.contains("hide")){
        add_product.classList.remove("hide");
        elements_arr.forEach(e_arr=>{
            e_arr.classList.add("hide");
        })
    }
    else{
        
        add_product.classList.add("hide");
        elements_arr.forEach(e_arr=>{
            e_arr.classList.remove("hide");
        })
    }
}