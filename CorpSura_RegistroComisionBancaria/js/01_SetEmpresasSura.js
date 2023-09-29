function(element,NombreEmpresaEnEjecucion){
    var x = document.getElementById('ContentContenido_ddlEmpresa');
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
            if (matrix[i][0] == NombreEmpresaEnEjecucion) {
                valueX = matrix[i][1];
            }
            
        }
        console.log(valueX);
    x.value = valueX;
}