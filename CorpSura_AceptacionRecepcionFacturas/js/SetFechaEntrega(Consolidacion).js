function(element,params){
    let date = new Date();
    document.getElementById("ContentMantBody_txtFechaEntrega").value = String("01" +"/"+ String(date.getMonth()+1).padStart(2,'0')+ "/" +date.getFullYear());
}