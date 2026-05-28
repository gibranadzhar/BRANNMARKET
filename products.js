import { supabase }
from './supabase.js'

const productList =
document.getElementById(
  'productList'
)

const searchInput =
document.getElementById(
  'searchInput'
)

let allProducts = []


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

    allProducts = data

    renderProducts(data)

  }

}


// RENDER PRODUCTS

function renderProducts(data){

  productList.innerHTML = ''

  data.forEach(product=>{

    productList.innerHTML += `

    <div class="product-card">

      <img
      src="${product.image}">

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

        <div class="product-buttons">

          <button
          onclick='addToCart(
          "${product.name}",
          "${product.price}",
          "${product.image}"
          )'
          class="btn primary full-btn">

            Add To Cart

          </button>

          <button
          onclick='addWishlist({
          name:`${product.name}`,
          price:`${product.price}`,
          image:`${product.image}`
          })'
          class="icon-btn">

            <i class="fa-solid fa-heart"></i>

          </button>

        </div>

      </div>

    </div>

    `
  })

}


// SEARCH PRODUCT

if(searchInput){

  searchInput.addEventListener(
    'keyup',
    ()=>{

      const value =
      searchInput.value
      .toLowerCase()

      const filtered =
      allProducts.filter(product=>

        product.name
        .toLowerCase()
        .includes(value)

      )

      renderProducts(filtered)

    }
  )

}


// ADD TO CART

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

  showNotification(
    'Added to cart 🔥'
  )

}


// WISHLIST

window.addWishlist =
function(product){

  let wishlist =
  JSON.parse(
    localStorage.getItem(
      'wishlist'
    )
  ) || []

  wishlist.push(product)

  localStorage.setItem(
    'wishlist',
    JSON.stringify(wishlist)
  )

  showNotification(
    'Added to wishlist ❤️'
  )

}


// START

getProducts()
