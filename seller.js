import { supabase }
from './supabase.js'

const uploadForm =
document.getElementById(
  'uploadForm'
)

uploadForm.addEventListener(
  'submit',
  async(e)=>{

    e.preventDefault()

    const name =
    document.getElementById(
      'name'
    ).value

    const price =
    document.getElementById(
      'price'
    ).value

    const image =
    document.getElementById(
      'image'
    ).value

    const {
      data,
      error
    } = await supabase
    .from('products')
    .insert([
      {
        name,
        price,
        image
      }
    ])
    .select()

    if(error){

      console.log(error)

      alert(
        'Upload gagal ❌'
      )

    }else{

      alert(
        'Produk berhasil upload 🔥'
      )

      window.location.href =
      'products.html'

    }

  }
)
