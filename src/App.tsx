import { useState } from "react";
import "./App.css";

function App() {
  const [isHabitCompleted, setIsHabitCompleted] = useState<boolean>(false);

  const handleMarkCompleted = () => {
    setIsHabitCompleted(true);
    console.log("Habit marked as completed!");
  };
  const handleMarkNotCompleted = () => {
    setIsHabitCompleted(false);
    console.log("Habit marked as NOT completed!");
  };

  return (
    <div className="app-container">
      <h1>Daily Habit Tracker</h1>
      <p>
        Habit Status for "Drink 8 glasses of water":
        {isHabitCompleted ? "COMPLETED" : "NOT COMPLETED"}
      </p>
      <button onClick={handleMarkCompleted}>Mark as Completed</button>
      <button onClick={handleMarkNotCompleted}>Mark as Not Completed</button>
    </div>
  );
}

export default App;
