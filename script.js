let temp = document.getElementById("inp-F");
let output = document.getElementById("out");
let btn = document.getElementById("btn-con");

btn.addEventListener("click", runconv);

function runconv() {
  let f = Number(temp.value);

  let out = ((f - 32) * 5) / 9;
  out = Math.round(out);

  output.textContent = out;
  btn.style.backgroundColor = "#26d978";
  temp.value = "";
  document.getElementById(
    "img"
  ).innerHTML = `<img src="imgs/download (1).png" alt="" id="th" />`;
}
