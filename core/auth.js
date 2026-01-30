function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      return db.collection("users").where("email", "==", email).get();
    })
    .then(snapshot => {
      const user = snapshot.docs[0].data();
      if (user.role === "admin") location.href = "admin/admin-dashboard.html";
      if (user.role === "teacher") location.href = "teacher/teacher-dashboard.html";
      if (user.role === "student") location.href = "student/student-dashboard.html";
      if (user.role === "parent") location.href = "parent/parent-dashboard.html";
    })
    .catch(err => alert(err.message));
}

function logout() {
  auth.signOut().then(() => location.href = "../index.html");
}
