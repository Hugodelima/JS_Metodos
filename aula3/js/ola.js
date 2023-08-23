const li = document.getElementById("txtEmail")
const msg = document.getElementById("feeds")

function email(){
    let mail = li.value
    msg.innerHTML = `O e-mail ${mail} foi cadastado com sucesso`
}