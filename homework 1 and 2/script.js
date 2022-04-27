
//homework 1. . Create a page which contains a button. By clicking on that button current datetime
// should appear on the right of the button. Style html by yourself.
const newDateTime = new Date();
const navTime = document.querySelector("#navTime");

//buttonShowTime
const buttonshowTime = document.querySelector("#showTime");
buttonshowTime.addEventListener("mouseenter", () => {
  buttonshowTime.style.backgroundColor = "blue"
  buttonshowTime.style.color = "aqua"
})
buttonshowTime.addEventListener("mouseleave", () => {
  buttonshowTime.style.background = "";
  buttonshowTime.style.color = "blue"
})

buttonshowTime.onclick = () => {
  navTime.innerHTML = `${newDateTime}`;

}
//buttonCloseTime
const buttonCloseTime = document.querySelector("#closeTime");
buttonCloseTime.onclick = () => {
  navTime.innerHTML = "Time and Date"
}
buttonCloseTime.addEventListener("mouseenter", () => {
  buttonCloseTime.style.color = "aqua";
  buttonCloseTime.style.backgroundColor = "blue";
})
buttonCloseTime.addEventListener("mouseleave",() => {
  buttonCloseTime.style.color = "blue";
  buttonCloseTime.style.backgroundColor = ""
})


// Homework 2. Create a page which contains an input. When entering a symbol, the same text should
// be presented under the input in parallel.



const text = document.querySelector("#text");
const printText = document.querySelector("#printText");
const blokFormReset = document.querySelector("#blokForm__reset")
text.addEventListener("keyup", function(val) {
  printText.innerHTML = val.target.value;
})

blokFormReset.onclick = () => {
  printText.innerHTML = ""


}

blokFormReset.addEventListener("mouseenter", () => {

  blokFormReset.style.color = "aqua";
  blokFormReset.style.backgroundColor = "blue"
})

blokFormReset.addEventListener("mouseleave", () => {
  blokFormReset.style.color= "blue";
  blokFormReset.style.backgroundColor = ""
})


