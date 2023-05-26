let mailid = document.getElementById("email");
let password = document.getElementById("password");
let data = JSON.parse(localStorage.getItem("formData")) || [];

function myFun() {
  if (mailid.value === "" || password.value === "") {
    alert("Enter your registered details");
  } else {
    let isAlready = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email == mailid.value && data[i].password == password.value) {
        isAlready = true;

        break;
      }
    }
    console.log(isAlready);
    if (isAlready == true) {
      alert("Login Successful");
      // console.log("Before");
      window.location.href = "homepage.html";
      // window.location.replace("homepage.html");
      // console.log("After");
      // alert('Logged in')
    } else if (isAlready == false) {
      alert("Wrong credentials");
    }
  }
}
