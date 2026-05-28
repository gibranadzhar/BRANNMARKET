import { supabase }
from './supabase.js'

const productList =
document.getElementById(
  'productList'
)

async function getProducts(){

  const {
    data,
    error
  } = await supabase
  .from('products')
  .select('*')
  .order('id',{
    ascending:false
  })

  if(error){

    console.log(error)

  }else{

    productList.innerHTML = ''

    data.forEach(product=>{

      productList.innerHTML += `

      <div class="product-card">

        <img
        src="${product.image}">

        <div class="product-content">

          <h3>

            ${product.name}

          </h3>

          <p class="price">

            Rp ${product.price}

          </p>

          <button
          class="btn primary full-btn">

            Add To Cart

          </button>

        </div>

      </div>

      `
    })

  }

}

getProducts()
