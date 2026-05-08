// ### 6. **The Day Type Checker**
// **Question:** Write a function that takes a day name and returns
// whether it is a "Weekday", "Weekend", or "Invalid day".
// Use a switch statement for this one.

// **Sample Data:**
export default function task6(day) {
  if (day === "Monday") {
    return "Weekday";
  } else if (day === "Tuesday") {
    return "Weekday";
  } else if (day === "Wednesday") {
    return "Weekday";
  } else if (day === "Thursday") {
    return "Weekday";
  } else if (day === "Friday") {
    return "Weekday";
  } else if (day === "Saturday") {
    return "Weekend";
  } else if (day === "Sunday") {
    return "Weekend";
  } else {
    return "Invalid day";
  }
}
const days = ["Monday", "Saturday", "Wednesday", "Sunday", "Friday", "holiday"];
for (const day of days) {
  console.log(`${day} → ${task6(day)}`);
}
// Monday → Weekday
// Saturday → Weekend
// Wednesday → Weekday
// Sunday → Weekend
// Friday → Weekday
// holiday → Invalid day
// **Expected Output:**
// "Monday"    → "Weekday"
// "Saturday"  → "Weekend"
// "Wednesday" → "Weekday"
// "Sunday"    → "Weekend"
// "Friday"    → "Weekday"
// "holiday"   → "Invalid day"
