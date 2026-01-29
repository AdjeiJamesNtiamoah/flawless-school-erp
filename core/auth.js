function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const db = JSON.parse(localStorage.getItem("DB"));
  const user = db.users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Invalid login details");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  routeUser(user.role);
}

function logout() {
  localStorage.removeItem("currentUser");
  location.href = "../auth/login.html";
}

