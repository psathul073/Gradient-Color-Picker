// By ATHUL P.S
// Gradient Color picker Tool.
// Gradient Random Color Generator Tool.
// I use to simple variable names,please don't mind that's funny names.

// Slider 
const sliderProperty = {
  fill: "#00AEFF",
  background: "#e0e2e9"
};
// Range slider selector
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".pct__text");
// Using Event Listener to apply the fill and also change the value of the text.
slider.querySelector("#pct").addEventListener("input", (event) => {
  sliderValue.setAttribute("data-pct", event.target.value);
  applyFill0(event.target);
});
// Selecting the range input and passing it in the applyFill function.
applyFill0(slider.querySelector("#pct"));
// This function is responsible to create the trailing color and setting the fill.
function applyFill0(slider) {
  const Percentage =
    (100 * (slider.value - slider.min)) / (slider.max - slider.min);
  const Background = `linear-gradient(90deg, ${sliderProperty.fill} ${Percentage}%, ${
    sliderProperty.background
  } ${Percentage + 0.1}%)`;
  slider.style.background = Background;
  sliderValue.setAttribute("data-pct", slider.value);
}
// Disable enable functions
document.getElementById("copy").disabled = true;
document.getElementById("options").disabled = true;
// Copy Text Change function.
$("#copy").text("Copy");
// textarea 1 border color
const textBtn1 = document.getElementById("leftT");
// textarea 2 border color
const textBtn2 = document.getElementById("topT");
// textarea 3 border color
const textBtn3 = document.getElementById("bT");
// textarea 4 border color
const textBtn4 = document.getElementById("tLT");
// textarea 5 border color
const textBtn5 = document.getElementById("tRT");
// textarea 6 border color
const textBtn6 = document.getElementById("bLT");
// textarea 7  color
const textBtn7 = document.getElementById("bRT");
// textarea 8 border color
const textBtn8 = document.getElementById("rightT");
// Text 1 info showed after generate button is clicked
const copyInfo1 = document.querySelector(".Copy__info.right1");
// Text 1 appear after copy button is clicked
const copiedInfo1 = document.querySelector(".Copy__info.left1");
// Text 2 info showed after generate button is clicked
const copyInfo2 = document.querySelector(".Copy__info.right2");
// Text 2 appear after copy button is clicked
const copiedInfo2 = document.querySelector(".Copy__info.left2");
// Text 3 info showed after generate button is clicked
const copyInfo3 = document.querySelector(".Copy__info.right3");
// Text 3 appear after copy button is clicked
const copiedInfo3 = document.querySelector(".Copy__info.left3");
// Text 4 info showed after generate button is clicked
const copyInfo4 = document.querySelector(".Copy__info.right4");
// Text 4 appear after copy button is clicked
const copiedInfo4 = document.querySelector(".Copy__info.left4");
// Text 5 info showed after generate button is clicked
const copyInfo5 = document.querySelector(".Copy__info.right5");
// Text 5 appear after copy button is clicked
const copiedInfo5 = document.querySelector(".Copy__info.left5");
// Text 6 info showed after generate button is clicked
const copyInfo6 = document.querySelector(".Copy__info.right6");
// Text 6 appear after copy button is clicked
const copiedInfo6 = document.querySelector(".Copy__info.left6");
// Text 7 info showed after generate button is clicked
const copyInfo7 = document.querySelector(".Copy__info.right7");
// Text 7 appear after copy button is clicked
const copiedInfo7 = document.querySelector(".Copy__info.left7");
// Text 8 appear after copy button is clicked
const copiedInfo8 = document.querySelector(".Copy__info.left8");

