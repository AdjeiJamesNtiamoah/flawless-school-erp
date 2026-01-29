const PERMISSIONS = {
  admin: ["admin", "hr", "teacher", "student", "parent"],
  hr: ["hr"],
  teacher: ["teacher"],
  student: ["student"],
  parent: ["parent"]
};

function checkAccess(requiredRole) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) {
    location.href = "../auth/login.html";
    return;
  }

  if (!PERMISSIONS[user.role].includes(requiredRole)) {
    alert("Access denied");
    location.href = "../auth/login.html";
  }
}
