//title and date
const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDate();
const year = today.getFullYear();

const correctDate = `${date}/${month}/${year}`
const main = document.querySelector(".main__date");
main.innerHTML = correctDate;


//graphics list
//li1
const li1 = document.querySelector(".li1");
li1.addEventListener("mouseenter", function() {
  li1.style.color = "red";
  li1.style.fontSize = "35px";
})

li1.addEventListener("mouseleave", () => {
  li1.style.color = "black";
  li1.style.fontSize = "30px";
})

li1.onclick = () => {
  li1.style.textDecoration = "line-through";
}
///li2
const li2 = document.querySelector(".li2");
li2.addEventListener("mouseenter", function() {
  li2.style.color = "red";
  li2.style.fontSize = "35px";
})

li2.addEventListener("mouseleave", () => {
  li2.style.color = "black";
  li2.style.fontSize = "30px";
})

li2.onclick = () =>{
  if(li1.style.textDecoration === "line-through") {
    li2.style.textDecoration = "line-through"
  }
}
//li3
const li3 = document.querySelector(".li3");
li3.addEventListener("mouseenter", function() {
  li3.style.color = "red";
  li3.style.fontSize = "35px";
})

li3.addEventListener("mouseleave", () => {
  li3.style.color = "black";
  li3.style.fontSize = "30px";
})
li3.onclick = () =>{
  if(li2.style.textDecoration === "line-through") {
    li3.style.textDecoration = "line-through"
  }
}
//li4
const li4 = document.querySelector(".li4");
li4.addEventListener("mouseenter", function() {
  li4.style.color = "red";
  li4.style.fontSize = "35px";
})

li4.addEventListener("mouseleave", () => {
  li4.style.color = "black";
  li4.style.fontSize = "30px";
})

li4.onclick = () =>{
  if(li3.style.textDecoration === "line-through") {
    li4.style.textDecoration = "line-through"
  }
}
//li5
const li5 = document.querySelector(".li5");
li5.addEventListener("mouseenter", function() {
  li5.style.color = "red";
  li5.style.fontSize = "35px";
})

li5.addEventListener("mouseleave", () => {
  li5.style.color = "black";
  li5.style.fontSize = "30px";
})
li5.onclick = () =>{
  if(li4.style.textDecoration === "line-through") {
    li5.style.textDecoration = "line-through"
  }
}
//li6
const li6 = document.querySelector(".li6");
li6.addEventListener("mouseenter", function() {
  li6.style.color = "red";
  li6.style.fontSize = "35px";
})

li6.addEventListener("mouseleave", () => {
  li6.style.color = "black";
  li6.style.fontSize = "30px";
})
li6.onclick = () =>{
  if(li5.style.textDecoration === "line-through") {
    li6.style.textDecoration = "line-through"
  }
}
//li7
const li7 = document.querySelector(".li7");
li7.addEventListener("mouseenter", function() {
  li7.style.color = "red";
  li7.style.fontSize = "35px";
})

li7.addEventListener("mouseleave", () => {
  li7.style.color = "black";
  li7.style.fontSize = "30px";
})

li7.onclick = () =>{
  if(li6.style.textDecoration === "line-through") {
    li7.style.textDecoration = "line-through"
  }
}

























