function(element,Moneda){
    var x = document.getElementById('ContentMarcoBody_ddlMonedas');
         Moneda = Moneda.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
         Moneda = Moneda.toUpperCase();
         let matrix = [];
         let valueX = "";
         //alert(Moneda)
         for (let i = 0; i < x.length; i++) {
             let txt = [];
             txt[txt.length] = x[i].text;
             txt[txt.length] = x[i].value;
             matrix[matrix.length] = txt;
        } 
        console.log(matrix);
        for(let i = 0; i < matrix.length; i++){
            if (matrix[i][0] == Moneda) {
                valueX = matrix[i][1];
            }
            
        }
        console.log(valueX);
    x.value = valueX;
}