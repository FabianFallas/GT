function(element,CuentaBancaria){
    var x = document.getElementById('ContentMantBody_ddlNumCtaBancaria');
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
            if (matrix[i][0].includes(CuentaBancaria)) {
                valueX = matrix[i][0];
            }
            
        }
        console.log(valueX);
    return valueX;
    //x.value = valueX;
}