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

  if(error){

    console.log(error)

  }else{

    productList.innerHTML = ''

    data.forEach(product=>{

      productList.innerHTML += `
      
      <div class="product-card">

        <img src="${
          product.image
        }">

        <h3>
          ${
            product.name
          }
        </h3>

        <p>
          Rp ${
            product.price
          }
        </p>

        <button
        class="btn primary">

          Buy Now

        </button>

      </div>

      `
    })

  }

}

getProducts()
