const DB = {
  users: [
    {
      id: "ADM001",
      name: "System Admin",
      email: "admin@school.com",
      password: "1234",
      role: "admin"
    }
  ],

  classes: [
    {
      id: "CLS1",
      name: "Grade 5A",
      teacherEmail: "teacher@school.com"
    }
  ],

  students: [
    { id: "ST1", name: "John Doe", classId: "CLS1" },
    { id: "ST2", name: "Mary Ann", classId: "CLS1" }
  ],

  attendance: []
};

if (!localStorage.getItem("DB")) {
  localStorage.setItem("DB", JSON.stringify(DB));
}
