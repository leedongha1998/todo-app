import React, { useState } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (): void => {
    if (inputValue.trim() === "") return;

    onAdd(inputValue);

    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        value={inputValue}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoInput;
