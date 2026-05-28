const cartItems =
document.getElementById(
  'cartItems'
)

const cartTotal =
document.getElementById(
  'cartTotal'
)

let cart =
JSON.parse(
  localStorage.getItem('cart')
) || []

function renderCart(){

  cartItems.innerHTML = ''

  let total = 0

  cart.forEach((item,index)=>{

    total += Number(item.price)

    cartItems.innerHTML += `

    <div class="cart-card">

      <img src="${
        item.image
      }">

      <div>

        <h2>
          ${
            item.name
          }
        </h2>

        <p>
          Rp ${
            item.price
          }
        </p>

        <button
        onclick="removeCart(${index})"
        class="btn danger">

          Remove

        </button>

      </div>

    </div>

    `
  })

  cartTotal.innerText =
  `Rp ${total}`

}

function removeCart(index){

  cart.splice(index,1)

  localStorage.setItem(
    'cart',
    JSON.stringify(cart)
  )

  renderCart()

}

renderCart()


document.getElementById(
  'checkoutBtn'
).addEventListener(
  'click',
  ()=>{

    alert(
      'Checkout berhasil 🔥'
    )

    localStorage.removeItem(
      'cart'
    )

    location.reload()

  }
)
