const toast = document.createElement('div')

toast.className = 'toast'

document.body.appendChild(toast)

function showToast(message){

  toast.innerText = message

  toast.style.display = 'block'

  setTimeout(()=>{

    toast.style.display = 'none'

  },3000)

}

window.showToast = showToast


// DARK MODE SAVE

const savedTheme =
localStorage.getItem('theme')

if(savedTheme === 'light'){

  document.body.classList.add(
    'light-mode'
  )

}

const themeToggle =
document.getElementById(
  'themeToggle'
)

if(themeToggle){

  themeToggle.addEventListener(
    'click',
    ()=>{

      document.body.classList.toggle(
        'light-mode'
      )

      if(
        document.body.classList.contains(
          'light-mode'
        )
      ){

        localStorage.setItem(
          'theme',
          'light'
        )

      }else{

        localStorage.setItem(
          'theme',
          'dark'
        )

      }

    }
  )

}
