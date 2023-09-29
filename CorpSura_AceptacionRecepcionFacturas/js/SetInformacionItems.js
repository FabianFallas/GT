/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// REVISA CASILLA DEL ITEM
function checkItemInTable(element, text) {
    alert("Entro")
    let cantRows = document.getElementById("ContentMantBody_GridView1").rows.length - 1;
    let codesArray = textProc(text);
    for (let i = 0; i < cantRows; i++) {
        let id = "ContentMantBody_GridView1_txtCodInv_" + i;
        let itemToValidate = document.getElementById(id).value;
        let valuesInArray = codeChecker(itemToValidate, codesArray);
        // if (!codeChecker(itemToValidate, codesArray)) {
        if (!valuesInArray[0]) {
            document.getElementById(id).value = "";
            document.getElementById("ContentMantBody_GridView1_txtCant_" + i).value = "";
            document.getElementById("ContentMantBody_GridView1_txtDesc_" + i).value = "";
            document.getElementById("ContentMantBody_GridView1_txtImpuesto_" + i).value = "";
            document.getElementById("ContentMantBody_GridView1_txtUni_" + i).value = "";
            document.getElementById("ContentMantBody_GridView1_txtPrecio_" + i).value = "";
            document.getElementById("ContentMantBody_GridView1_txtDescuentoGV_" + i).value = "";
            document.getElementById("ContentMantBody_GridView1_txtTotal_" + i).value = "";
        }
        else{
            document.getElementById("ContentMantBody_GridView1_txtCant_" + i).value = valuesInArray[1];
        }
    }


function codeChecker(itemCode, codesArray) {
    // let codesArray = ["02-002-0001", "02-002-0002"]
    for (let i = 0; i < codesArray.length; i++) {
        if (codesArray[i][1] == itemCode) {
            return [true, codesArray[i][9]];
        }
    }
    return [false, ""];
}
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// DE AQUI PARA ABAJO EXCEL

// ref: http://stackoverflow.com/a/1293163/2343
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.
function CSVToArray(strData, strDelimiter){
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");

    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp(
        (
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );


    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];

    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;


    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec( strData )){

        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[ 1 ];

        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
            ){

            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push( [] );

        }

        var strMatchedValue;

        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[ 2 ]){

            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );

        } else {

            // We found a non-quoted value.
            strMatchedValue = arrMatches[ 3 ];

        }


        // Now that we have our value string, let's add
        // it to the data array.
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    // Return the parsed data.
    return( arrData );
}


function textProc(text){
    let processedArray = CSVToArray(text);
    let firstExcel = [];
    let secondExcel = [];
    let index = 1;

    // console.log(processedArray);
    //Get data from first Excel Section
    for(; index < processedArray.length; index++){
        if(processedArray[index][0] == 'Segundo Excel'){
            index = index + 1;
            break;
        }
        else{
            firstExcel.push(processedArray[index]);
            firstExcel[index - 1].length = 7;
        }
    }

    //Get data from second Excel Section
    for(; index < processedArray.length; index++){
        secondExcel.push(processedArray[index]);
    }

    // Join array elements with same code
    for(let index1 = 0; index1 < secondExcel.length; index1++){
        for(let index2 = 0; index2 < firstExcel.length; index2++){
            if(secondExcel[index1][7] == firstExcel[index2][0]){
                secondExcel[index1].splice(0, 7);
                firstExcel[index2] = firstExcel[index2].concat(secondExcel[index1]);
                alert(firstExcel[index2])
            }
        }
    }

    // Update Units
    for(let i = 0; i < firstExcel.length; i++){
        if(firstExcel[i].length > 7){
            if(firstExcel[i][4] != firstExcel[i][8]){
                firstExcel[i][9] = parseInt(firstExcel[i][9]) * parseInt(firstExcel[i][6]);
                alert(parseInt(firstExcel[i][9]) * parseInt(firstExcel[i][6]))
            }
            else{
                firstExcel[i][9] = parseInt(firstExcel[i][9]);
            }
        }
    }

    let excelArray = []
    for(let i = 0; i < firstExcel.length; i++){
        if(firstExcel[i].length > 7){
            excelArray.push(firstExcel[i]);
        }
    }
    return excelArray;
}

//let text = "Codigo Cabis,Item,Unidades de la Empresa,Proveedor,Empresa,,,\r\n123,02-002-0001,Litro,1,25,,,\r\n456,02-002-0002,UND,1,1,,,\r\n789,02-002-0003,Litro,1,10,,,\r\n124,02-002-0004,Metros,1,1,,,\r\n159,02-002-0005,UND,1,4,,,\r\n458,02-002-0006,UND,1,4,,,\r\n852,02-002-0007,Litros,1,1,,,\r\nSegundo Excel,,,,,,,\r\n,,,,,123,UND,5\r\n,,,,,789,Litro,3";
// checkItemInTable(text); //MAIN
// console.log(textProc(text)); // OBTIENE EL ARREGLO CON LA VARA BONITA

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// Get initial values
function getValuesInTable() {
    let cantRows = document.getElementById("ContentMantBody_GridView1").rows.length - 1;
    let arrayPrevVal = [];
    for (let i = 0; i < cantRows; i++) {
        arrayPrevVal.push(parseInt(document.getElementById("ContentMantBody_GridView1_txtCant_" + i).value));
    }
    return arrayPrevVal
}

return "2";
// console.log(getValuesInTable());
}