function routeUser(role) {
  if (role === "admin") location.href = "../admin/admin-dashboard.html";
  if (role === "hr") location.href = "../hr/hr-dashboard.html";
  if (role === "teacher") location.href = "../teacher/teacher-dashboard.html";
  if (role === "student") location.href = "../student/student-dashboard.html";
  if (role === "parent") location.href = "../parent/parent-dashboard.html";
}