// Function Hide Show to  checkbox is checked
$(function () {
  $("#options").click(function () {
    if ($(this).is(":checked")) {
      $("#show").show("slow");
      // Copy info show 1
      copyInfo1.style.transform = "translateY(200%)";
      copyInfo1.style.opacity = "0.50";
      copiedInfo1.style.transform = "translateY(200%)";
      copiedInfo1.style.opacity = "0";
      // Copy info show 2
      copyInfo2.style.transform = "translateY(200%)";
      copyInfo2.style.opacity = "0.50";
      copiedInfo2.style.transform = "translateY(200%)";
      copiedInfo2.style.opacity = "0";
      // Copy info show 3
      copyInfo3.style.transform = "translateY(200%)";
      copyInfo3.style.opacity = "0.50";
      copiedInfo3.style.transform = "translateY(200%)";
      copiedInfo3.style.opacity = "0";
      // Copy info show 4
      copyInfo4.style.transform = "translateY(200%)";
      copyInfo4.style.opacity = "0.50";
      copiedInfo4.style.transform = "translateY(200%)";
      copiedInfo4.style.opacity = "0";
      // Copy info show 5
      copyInfo5.style.transform = "translateY(200%)";
      copyInfo5.style.opacity = "0.50";
      copiedInfo5.style.transform = "translateY(200%)";
      copiedInfo5.style.opacity = "0";
      // Copy info show 6
      copyInfo6.style.transform = "translateY(200%)";
      copyInfo6.style.opacity = "0.50";
      copiedInfo6.style.transform = "translateY(200%)";
      copiedInfo6.style.opacity = "0";
      // Copy info show 7
      copyInfo7.style.transform = "translateY(200%)";
      copyInfo7.style.opacity = "0.50";
      copiedInfo7.style.transform = "translateY(200%)";
      copiedInfo7.style.opacity = "0";
      // Copy info hide 8
      copiedInfo8.style.transform = "translateY(200%)";
      copiedInfo8.style.opacity = "0";
      // Button border Color
      textBtn1.style.borderColor = "#00AEFF";
      textBtn2.style.borderColor = "#00AEFF";
      textBtn3.style.borderColor = "#00AEFF";
      textBtn4.style.borderColor = "#00AEFF";
      textBtn5.style.borderColor = "#00AEFF";
      textBtn6.style.borderColor = "#00AEFF";
      textBtn7.style.borderColor = "#00AEFF";
      textBtn8.style.borderColor = "#00AEFF";
    } else {
      $("#show").hide("slow");
    }
  });
});

// Copy button 0
function copyEvent0() {
  let R = document.getElementById("rightT");
  R.select();
  document.execCommand("copy");
  copiedInfo8.style.transform = "translateY(0%)";
  copiedInfo8.style.opacity = "0.90";
  textBtn8.style.borderColor = "green";
  textBtn8.style.color = "#d3e7f0";
  $("#copy").text("Copied");
}
// Copy button 1
function copyEvent1() {
  let L = document.getElementById("leftT");
  L.select();
  document.execCommand("copy");
  copyInfo1.style.transform = "translateY(200%)";
  copyInfo1.style.opacity = "0";
  copiedInfo1.style.transform = "translateY(0%)";
  copiedInfo1.style.opacity = "0.90";
  textBtn1.style.borderColor = "green";
  textBtn1.style.color = "#d3e7f0";
}
// Copy button 2
function copyEvent2() {
  let T = document.getElementById("topT");
  T.select();
  document.execCommand("copy");
  copyInfo2.style.transform = "translateY(200%)";
  copyInfo2.style.opacity = "0";
  copiedInfo2.style.transform = "translateY(0%)";
  copiedInfo2.style.opacity = "0.90";
  textBtn2.style.borderColor = "green";
  textBtn2.style.color = "#d3e7f0";
}
// Copy button 3
function copyEvent3() {
  let B = document.getElementById("bT");
  B.select();
  document.execCommand("copy");
  copyInfo3.style.transform = "translateY(200%)";
  copyInfo3.style.opacity = "0";
  copiedInfo3.style.transform = "translateY(0%)";
  copiedInfo3.style.opacity = "0.90";
  textBtn3.style.borderColor = "green";
  textBtn3.style.color = "#d3e7f0";
}
// Copy button 4
function copyEvent4() {
  let TL = document.getElementById("tLT");
  TL.select();
  document.execCommand("copy");
  copyInfo4.style.transform = "translateY(200%)";
  copyInfo4.style.opacity = "0";
  copiedInfo4.style.transform = "translateY(0%)";
  copiedInfo4.style.opacity = "0.90";
  textBtn4.style.borderColor = "green";
  textBtn4.style.color = "#d3e7f0";
}
// Copy button 5
function copyEvent5() {
  let TR = document.getElementById("tRT");
  TR.select();
  document.execCommand("copy");
  copyInfo5.style.transform = "translateY(200%)";
  copyInfo5.style.opacity = "0";
  copiedInfo5.style.transform = "translateY(0%)";
  copiedInfo5.style.opacity = "0.90";
  textBtn5.style.borderColor = "green";
  textBtn5.style.color = "#d3e7f0";
}
// Copy button 6
function copyEvent6() {
  let BL = document.getElementById("bLT");
  BL.select();
  document.execCommand("copy");
  copyInfo6.style.transform = "translateY(200%)";
  copyInfo6.style.opacity = "0";
  copiedInfo6.style.transform = "translateY(0%)";
  copiedInfo6.style.opacity = "0.90";
  textBtn6.style.borderColor = "green";
  textBtn6.style.color = "#d3e7f0";
}
// Copy button 7
function copyEvent7() {
  let BR = document.getElementById("bRT");
  BR.select();
  document.execCommand("copy");
  copyInfo7.style.transform = "translateY(200%)";
  copyInfo7.style.opacity = "0";
  copiedInfo7.style.transform = "translateY(0%)";
  copiedInfo7.style.opacity = "0.90";
  textBtn7.style.borderColor = "green";
  textBtn7.style.color = "#d3e7f0";
}

