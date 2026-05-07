// ### 2. **The Light Switch**
// **Question:** Write a function that takes a light's current state
// ("on" or "off") and returns what the state becomes after flipping
// the switch. This is your first taste of boolean toggling.

// **Sample Data:**


export default function task2(states) {
  if (states === "on") {
    return "off";
  } else if (states === "off") {
    return "on";
  }
}
const states = ["on", "off", "on", "on", "off"]
// [ 'off', 'on', 'off', 'off', 'on' ]
console.log(states.map(task2));
// **Expected Output:**
// "on"  → "off"
// "off" → "on"
// "on"  → "off"
// "on"  → "off"
// "off" → "on"
