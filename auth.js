import { supabase }
from './supabase.js'

const loginForm =
document.getElementById('loginForm')

const registerForm =
document.getElementById('registerForm')

const logoutBtn =
document.getElementById('logoutBtn')


// REGISTER

if(registerForm){

  registerForm.addEventListener(
    'submit',
    async(e)=>{

      e.preventDefault()

      const email =
      document.getElementById(
        'email'
      ).value

      const password =
      document.getElementById(
        'password'
      ).value

      const {
        error
      } = await supabase.auth.signUp({
        email,
        password
      })

      if(error){
        alert(error.message)
      }else{
        alert('Register berhasil')

        window.location.href =
        'login.html'
      }

    }
  )
}


// LOGIN

if(loginForm){

  loginForm.addEventListener(
    'submit',
    async(e)=>{

      e.preventDefault()

      const email =
      document.getElementById(
        'email'
      ).value

      const password =
      document.getElementById(
        'password'
      ).value

      const {
        error
      } =
      await supabase.auth.signInWithPassword({
        email,
        password
      })

      if(error){

        alert(error.message)

      }else{

        alert('Login berhasil')

        window.location.href =
        'dashboard.html'
      }

    }
  )
}


// SESSION LOGIN

const {
  data: { session }
} =
await supabase.auth.getSession()

if(
  !session &&
  window.location.pathname.includes(
    'dashboard.html'
  )
){
  window.location.href =
  'login.html'
}


// LOGOUT

if(logoutBtn){

  logoutBtn.addEventListener(
    'click',
    async()=>{

      await supabase.auth.signOut()

      alert('Logout berhasil')

      window.location.href =
      'login.html'
    }
  )
}
