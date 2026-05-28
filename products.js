import { supabase }
from './supabase.js'

const productList =
document.getElementById(
  'productList'
)


// GET PRODUCTS

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
          class="btn primary full-btn"
          onclick="addToCart(
          '${product.name}',
          '${product.price}',
          '${product.image}'
          )">

            Add To Cart

          </button>

        </div>

      </div>

      `
    })

  }

}


// GLOBAL FUNCTION

window.addToCart =
function(
  name,
  price,
  image
){

  let cart =
  JSON.parse(
    localStorage.getItem(
      'cart'
    )
  ) || []

  cart.push({
    name,
    price,
    image
  })

  localStorage.setItem(
    'cart',
    JSON.stringify(cart)
  )

  alert(
    'Added to cart 🔥'
  )

  console.log(cart)

}


getProducts()
