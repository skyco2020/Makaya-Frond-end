const btnLoginn = document.getElementById("btn-login");.
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
addEvents();
function addEvents() {
  loginLabel();
}
function loginLabel() {
  // const btnLoginn = (document.getElementById('btn-login').disabled = true);
  email.addEventListener("keyup", verify);
  pass.addEventListener("keyup", verify);
}

function verify(e) {
  if (e.target.value == "") {
    e.target.style.border = "0.5px solid red";
    btnLoginn.disabled = true;
    btnLoginn.classList.add("disabledBnt");
  } else {
    e.target.style.border = "none";
    if (email.value != "" && pass.value != "" && er.test(email.value)) {
      console.log(btnLoginn.classList);
      btnLoginn.disabled = false;
      btnLoginn.classList.remove("disabledBnt");
    }
  }
}

function validateLogin() {
  document.querySelector("#password").addEventListener("blur", function (e) {
    if (this.value.length == 0) {
      this.nextElementSibling.nextElementSibling.style.display = "flex";
      this.nextElementSibling.style.marginBottom = "75px";
      this.nextElementSibling.style.fontSize = "12px";
      document.querySelector(".error_password").innerHTML =
        "This field is required";
    } else {
      this.nextElementSibling.nextElementSibling.style.display = "none";
      this.nextElementSibling.style.marginBottom = "initial";
      this.nextElementSibling.style.fontSize = "initial";
    }
  });
  document.querySelector("#password").addEventListener("focus", function (e) {
    this.nextElementSibling.nextElementSibling.style.display = "none";
  });

  document.querySelector("#email").addEventListener("focus", function (e) {
    this.nextElementSibling.nextElementSibling.style.display = "none";
  });

  document.querySelector("#email").addEventListener("blur", function (e) {
    if (this.value.length == 0) {
      this.nextElementSibling.nextElementSibling.style.display = "flex";
      this.nextElementSibling.style.marginBottom = "75px";
      this.nextElementSibling.style.fontSize = "12px";
      document.querySelector(".error_mail").innerHTML =
        "This field is required";
    } else {
      this.nextElementSibling.nextElementSibling.style.display = "none";
      this.nextElementSibling.style.marginBottom = "initial";
      this.nextElementSibling.style.fontSize = "initial";
    }
  });
}

// console.log(btnLoginn, btnLoginn.classList);