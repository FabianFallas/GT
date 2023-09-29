function(element,MonedaparaSeleccion){
    var x = document.getElementById('cbMoneda');
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
            if (matrix[i][1].includes(MonedaparaSeleccion)) {
                valueX = matrix[i][0];
            }
            
        }
        console.log(valueX);

    return valueX;
    //x.value = valueX;
}