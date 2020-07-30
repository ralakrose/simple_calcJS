function display(num){
   document.getElementById("numinput").value = document.getElementById("numinput").value+num;
}
function equals(){
    let ans = document.getElementById("numinput").value
    if(ans){
    document.getElementById("numinput").value=eval(ans);
    }
}
function clear(){
    document.getElementById("numinput").value ="";
}
function backspace(){
    let disp = document.getElementById("numinput").value;
    document.getElementById("numinput").value=disp.substring(0,disp.length-1);
}