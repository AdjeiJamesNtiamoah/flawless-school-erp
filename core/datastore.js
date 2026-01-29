const DB = {
  users: [
    {
      id: "ADM001",
      name: "System Admin",
      email: "admin@school.com",
      password: "1234",
      role: "admin"
    }
  ]
};

if (!localStorage.getItem("DB")) {
  localStorage.setItem("DB", JSON.stringify(DB));
}
