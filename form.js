function myfun() {
  let email = document.querySelector("#email").value;
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let dob = document.querySelector("#dob").value;

  if (email === "" || fname === "" || lname === "" || dob === "") {
    alert("Fill all the required areas");
  } else {
    alert("Your Credential has sent to your mail ID");
  }
}
