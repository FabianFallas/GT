Function(element,params){
    let date = new Date();
    date.setMonth(date.getMonth()-2)
    document.getElementById("dtFecIni").value = String(date.getFullYear())+"-"+ String(date.getMonth()).padStart(2,'0')+ "-" + "01";
}  