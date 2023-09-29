function(element,params){
    let date = new Date();
    document.getElementById("ContentMantBody_txtFechaProceso").value = String("01" +"/"+ String(date.getMonth()+1).padStart(2,'0')+ "/" +date.getFullYear());
}