// ### 5. **The Discount Decider**
// **Question:** A shop gives discounts based on two things: whether
// the customer has a membership card, and how much they are spending.
// Write a function that returns the discount percentage.
// Rules:
// - Has membership AND spending over 1000 → 30% discount
// - Has membership only → 15% discount
// - Spending over 1000 only (no membership) → 10% discount
// - Neither → 0% discount

// **Sample Data:**


export default function task5(hasMembership, spending) {
    if(hasMembership && spending >1000){
        return "30%";
    }
    if(hasMembership){
        return "15%";
    }
    if(spending >1000){
        return "10%";
    }
    return "0%";
}

const customers = [
  { name: "Rafi", hasMembership: true, spending: 1500 },
  { name: "Nadia", hasMembership: true, spending: 400 },
  { name: "Karim", hasMembership: false, spending: 1200 },
  { name: "Fatema", hasMembership: false, spending: 300 },
];
for (const customer of customers) {
  console.log(
    `${customer.name} → ${task5(customer.hasMembership, customer.spending)}`,
  );
}
// Rafi → 30%
// Nadia → 15%
// Karim → 10%
// Fatema → 0%
// **Expected Output:**
// Rafi   → 30%
// Nadia  → 15%
// Karim  → 10%
// Fatema → 0%
