document.addEventListener("DOMContentLoaded", function () {
  const frontcard = document.querySelector(".Flip_front");
  const backcard = document.querySelector(".Flip_back");
  const flipCardInner = document.querySelector(".Flip_card_inner");
  const registerButton = document.getElementById("newregister");
  const backButton = document.getElementById("backtologin");
  const HomeDom = document.getElementById("Home");

  registerButton.addEventListener("click", function () {
    flipCardInner.style.transform = "rotateY(180deg)";
    frontcard.style.display = "none";
    backcard.style.display = "flex";
  });

  backButton.addEventListener("click", function () {
    flipCardInner.style.transform = "rotateY(0deg)";
    backcard.style.display = "none";
    frontcard.style.display = "flex";
  });

  HomeDom.addEventListener("click", function () {
    location.reload();
  });
});

function checkconfirm() {
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirmpassword").value;

  //console.log(password.length+confirmpassword.length)

  if (
    password === confirmpassword &&
    confirmpassword.length != 0 &&
    password.length != 0
  ) {
    document.getElementById("confirmpassword").style.backgroundImage =
      "url('asset/checkmark.png')";
  } else {
    document.getElementById("confirmpassword").style.backgroundImage = "none";
  };
};

function checkpassword() {
  let passwordchecker = document.getElementById("password").value;
  let checkuppercrase = /[A-Z]/;
  let checklowercrase = /[a-z]/;
  let checkspecialchar = /[[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  let isuppercrase = checkuppercrase.test(passwordchecker);
  let isspecialchar = checkspecialchar.test(passwordchecker);
  let islowercrase = checklowercrase.test(passwordchecker);

  if (
    passwordchecker.length >= 10 &&
    isspecialchar == true &&
    isuppercrase == true &&
    islowercrase == true
  ) {
    //console.log("Strong")
    document.getElementById("showcheckpassword").value = "Strong Password";
    document.getElementById("showcheckpassword").style.color = "lightgreen";
  } else if (passwordchecker.length == 0) {
    console.log(passwordchecker.length);
    document.getElementById("showcheckpassword").value = "";
  } else if (
    passwordchecker.length >= 8 &&
    isspecialchar == true &&
    isuppercrase == true &&
    islowercrase == true
  ) {
    //console.log("Medium")
    document.getElementById("showcheckpassword").value = "Medium Password";
    document.getElementById("showcheckpassword").style.color = "Yellow";
  } else if (
    passwordchecker.length >= 6 &&
    isspecialchar == true &&
    isuppercrase == true &&
    islowercrase == true
  ) {
    //console.log("Weak")
    document.getElementById("showcheckpassword").value = "Weak Password";
    document.getElementById("showcheckpassword").style.color = "orange";
  } else if (
    passwordchecker.length < 6 ||
    isspecialchar == false ||
    isuppercrase == false ||
    islowercrase == false
  ) {
    //console.log("Incorrect Format Password")
    document.getElementById("showcheckpassword").value =
      "Incorrect Format Password";
    document.getElementById("showcheckpassword").style.color = "red";
  };

  checkconfirm();
};

function modalpopup() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal").style.animationPlayState = "running";
};

function closemodal() {
  document.getElementById("modal").style.animationName = "scaledown";
  document.getElementById("modal").style.animationPlayState = "running";
  setTimeout("resetmodal()", 1400);
};

function resetmodal() {
  document.getElementById("modal").innerHTML =
    '<span id="close_modal" onclick="closemodal()">&times;</span><p>Please Enter Your E-mail</p><input type="email" name="emailforpassword" id="recoveryemail"><button onclick="resetpassword()">Recovery My Password</button>';
  document.getElementById("modal").style.animationPlayState = "pause";
  document.getElementById("modal").style.animationName = "scaleup";
  document.getElementById("modal").style.display = "none";
};

function checkbeforereset(){
let input = document.getElementById('recoveryemail').value;
let inputcontain = /[@]/;
let checkinput = inputcontain.test(input);
console.log(input)
if(input == ""){
  alert ('Please input your Email for Reset Password');
}
else if (checkinput == false) {
  console.log(checkinput)
  alert ('Your Email is incorrect format');
}
else{
resetpassword();
};
};


function resetpassword() {
  let tragetdiv = document.getElementById("modal");
  tragetdiv.innerHTML =
    '<span id="close_modal" onclick="closemodal()">&times;</span><div id="loadingbar"></div>';
  document.getElementById("loadingbar").style.animationPlayState = "running";
  document
    .getElementById("loadingbar")
    .style.setProperty("startanimation", "running");
  setTimeout("loadingsuccess()", 4000);
};

function loadingsuccess() {
  let tragetdiv = document.getElementById("modal");
  tragetdiv.innerHTML =
    '<span id="close_modal" onclick="closemodal()">&times;</span><div id="successloading"><p>Your password was reset. Please check your registerd Email.<p></div>';
};
