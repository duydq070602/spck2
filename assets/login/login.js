console.log(9)
let login = document.getElementById("login");
login.addEventListener("click", (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.users);
    let email = document.getElementById("email");
    let pw = document.getElementById("password");
    console.log(10)
    let check = users.map(
      (index) => index.email == email.value.trim() && index.pw == pw.value.trim()
    );
    console.log(check);
    if (check[0] == true) {
      alert("Logged in successfully");
    } else {
      alert("Please input again");
    }
  });
