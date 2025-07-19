document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  let isValid = true;

  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
  }

  if (password === "") {
    document.getElementById("passwordError").textContent = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Minimum 6 characters";
    isValid = false;
  }

  if (isValid) {
    alert("Login successful!");
  }
});
