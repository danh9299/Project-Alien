//Nguyễn Duy Anh
//MSV: 205 1060 385
//Nền tảng phát triển Web
//Giảng viên: Kiều Tuấn Dũng

/*Program for alien default.html*/
console.log("This is the javascript for alien program");

let btn = document.getElementById("determine");
let result_img = document.getElementById("result-img");
let result = document.getElementById("final-result");

btn.addEventListener("click", Func1);

function Func1() {
  // Get answer from the 3 quests
  let ans1 = document.getElementById("quest-ans1").value;
  let ans2 = document.getElementById("quest-ans2").value;
  let ans3 = document.getElementById("quest-ans3").value;

  //Check answer then deliver the result + result_img
  //Result for an Alien
  if ((ans1 == 3) & (ans2 == 3) & (ans3 == 2)) {
    result_img.src = "img/cute-ufo-and-alien-cursor-pack.png";
    result.textContent = "You are an ALIEN for sure!";
    alert("NASA wants to know your location!");
  }
  //Result for a Bizarre
  else if ((ans1 == 2) & (ans2 == 1) & (ans3 == 3)) {
    result_img.src = "img/brizarre.jpg";
    result.textContent = "You definitely are a bizarre!";
    alert("You should meet a doctor to treat your craziness!");
  }
  //Result for a normal person
  else if ((ans1 == 1) & (ans2 == 2) & (ans3 == 1)) {
    result_img.src = "img/normal.jpg";
    result.textContent = "You are normal!";
    alert("Isn't it fun to do this test?");
  }
  //If the user chooses random answer, I will consider him as a bizarre!
  else {
    result_img.src = "img/brizarre.jpg";
    result.textContent = "You definitely are a bizarre!";
    alert("You should meet a doctor to treat your craziness!");
  }
}
