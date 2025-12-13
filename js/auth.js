// Simple demo login credentials
const demoUser = "makumeta";
const demoPass = "lO52',:-)";

// Check login
const form = document.getElementById("loginForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === demoUser && pass === demoPass) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html"; // redirect to home
    } else {
      document.getElementById("errorMsg").textContent =
        "Invalid username or password";
    }
  });
}

// Logout button with confirmation
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function (e) {
    e.preventDefault(); // prevent default action

    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("loggedIn");
      window.location.href = "login.html"; // redirect to login page
    }
    // If user cancels, do nothing
  });
}

if (!localStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}
// Hide login link if logged in
const loginLink = document.getElementById("loginLink");
if (loginLink && localStorage.getItem("loggedIn") === "true") {
  loginLink.style.display = "none";
  if (logoutBtn) logoutBtn.style.display = "inline";
}

