
let url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page="
let pagesCount = 1;
const cards = document.querySelector(".cards");
const buttonMore = document.querySelector("#moreProducts")

function createNode(element){
    return  document.createElement(element)
}
  

async function getProducts(){
    try{

    const resp = await fetch(`${url}${pagesCount}`);
    const data = await resp.json();
    const products = data.products;
    const productId=document.getElementById('productsList')
            
     products.map((item)=>{       
        let htmlContent = `<div class="card">
        <div class="card-image">
            <img
              src="${item.image}"
              alt=""
            />
          </div>
          <div class="card-content">
            <p>${item.name}</p>
            <p>
              ${item.description}
            </p>
            <p>De: R$${item.oldPrice}</p>
            <p>Por: R$${item.price}</p>
            <button type="button">Comprar</button>
            </div>`
                
        productId.insertAdjacentHTML("beforeend",htmlContent)

    }) 
    if(pagesCount==2){
        buttonMore.style.display="none";
        
    }  
    
}
    catch(error){
    console.log("Erro na requisição")
    }
}

getProducts();

buttonMore.addEventListener("click",()=>{
    
    pagesCount=pagesCount+1;
    getProducts();
}
)
