// document.querySelector("#btn6").addEventListener("submit", myfun);

// function myfun(event) {
//   console.log(event);
//   event.preventDefault();
//   alert("hi");
// }

function myfun() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;

  if (name === "" || email === "") {
    alert("Please fill required infromation");
  } else {
    alert("We will get in touch with you", name);
  }
}
