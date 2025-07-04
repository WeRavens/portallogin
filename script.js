
const benar="1111";
function loginn() {const pass=document.getElementById("password").value;
   if (pass === benar){
    document.querySelector(".containerl").style.display="none";
    document.querySelector(".maincontainer").style.display="flex"
}
else {
    alert ("Auto Detect>> YOU NOT ALLOWED")
}
}