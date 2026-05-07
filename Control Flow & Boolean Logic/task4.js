// ### 4. **The Login Validator**
// **Question:** Write a function that takes a username and password.
// Return a specific message for each failure case, and a success
// message only when both are valid.
// Rules:
// - If username is empty → "Username is required"
// - If password is empty → "Password is required"
// - If username is not "admin" → "User not found"
// - If password is not "1234" → "Wrong password"
// - If both match → "Welcome, admin!"
// Check each condition separately, one at a time (early return style).

// **Sample Data:**

export default function task4(username, password) {
  if (username === "") {
    return "Username is required";
  }
  if (password === "") {
    return "Password is required";
  }
  if (username !== "admin") {
    return "User not found";
  }
  if (password !== "1234") {
    return "Wrong password";
  }
  return "Welcome, admin!";
}



const attempts = [
  { username: "", password: "" },
  { username: "sara", password: "" },
  { username: "sara", password: "1234" },
  { username: "admin", password: "9999" },
  { username: "admin", password: "1234" },
];
for (const attempt of attempts) {
  console.log(task4(attempt.username, attempt.password));
}
// Username is required
// Password is required
// User not found
// Wrong password
// Welcome, admin!
// **Expected Output:**
// → "Username is required"
// → "Password is required"
// → "User not found"
// → "Wrong password"
// → "Welcome, admin!"
