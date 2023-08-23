(function(){
    const nome = null
    const padrao = document.querySelector(".top p")

    if(nome){
        padrao.innerHTML = padrao.textContent + '<b>' + nome + '</b>'
    }else{
        padrao.remove()
    }
    console.log(padrao)

})()