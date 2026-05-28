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
const searchInput =
document.getElementById(
  'searchInput'
)

let allProducts = []

async function getProducts(){

  const {
    data,
    error
  } = await supabase
  .from('products')
  .select('*')

  if(!error){

    allProducts = data

    renderProducts(data)

  }

}

function renderProducts(data){

  productList.innerHTML = ''

  data.forEach(product=>{

    productList.innerHTML += `

    <div class="product-card">

      <img src="${product.image}">

      <div class="product-content">

        <span class="category">

          Product

        </span>

        <h3>

          ${product.name}

        </h3>

        <p class="price">

          Rp ${product.price}

        </p>

        <button
onclick='addToCart(
"${product.name}",
"${product.price}",
"${product.image}"
)'
class="btn primary">

Buy Now

</button>
      </div>

    </div>

    `
  })

}

searchInput.addEventListener(
  'keyup',
  ()=>{

    const value =
    searchInput.value.toLowerCase()

    const filtered =
    allProducts.filter(product=>

      product.name
      .toLowerCase()
      .includes(value)

    )

    renderProducts(filtered)

  }
)

getProducts()
