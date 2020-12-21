const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const formSuccess = document.getElementById("validation-success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  passwordMatch(password, password2);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(password2, 6, 25);
  isValidEmail(email);
  showFormSubmitSuccess();

  // if (username.value === "") {
  //   showError(username, "Username Is Required");
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === "") {
  //   showError(email, "Email Is Required");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Email is not Valid");
  // } else {
  //   showSuccess(email);
  // }
  // if (password.value === "") {
  //   showError(password, "Password Is Required");
  // } else {
  //   showSuccess(password);
  // }
  // if (password2.value === "") {
  //   showError(password2, "Password is Required");
  // } else {
  //   showSuccess(password2);
  // }
});
//show submission success
function showFormSubmitSuccess() {
  formSuccess.classList.remove("hide");
  formSuccess.classList.add("display");

  setTimeout(function () {
    formSuccess.classList.remove("display");
    formSuccess.classList.add("hide");

    username.value = "";
    email.value = "";
    password.value = "";
    password2.value = "";

    successRemoveGreenBorder(username);
    successRemoveGreenBorder(email);
    successRemoveGreenBorder(password);
    successRemoveGreenBorder(password2);
  }, 2000);
}

//remove green border on success
function successRemoveGreenBorder(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control";
}

//check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} needs to be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} needs to be at less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//check required fields
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      console.log(input);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check valid email
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Email is not Valid");
  }
}

//show success green outline
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "success form-control";
}

//shows errors

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "error form-control";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// check if passwords match
function passwordMatch(password, password2) {
  if (password.value !== password2.value) {
    showError(password2, "Passwords do not Match");
  } else {
    console.log("success");
  }
}
