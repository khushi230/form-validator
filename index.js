const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// --------------------------------------functions-----------------------------------------

//---------------------------SHOW ERROR------------------------
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-controller error";
  const small = formControl.querySelector("small");

  small.innerText = message;
};

//-------------------------SHOW SUCCESS----------------
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-controller success";
};

//-----------------------CHECK EMAIL IS VALID OR NOT--------------------
const checkEmail = (email) => {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (res.test(String(email.value.trim()).toLowerCase())) {
    showSuccess(email);
  } else {
    showError(email, "email is not valid");
  }
};
//--------------------------CHECK REQUIRED FIELDS-----------------------
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${input.id} is required!`);
    } else {
      showSuccess(input);
    }
  });
};

//-------------------------CHECK  LENGTH----------------------------------
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${input.id} must be atleast ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} can not be more than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

const checkPassword = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "passwords do not match");
  } else {
    showSuccess(input2);
  }
};

//-------------------- event-listeners-------------------

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 10);
  checkEmail(email);
  checkPassword(password, password2);
});
