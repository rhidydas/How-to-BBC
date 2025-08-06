import React, { useState } from "react";

function Quiz() {
  const questions = [
    {
      question: "Which of the following is a dry cooking method?",
      options: ["Boiling", "Steaming", "Baking", "Simmering"],
      answer: "Baking",
    },
    {
      question: "What temperature is water boiled at?",
      options: ["100°C", "90°C", "80°C", "70°C"],
      answer: "100°C",
    },
    {
      question: "Which tool is used for baking?",
      options: ["Oven", "Stove", "Microwave", "Toaster"],
      answer: "Oven",
    },
    {
      question: "What does 'boil' mean in cooking?",
      options: [
        "Cook in hot oil",
        "Cook in boiling water",
        "Cook with steam",
        "Cook in an oven",
      ],
      answer: "Cook in boiling water",
    },
    {
      question: "Which of these is NOT a crisping method?",
      options: ["Frying", "Baking", "Boiling", "Grilling"],
      answer: "Boiling",
    },
    {
      question: "At what temperature does water boil at sea level?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C",
    },
    {
      question: "Which ingredient helps bread rise?",
      options: ["Yeast", "Salt", "Sugar", "Flour"],
      answer: "Yeast",
    },
    {
      question: "Which cooking method uses dry heat?",
      options: ["Boiling", "Steaming", "Roasting", "Simmering"],
      answer: "Roasting",
    },
    {
      question: "Which tool is primarily used for boiling?",
      options: ["Pot", "Frying Pan", "Oven", "Grill"],
      answer: "Pot",
    },
    {
      question: "Which of these is a moist heat cooking method?",
      options: ["Frying", "Steaming", "Grilling", "Baking"],
      answer: "Steaming",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});

  function handleSelect(questionIndex, option) {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  }

  return (
    <div>
      <h2>Cooking Quiz</h2>
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: 20 }}>
          <h3>{q.question}</h3>
          {q.options.map((option) => (
            <div key={option}>
              <label>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleSelect(index, option)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}

      <pre>Selected Answers: {JSON.stringify(selectedAnswers, null, 2)}</pre>
    </div>
  );
}

export default Quiz;
