Function(element,params){
    let date = new Date();
    date.setMonth(date.getMonth()-1)
    document.getElementById("ContentPlaceHolder1_txtFechaDesde").value = "01"+"-"+ String(date.getMonth()).padStart(2,'0')+ "-" + String(date.getFullYear());
}  