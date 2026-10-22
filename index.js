import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;



const users = [
    {name: "John Doe", email: "john.doe@example.com"},
    {name: "Jane Smith", email: "jane.smith@example.com"},
    {name: "Alice Johnson", email: "alice.johnson@example.com"},
    {name: "Bob Brown", email: "bob.brown@example.com"},
    {name: "Charlie Davis", email: "charlie.davis@example.com"},
    {name: "Eve Wilson", email: "eve.wilson@example.com"},
    {name: "Frank Miller", email: "frank.miller@example.com"}
];


app.get("/", (req, res) => {
  res.send("Hello World");
});



app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/dashboard", (req, res) => {
  res.send("Welcome to the dashboard");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
