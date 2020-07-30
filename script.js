/*Calculator input */
function display(num){
   document.getElementById("numinput").value = document.getElementById("numinput").value+num;
}

/*Clear all content on the input area */
function clear(){
    document.getElementById("numinput").value ="";
}
/*Clear last entry*/
function backspace(){
    let disp = document.getElementById("numinput").value;
    document.getElementById("numinput").value=disp.substring(0,disp.length-1);
}
