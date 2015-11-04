/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Name: Phuminvibol Lee
// Javascript file that generate the table when submit is click

// I could have just done everything in one function but for the sake of code organization, i splitted into two functions
function buildMultiplicationTable() {
    var horStart = document.getElementById("horizontalStart").value;
    var horEnd = document.getElementById("horizontalEnd").value;

    var vertStart = document.getElementById("verticalStart").value;
    var vertEnd = document.getElementById("verticalEnd").value;
    
    buildTable(horStart, horEnd, vertStart, vertEnd);
}

//this is the core function that builds the table
function buildTable(hs, he, vs, ve){
    // This code was taken from stackoverflow. It is an equivilent of string.Format() in C#
    if (!String.format) {
        String.format = function (format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'
                        ? args[number]
                        : match
                        ;
            });
        };
    }
    //************************************************************************//
    
    
    var tableStructure = "<table id='table1'>\n\
{0}\n\
</table>";
    var row = "<tr>\n\
{0}\n\
</tr>\n\
";
    var down = "<td>\n\
{0}\n\
</td>\n\
";
//    alert(tableStructure);


    var tr = "<tr id='firstrow'><td></td>";
    var firstRow = "";
    for(var k = vs; k <= ve; k++)
    {
        firstRow += String.format(down, k);
    }
    tr += firstRow + "</tr>";
    
    for(var i = hs; i <= he; i++){
        var td = "<td>" + i + "</td>";
        for(var j = vs; j <= ve; j++){
            td += String.format(down, i * j);
        }
        tr += String.format(row, td);
    }
    
    
    var table = String.format(tableStructure, tr);
    //alert(table);
    document.getElementById( "mulTable" ).innerHTML = table;
    
}
