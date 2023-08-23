(function(){
    const nome = 'novo fulano'
    

    if(nome){
        const novoElemento = document.createElement('div')
        novoElemento.className = "top"
        novoElemento.innerHTML = `<p> Olá, <b> $(nome) </b></p>`

        const pai = document.querySelector(".novo")
        pai.insertBefore(novoElemento, pai.firstElementChild)
    }

})()   