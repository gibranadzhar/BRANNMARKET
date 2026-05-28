import { supabase }
from './supabase.js'

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
        class="btn primary full-btn">

          Add To Cart

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

window.addToCart =
function(name,price,image){

  let cart =
  JSON.parse(
    localStorage.getItem('cart')
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

}
