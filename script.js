const placeholderText = "Masukkan Password";
const input = document.getElementById("passwd");

let index = 0;
function typePlaceholder() {
  if (index <= placeholderText.length) {
    input.setAttribute("placeholder", placeholderText.substring(0, index));
    index++;
    setTimeout(typePlaceholder, 100);
  }
}
typePlaceholder(); // Jalankan efek saat halaman dimuat


function loginn() {
  const passwordd= document.getElementById("passwd").value;
  if (passwordd === "222"){
    alert("dcdi")
  }
  else{
    alert("dcd")
  }
}
