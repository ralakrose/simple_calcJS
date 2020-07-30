/*Calculator input */
function display(num){
   document.getElementById("numinput").value = document.getElementById("numinput").value+num;
}
/*Result after performing operation */
function equals(){
    let ans = document.getElementById("numinput").value
    if(ans){
    document.getElementById("numinput").value=eval(ans);
    }
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