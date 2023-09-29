function(element,FechaFactura){
    var x = document.getElementById('cbEjercicio');
         let matrix = [];
         let valueX = "";
         for (let i = 0; i < x.length; i++) {
             let txt = [];
             txt[txt.length] = x[i].text;
             txt[txt.length] = x[i].value;
             matrix[matrix.length] = txt;
        } 
        console.log(matrix);
        for(let i = 0; i < matrix.length; i++){
            if (matrix[i][0] == FechaFactura) {
                valueX = matrix[i][1];
            }
            
        }
        console.log(valueX);
    x.value = valueX;
}