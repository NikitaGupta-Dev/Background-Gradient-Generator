let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let leftColor = "#BF6E4A";
let rightColor = "#860A7B";

let h3 = document.querySelector("h3");
h3.style.display = "block";


function UpdateGradient(){
h3.textContent = `background-image: linear-gradient(to right,${leftColor}, ${rightColor})`;
   
    body.style.backgroundImage = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
}


// HTML colors hex format mein hote hain: #RRGGBB
// RR, GG, BB har ek 00–FF (0–255) range mein hote hain
// 256 (Red) × 256 (Green) × 256 (Blue) = 16,777,216 colors


function changeColor(){
 leftColor = "#" + Math.floor (Math.random()*16777215).toString(16);
 btn1.style.backgroundColor = leftColor;
 btn1.textContent = leftColor;
    UpdateGradient();

}


function changeColor2() {
 rightColor = "#" + Math.floor(Math.random()*16777215).toString(16);
 btn2.style.backgroundColor = rightColor;
 btn2.textContent = rightColor;

 UpdateGradient();
}


btn1.addEventListener("click", changeColor);
btn2.addEventListener("click", changeColor2);

UpdateGradient();

h2.addEventListener("click",()=>{
    alert("copied " + h3.innerText);
    navigator.clipboard.writeText(h3.innerText)
  
});