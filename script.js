const goalForm = document.getElementById("goalForm");
const goalList = document.getElementById("goalList");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

function displayGoals() {
  goalList.innerHTML = "";

  goals.forEach((goal, index) => {
    const monthlySaving = (goal.amount / goal.months).toFixed(2);

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${goal.name}</strong><br>
      Target Amount: ₹${goal.amount}<br>
      Duration: ${goal.months} months<br>
      Monthly Saving Required: ₹${monthlySaving}<br>
      <button onclick="deleteGoal(${index})">Delete</button>
    `;

    goalList.appendChild(li);
  });
}

goalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const goal = {
    name: goalName.value,
    amount: amount.value,
    months: months.value
  };

  goals.push(goal);
  localStorage.setItem("goals", JSON.stringify(goals));
  goalForm.reset();
  displayGoals();
});

function deleteGoal(index) {
  goals.splice(index, 1);
  localStorage.setItem("goals", JSON.stringify(goals));
  displayGoals();
}

displayGoals();
