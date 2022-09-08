
function carregar(){
    var msg = window.document.getElementById("box-hora")
    var foto = window.document.getElementById("box-img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são: ${hora} horas`
    if(hora >= 0 && hora < 12){
        foto.innerHTML = "<img src='imagens/dia.jpg' alt='' id='foto'>"
    }else if (hora >= 12 && hora <= 18){
        foto.innerHTML = "<img src='imagens/tarde.jpg' alt='' id='foto'>"
    }else{
        foto.innerHTML = "<img src='imagens/noite.jpg' alt='' id='foto'>"
        window.document.getElementsByTagName("body")[0].style.background="gray"
    }
}