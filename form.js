document.addEventListener("DOMContentLoaded", function () {
  // Your form and event listener code goes here
  let form = document.querySelector("form");
  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  form.addEventListener("submit", (e) => {
    console.log("ok");
    e.preventDefault();

    let obj = {
      email: form.email.value,
      fname: form.fname.value,
      lname: form.lname.value,
      password: form.password.value,
    };

    if (obj.email == "" || obj.fname == "" || obj.lname == "") {
      alert("Fill the required details");
    } else {
      alert("Registered Successfully");
      formData.push(obj);
      localStorage.setItem("formData", JSON.stringify(formData));
      window.location = "register.html";
    }
    // Store updated formData in localStorage

    // console.log(formData);
  });
});
