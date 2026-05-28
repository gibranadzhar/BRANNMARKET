import { supabase }
from './supabase.js'

const uploadForm =
document.getElementById(
  'uploadForm'
)

if(uploadForm){

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

      if(
        !name ||
        !price ||
        !image
      ){

        alert(
          'Isi semua data'
        )

        return
      }

      const {
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

      if(error){

        console.log(error)

        alert(
          'Upload gagal ❌'
        )

      }else{

        alert(
          'Produk berhasil upload 🔥'
        )

        uploadForm.reset()

      }

    }
  )

}
