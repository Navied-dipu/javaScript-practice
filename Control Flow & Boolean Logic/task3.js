// ### 3. **The Grade Checker**
// **Question:** Write a function that takes a student's score (0–100)
// and returns their letter grade.
// Rules:
// - 90 and above → "A"
// - 80 to 89     → "B"
// - 70 to 79     → "C"
// - 60 to 69     → "D"
// - Below 60     → "F"

// **Sample Data:**

export default function task3(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
const scores = [95, 82, 73, 61, 45, 100, 60];
// const grades = scores.map(task3);
for (const score of scores) {
  console.log(`${score} → ${task3(score)}`);
}
// 95 → A
// 82 → B
// 73 → C
// 61 → D
// 45 → F
// 100 → A
// 60 → D
// **Expected Output:**
// 95  → "A"
// 82  → "B"
// 73  → "C"
// 61  → "D"
// 45  → "F"
// 100 → "A"
// 60  → "D"
