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
        'productName'
      ).value

      const price =
      document.getElementById(
        'productPrice'
      ).value

      const image =
      document.getElementById(
        'productImage'
      ).value

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

        alert(error.message)

      }else{

        alert(
          'Product uploaded'
        )

        window.location.href =
        'products.html'
      }

    }
  )

}
