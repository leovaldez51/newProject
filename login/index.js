const email = document.getElementById("email");
const password = document.getElementById("password");

function Validation() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    if (password.value.length < 8) {
      alert("Password must be atleast 8 characters");
    } else {
      return true;
    }
  } else {
    if (password.value.length < 8) {
      alert("You have entered incorrect credentials");
      return false;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }
}
