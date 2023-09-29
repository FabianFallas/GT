function(element,BancoEnEjecucion){
    //alert(BancoEnEjecucion)
    var x = document.getElementById('ContentMantBody_ddlBanco');
    //alert("DefineMatrix");
         let matrix = [];
         let valueX = "";
         //alert("DefineTamao");
         for (let i = 0; i < x.length; i++) {
             let txt = [];
             txt[txt.length] = x[i].text;
             txt[txt.length] = x[i].value;
             matrix[matrix.length] = txt;
        } 
        //alert(matrix);
        for(let i = 0; i < matrix.length; i++){
            if (matrix[i][0].includes(BancoEnEjecucion)) {
                valueX = matrix[i][0];
            }
            
        }
        //alert(valueX)
        console.log(valueX);
    //x.value = valueX;
    return valueX;
}