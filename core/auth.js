function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      return db.collection("users").where("email", "==", email).get();
    })
    .then(snapshot => {
      if (snapshot.empty) {
        alert("No role assigned. Contact admin.");
        auth.signOut();
        return;
      }

      const user = snapshot.docs[0].data();

      if (user.role === "admin") location.href = "admin/admin-dashboard.html";
      else if (user.role === "teacher") location.href = "teacher/teacher-dashboard.html";
      else if (user.role === "student") location.href = "student/student-dashboard.html";
      else if (user.role === "parent") location.href = "parent/parent-dashboard.html";
      else alert("Invalid role");
    })
    .catch(err => alert(err.message));
}

function logout() {
  auth.signOut().then(() => location.href = "../index.html");
}
