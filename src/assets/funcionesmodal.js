//inicializacion del modal
function opengenerallmessagemodal(message){
    document.querySelector("#pmessagetext").innerHTML = message;
    let elem = document.querySelector("#modal-general-message");
    var instance = M.Modal.getInstance(elem);
    instance.open();
}