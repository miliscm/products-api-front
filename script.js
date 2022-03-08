
const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products"
const cards = document.querySelector(".cards");
const buttonMore = document.querySelector("#moreProducts")



function createNode(element){
  return  document.createElement(element)
}


    
async function getProducts(){
try{
    const resp = await fetch(`${url}`);
    const data = await resp.json();
    const productsList = data.products;  
    const page = data.nextPage;
   
    if(productsList.length > 0){
        return (productsList.map((item)=>{
            // console.log(item)
            let divNew = createNode("div");
            divNew.classList.add("card");        
            cards.insertAdjacentElement("afterbegin",divNew)
            let itemCard = document.querySelector('.card')
            // console.log(itemCard)
            itemCard.innerHTML = `<div class="card-image">
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
            <button type="button">Comprar</button>`
            
        }))
    }


}
catch(error){
    console.log(error)
}
    
}

getProducts();

buttonMore.addEventListener("click",()=>
{
    getProducts()
});
