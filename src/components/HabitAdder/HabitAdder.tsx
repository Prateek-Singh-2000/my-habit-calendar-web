import { useState } from "react";

import "./HabitAdder.css";

interface HabitAdderInterface {
  habitAddingFunction: (habitName: string) => void;
  onClose: () => void;
}

function HabitAdderModal({
  habitAddingFunction,
  onClose,
}: HabitAdderInterface) {
  const [inputHabitName, setHabitName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    habitAddingFunction(inputHabitName);
    setHabitName("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e);
      onClose();
    } else if (e.key === "Esc") {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Enter You Habit Here!</h2>

        <form onSubmit={handleSubmit} className="add-habit-form">
          <input
            type="text"
            placeholder="Enter habit name"
            value={inputHabitName} // Controlled component: input value is tied to state
            onChange={(e) => setHabitName(e.target.value)}
            onKeyDown={handleKeyPress}
            id="habit-input"
            required // HTML5 validation
          />
          <div className="modal-actions">
            <button type="submit" className="add-button">
              Add
            </button>
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HabitAdderModal;
