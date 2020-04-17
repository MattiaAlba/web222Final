var mydiv = document.getElementById("orderNumDIV");
var check = document.getElementById("specialissue");

function show(){
if(check.checked){
    mydiv.style.display = 'inline';
}
}

function hide(){
    mydiv.style.display = '';
}
