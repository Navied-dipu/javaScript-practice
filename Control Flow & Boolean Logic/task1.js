// ### 1. **Simple Age Gate**
// **Question:** Write a function that takes a person's age and returns
// what they are allowed to do.
// Rules:
// - Under 13 → "Can watch cartoons only"
// - 13 to 17 → "Can watch PG-13 movies"
// - 18 and above → "Can watch all movies"

// **Sample Data:**


export default function task1(age) {
  if (age < 13) {
    return "Can watch cartoons only";
  } else if (age >= 13 && age < 18) {
    return "Can watch PG-13 movies";
  } else {
    return "Can watch all movies";
  }
}

const ages = [8, 15, 20, 13, 17];
console.log(ages.map(task1));

// **Expected Output:**
// 8  → "Can watch cartoons only"
// 15 → "Can watch PG-13 movies"
// 20 → "Can watch all movies"
// 13 → "Can watch PG-13 movies"
// 17 → "Can watch PG-13 movies"
