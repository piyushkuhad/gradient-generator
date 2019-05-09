let col1 = document.querySelector(".color1"),
	  col2 = document.querySelector(".color2"),
	  show_val = document.querySelector("p"),
	  body = document.getElementById("gradient"),
	  s_value = document.getElementById("sel"),
	  btn = document.getElementById("btn"),
	  disc = document.getElementById("disco"),
	  disc_stop = document.querySelector(".close"),
	  button = document.getElementsByTagName("button"),
	  si_disc;

dir_val =() => {
  let dir = "to right";
  if(s_value.value == "to left"){
    dir="to left";
  }
  return dir;
}

//Change button color
btnColor = () => {
  for(let i=0; i < button.length; i++) {
	button[i].style.background = body.style.background;
  }
}

setGradient = () => {
  let b = dir_val();
  body.style.background =  `linear-gradient( ${b}, ${col1.value}, ${col2.value})`;
  //show_val.innerHTML = body.style.background;
  show_val.textContent = `background-image: ${body.style.background};`;
  btnColor();
}

//Randomize
colRandom = (min,max) => {
  return Math.floor(Math.random() * (max-min+1)+min);
}

//RGB to HEX converter
componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//Gnerate random color codes
function random_ev(){
  let r1 = colRandom(0,255),
	  g1 = colRandom(0,255),
	  b1 = colRandom(0,255),
      r2 = colRandom(0,255),
      g2 = colRandom(0,255),
      b2 = colRandom(0,255);
	  b = dir_val();
  col1.value = rgbToHex(r1,g1,b1);
  col2.value = rgbToHex(r2,g2,b2);
  body.style.background = `linear-gradient( ${b}, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
  show_val.textContent = `background-image: ${body.style.background};`;
  btnColor();
}

disco = () => {
	si_disc = setInterval(function(){
		random_ev();
	},100);
	body.classList.add("disco-active");
}

disco_stop = () => {
	clearInterval(si_disc);
	body.classList.remove("disco-active");
}

setGradient();
col1.addEventListener("input", setGradient);
col2.addEventListener("input", setGradient);
s_value.addEventListener("input", setGradient);
btn.addEventListener("click", random_ev);
disc.addEventListener("click", disco);
disc_stop.addEventListener("click", disco_stop);