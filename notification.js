function showNotification(message){

  const notif =
  document.createElement('div')

  notif.className =
  'notification'

  notif.innerText =
  message

  document.body.appendChild(
    notif
  )

  setTimeout(()=>{

    notif.remove()

  },3000)

}

window.showNotification =
showNotification