//Variable Declarations
var pctSlider = document.getElementById("pct");
//Color Picker
var Picker0 = document.querySelector("#picker1");
var Picker1 = document.querySelector("#picker2");
//Variable Right Background And Text
var RightC = document.getElementById("gColor1");
var RightT = document.getElementById("rightT");
//Variable Left Background And Text
var LeftC = document.getElementById("gColor2");
var LeftT = document.getElementById("leftT");
//Variable Top Background And Text
var TopC = document.getElementById("gColor3");
var TopT = document.getElementById("topT");
//Variable Bottom Background And Text
var BmC = document.getElementById("gColor4");
var BmT = document.getElementById("bT");
//Variable Top Left Background And Text
var TLC = document.getElementById("gColor5");
var TLT = document.getElementById("tLT");
//Variable Top Right Background And Text
var TRC = document.getElementById("gColor6");
var TRT = document.getElementById("tRT");
//Variable Bottom Left Background And Text
var BLC = document.getElementById("gColor7");
var BLT = document.getElementById("bLT");
//Variable Bottom Right Background And Text
var BRC = document.getElementById("gColor8");
var BRT = document.getElementById("bRT");
// Generator Button.
var button = document.querySelector("#Gen");
//Add Events
Picker0.addEventListener("input", SetGC);
Picker1.addEventListener("input", SetGC);
button.addEventListener("click", RandomGC);

