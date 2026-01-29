function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  alert("Thank you for contacting us! Your message has been submitted.");
  return true;
}

function toggleContent() {
  let x = document.getElementById("extraContent");
  x.classList.toggle("w3-hide");
}



