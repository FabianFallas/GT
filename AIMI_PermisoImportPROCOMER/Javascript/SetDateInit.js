function(element,params){
    let date = new Date();
    document.getElementById("MainContent_GeneralDataEntryOrExitDate_component").value = String(date.getDate()).padStart(2,'0') + "/" + String(date.getMonth()+1).padStart(2,'0') + "/" + String(date.getFullYear());
//String(date.getMonth()+1).padStart(2,'0')
}