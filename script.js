function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Correct credentials
  if(username === "MuhammadTashfeen" && password === "SP24-BAF-074"){
    // Save login flag in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("studentName", username);

    // Go to result page
    window.location.href = "result.html";
  } else {
    alert("Invalid username or password");
  }
}
