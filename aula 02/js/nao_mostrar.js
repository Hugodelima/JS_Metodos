(function(){
    const nome = null
    const padrao = document.querySelector(".top p")

    if(nome){
        padrao.innerHTML = padrao.textContent + '<b>' + nome + '</b>'
    }else{
        padrao.parentElement.style.display ='none'
    }

})()