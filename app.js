import express from "express";
import employees from "#db/employees";

const app = express();
export default app;

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random/").get((req, res) => {
  const { id } = req.params;
  const randomIndex = Math.floor(Math.random() * employees.length);
  const employee = employees[randomIndex];
  res.send(employee);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  console.log("hello");
  const employee = employees.find((employee) => employee.id === +id);
  if (!employee) {
    return res.status(404).send("There is no employee with that ID");
  }
  res.send(employee);
});

// const randomIndex = Math.floor(Math.random() * employees.length);
// const employee = employees[randomIndex];
// console.log(employee);
