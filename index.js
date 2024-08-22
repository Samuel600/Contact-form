const form = document.getElementById("contact-form");
const successmessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = document.getElementById("first-name").value.trim();
  const lastname = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const querytype = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;
  const formalert = document.querySelectorAll(".form-alert");

  let isValid = true;

  //firstname
  if (firstname === "") {
    isValid = false;
    document.querySelector("#first-name + .form-alert").style.display = "block";
    document.querySelector("#first-name").style.border = "1px solid var(--red)";
  } else {
    document.querySelector("#first-name + .form-alert").style.display = "none";
    document.querySelector("#first-name").style.border =
      "1px solid var(--grey-light)";
  }

  //lastname

  if (lastname === "") {
    isValid = false;
    document.querySelector("#last-name + .form-alert").style.display = "block";
    document.querySelector("#last-name").style.border = "1px solid var(--red)";
  } else {
    document.querySelector("#last-name + .form-alert").style.display = "none";
    document.querySelector("#last-name").style.border =
      "1px solid var(medium-grey)";
  }

  //Email
  if (!isValidEmail(email)) {
    isValid = false;
    document.querySelector("#email + .form-alert").style.display = "block";
    document.querySelector("#email").style.border = "1px solid var(--red)";
  } else {
    document.querySelector("#email + .form-alert").style.display = "none";
    document.querySelector("#email").style.border =
      "1px solid var(--medium-grey)";
  }
  //Query
  if (!querytype) {
    isValid = false;
    document.querySelector(".radio-inputs + .form-alert").style.display =
      "block";
  } else {
    document.querySelector(".radio-inputs + .form-alert").style.display =
      "none";
  }

  //Message

  if (message === "") {
    document.querySelector("#message + .form-alert").style.display = "block";
    document.querySelector("#message").style.border = "1px solid var(--red)";
  } else {
    document.querySelector("#message + .form-alert").style.display = "none";
    document.querySelector("#message").style.border =
      "1px solid var(--medium-grey)";
  }

  //  Consent
  if (!consent) {
    isValid = false;

    formalert[5].classList.add("form-error");
  } else {
    formalert[5].classList.remove("form-error");
  }

  //Form
  if (isValid) {
    successmessage.classList.add("active");
    form.reset();
  }
  //Email function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
})
;