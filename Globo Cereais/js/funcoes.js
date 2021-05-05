function Reajustar(ID){
    var id = ID;
    if(frames.innerWidth < 1280){
        document.getElementById(id).style.width = "1280px"
    }else{
        document.getElementById(id).style.width = "100%"
    }
}   

function Scroll(Y){

    for( i = 0 ; i < Y; i++){
        window.scrollTo(0, i);
    }

}

function Enviar() {
    document.getElementById("NomeId").value;
    alert("Nome:   "+document.getElementById("NomeId").value+"\n"+ 
          "Email:  "+document.getElementById("EmailID").value+"\n"+
          "Mensagem:  "+document.getElementById("MensagemID").value);

}