// selected Gradient Color Functions
function SetGC() {
  //Copy Text Change
  $("#copy").text("Copy");
  //Disable Enable Functions.
  document.getElementById("options").disabled = false;
  document.getElementById("copy").disabled = false;
  // Variable define.
  var pct0 = pctSlider.value + "%";
  //Right Background And Text.
  RightC.style.background =
    "linear-gradient(to right, " +
    Picker0.value +
    " " +
    pct0 +
    ", " +
    Picker1.value +
    " 100%)";
  RightT.innerHTML = RightC.style.background + ";";
  //Left Background And Text
  LeftC.style.background =
    "linear-gradient(to left, " +
    Picker0.value +
    " " +
    pct0 +
    ", " +
    Picker1.value +
    " 100%)";
  LeftT.innerHTML = LeftC.style.background + ";";
  //Top Background And Text
  TopC.style.background =
    "linear-gradient(to top, " +
    Picker0.value +
    " " +
    pct0 +
    ", " +
    Picker1.value +
    " 100%)";
  TopT.innerHTML = TopC.style.background + ";";
  //Bottom Background And Text
  BmC.style.background =
    "linear-gradient(to bottom, " +
    Picker0.value +
    " " +
    pct0 +
    ", " +
    Picker1.value +
    " 100%)";
  BmT.innerHTML = BmC.style.background + ";";
  //Top Left Background And Text
  TLC.style.background =
    "linear-gradient(to top left, " +
    Picker0.value +
    " " +
    pct0 +
    ", " +
    Picker1.value +
    " 100%)";
  TLT.innerHTML = TLC.style.background + ";";
  //Top Right Background And Text
  TRC.style.background =
    "linear-gradient(to top right, " +
    Picker0.value +
    " " +
    pct0 +
    ", " +
    Picker1.value +
    " 100%)";
  TRT.innerHTML = TRC.style.background + ";";
  //Bottom Left Background And Text
  BLC.style.background =
    "linear-gradient(to bottom left, " +
    Picker0.value +
    " " +
    pct0 +
    ", " +
    Picker1.value +
    " 100%)";
  BLT.innerHTML = BLC.style.background + ";";
  //Bottom Right Background And Text
  BRC.style.background =
    "linear-gradient(to bottom right, " +
    Picker0.value +
    " " +
    pct0 +
    ", " +
    Picker1.value +
    " 100%)";
  BRT.innerHTML = BRC.style.background + ";";
  // Copy info show 1
  copyInfo1.style.transform = "translateY(200%)";
  copyInfo1.style.opacity = "0.50";
  copiedInfo1.style.transform = "translateY(200%)";
  copiedInfo1.style.opacity = "0";
  // Copy info show 2
  copyInfo2.style.transform = "translateY(200%)";
  copyInfo2.style.opacity = "0.50";
  copiedInfo2.style.transform = "translateY(200%)";
  copiedInfo2.style.opacity = "0";
  // Copy info show 3
  copyInfo3.style.transform = "translateY(200%)";
  copyInfo3.style.opacity = "0.50";
  copiedInfo3.style.transform = "translateY(200%)";
  copiedInfo3.style.opacity = "0";
  // Copy info show 4
  copyInfo4.style.transform = "translateY(200%)";
  copyInfo4.style.opacity = "0.50";
  copiedInfo4.style.transform = "translateY(200%)";
  copiedInfo4.style.opacity = "0";
  // Copy info show 5
  copyInfo5.style.transform = "translateY(200%)";
  copyInfo5.style.opacity = "0.50";
  copiedInfo5.style.transform = "translateY(200%)";
  copiedInfo5.style.opacity = "0";
  // Copy info show 6
  copyInfo6.style.transform = "translateY(200%)";
  copyInfo6.style.opacity = "0.50";
  copiedInfo6.style.transform = "translateY(200%)";
  copiedInfo6.style.opacity = "0";
  // Copy info show 7
  copyInfo7.style.transform = "translateY(200%)";
  copyInfo7.style.opacity = "0.50";
  copiedInfo7.style.transform = "translateY(200%)";
  copiedInfo7.style.opacity = "0";
  // Copy info hide 8
  copiedInfo8.style.transform = "translateY(200%)";
  copiedInfo8.style.opacity = "0";
  //textarea border and text color .
  textBtn1.style.borderColor = "#00AEFF";
  textBtn1.style.color = "white";
  textBtn2.style.borderColor = "#00AEFF";
  textBtn2.style.color = "white";
  textBtn3.style.borderColor = "#00AEFF";
  textBtn3.style.color = "white";
  textBtn4.style.borderColor = "#00AEFF";
  textBtn4.style.color = "white";
  textBtn5.style.borderColor = "#00AEFF";
  textBtn5.style.color = "white";
  textBtn6.style.borderColor = "#00AEFF";
  textBtn6.style.color = "white";
  textBtn7.style.borderColor = "#00AEFF";
  textBtn7.style.color = "white";
  textBtn8.style.borderColor = "#00AEFF";
  textBtn8.style.color = "white";
}
//Gradient Random Generate Function.
function RandomGC() {
  //Copy Text Change
  $("#copy").text("Copy");
  // Disable Enable Function
  document.getElementById("copy").disabled = false;
  document.getElementById("options").disabled = false;
  // Variables
  var A0 = Math.floor(Math.random() * 255);
  var B0 = Math.floor(Math.random() * 255);
  var C0 = Math.floor(Math.random() * 255);
  var A1 = Math.floor(Math.random() * 255);
  var B1 = Math.floor(Math.random() * 255);
  var C1 = Math.floor(Math.random() * 255);
  var RGB0 = "rgb(" + A0 + "," + B0 + "," + C0 + ")";
  var RGB1 = "rgb(" + A1 + "," + B1 + "," + C1 + ")";
  var pct = pctSlider.value + "%";
  //Right Background And Text.
  RightC.style.background =
    "linear-gradient(to right, " + RGB0 + " " + pct + "," + RGB1 + "100%)";
  RightT.innerHTML = RightC.style.background + ";";
  //Left Background And Text.
  LeftC.style.background =
    "linear-gradient(to left, " + RGB0 + " " + pct + ", " + RGB1 + "100%)";
  LeftT.innerHTML = LeftC.style.background + ";";
  //Top Background And Text.
  TopC.style.background =
    "linear-gradient(to top, " + RGB0 + " " + pct + ", " + RGB1 + "100%)";
  TopT.innerHTML = TopC.style.background + ";";
  //Bottom Background And Text.
  BmC.style.background =
    "linear-gradient(to bottom, " + RGB0 + " " + pct + ", " + RGB1 + "100%)";
  BmT.innerHTML = BmC.style.background + ";";
  //Top Left Background And Text.
  TLC.style.background =
    "linear-gradient(to top left, " + RGB0 + " " + pct + ", " + RGB1 + "100%)";
  TLT.innerHTML = TLC.style.background + ";";
  //Top Right Background And Text.
  TRC.style.background =
    "linear-gradient(to top right, " + RGB0 + " " + pct + ", " + RGB1 + "100%)";
  TRT.innerHTML = TRC.style.background + ";";
  //Bottom Left Background And Text.
  BLC.style.background =
    "linear-gradient(to bottom left, " +
    RGB0 +
    " " +
    pct +
    ", " +
    RGB1 +
    "100%)";
  BLT.innerHTML = BLC.style.background + ";";
  //Bottom Right Background And Text.
  BRC.style.background =
    "linear-gradient(to bottom right, " +
    RGB0 +
    " " +
    pct +
    ", " +
    RGB1 +
    "100%)";
  BRT.innerHTML = BRC.style.background + ";";
  // Copy info show 1
  copyInfo1.style.transform = "translateY(200%)";
  copyInfo1.style.opacity = "0.50";
  copiedInfo1.style.transform = "translateY(200%)";
  copiedInfo1.style.opacity = "0";
  // Copy info show 2
  copyInfo2.style.transform = "translateY(200%)";
  copyInfo2.style.opacity = "0.50";
  copiedInfo2.style.transform = "translateY(200%)";
  copiedInfo2.style.opacity = "0";
  // Copy info show 3
  copyInfo3.style.transform = "translateY(200%)";
  copyInfo3.style.opacity = "0.50";
  copiedInfo3.style.transform = "translateY(200%)";
  copiedInfo3.style.opacity = "0";
  // Copy info show 4
  copyInfo4.style.transform = "translateY(200%)";
  copyInfo4.style.opacity = "0.50";
  copiedInfo4.style.transform = "translateY(200%)";
  copiedInfo4.style.opacity = "0";
  // Copy info show 5
  copyInfo5.style.transform = "translateY(200%)";
  copyInfo5.style.opacity = "0.50";
  copiedInfo5.style.transform = "translateY(200%)";
  copiedInfo5.style.opacity = "0";
  // Copy info show 6
  copyInfo6.style.transform = "translateY(200%)";
  copyInfo6.style.opacity = "0.50";
  copiedInfo6.style.transform = "translateY(200%)";
  copiedInfo6.style.opacity = "0";
  // Copy info show 7
  copyInfo7.style.transform = "translateY(200%)";
  copyInfo7.style.opacity = "0.50";
  copiedInfo7.style.transform = "translateY(200%)";
  copiedInfo7.style.opacity = "0";
  // Copy info hide 8
  copiedInfo8.style.transform = "translateY(200%)";
  copiedInfo8.style.opacity = "0";
  // Textarea text and border Color
  textBtn1.style.borderColor = "#00AEFF";
  textBtn1.style.color = "white";
  textBtn2.style.borderColor = "#00AEFF";
  textBtn2.style.color = "white";
  textBtn3.style.borderColor = "#00AEFF";
  textBtn3.style.color = "white";
  textBtn4.style.borderColor = "#00AEFF";
  textBtn4.style.color = "white";
  textBtn5.style.borderColor = "#00AEFF";
  textBtn5.style.color = "white";
  textBtn6.style.borderColor = "#00AEFF";
  textBtn6.style.color = "white";
  textBtn7.style.borderColor = "#00AEFF";
  textBtn7.style.color = "white";
  textBtn8.style.borderColor = "#00AEFF";
  textBtn8.style.color = "white";
}
