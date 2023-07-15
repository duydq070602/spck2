
let register = document.getElementById("register");
register.addEventListener("click", (e) => {

  e.preventDefault();
  let email = document.getElementById("email");
  let pw = document.getElementById("password");
  let phone = document.getElementById("phone");

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (email.value.trim().length == 0 && pw.value.trim().length == 0 && phone.value.trim().length == 0) {
    alert("Please input your email, password & telephone number");
  } else if (email.value.trim().length == 0) {
    alert("Please input your email");
  } else if (pw.value.trim().length == 0) {
    alert("Please input your password");
  } else if (phone.value.trim().length == 0) {
    alert("Please input your telephone number");
  } else if (pw.value.trim().length == 0 && email.value.trim().length == 0) {
    alert("Please input your email and password");
  } else if (pw.value.trim().length == 0 && phone.value.trim().length == 0) {
    alert("Please input your telephone number and password");
  } else if (email.value.trim().length == 0 && phone.value.trim().length == 0) {
    alert("Please input your email and telephone number");
  } else if (pw.value.trim().length < 8) {
    alert("Password must be at least 8 characters.");
  } else if (!pw.value.trim().match(lowerCaseLetter)) {
    alert("Password must  contain a lowercase letter");
  } else if (!pw.value.trim().match(upperCaseLetter)) {
    alert("Password must  contain a uppercase letter");
  } else if (!pw.value.trim().match(numbers)) {
    alert("Password must  contain a number or special character");
  } else if (phone.value.trim().length != 10) {
    alert("Your telephone number is invalid");
  } else {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users);
      let check = users.map((index) => index.email == email.value.trim());
      if (check[0] == true) {
          alert("Account already exists");
      } else {
          users.push({
              email: email.value.trim(),
              pw: pw.value.trim(),
          });
      }

      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            email: email.value.trim(),
            pw: pw.value.trim(),
            phone: phone.value.trim(),
          },
        ])
      );
    }
    location.replace("login.html");
  }
});

