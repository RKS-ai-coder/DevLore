const API_BASE = "https://opentdb.com/api.php";

const decoderElement = document.createElement("textarea");

const decodeHTML = (text) => {
  if (!text) return "";
  decoderElement.innerHTML = text;
  return decoderElement.value;
};

// Fisher-Yates shuffle algorithm to randomize answer order

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Processes raw API data into a clean, decoded format for the UI

const decodeQuestions = (questions) => {
  return questions.map((q) => {
    const decodedCorrect = decodeHTML(q.correct_answer);
    const decodedIncorrect = q.incorrect_answers.map((ans) => decodeHTML(ans));

    return {
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 11),
      question: decodeHTML(q.question),
      correctAnswer: decodedCorrect,
      options: shuffleArray([decodedCorrect, ...decodedIncorrect]),
      difficulty: q.difficulty,
      category: decodeHTML(q.category)
    };
  });
};

// Main Fetch Function

const fetchQuestions = async (categoryId, difficulty, amount = 10) => {
  // Using URLSearchParams to handle string formatting automatically
  const params = new URLSearchParams({
    amount,
    category: categoryId,
    difficulty,
    type: "multiple"
  });

  try {
    const response = await fetch(`${API_BASE}?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Network response was not ok (Status: ${response.status})`);
    }

    const data = await response.json();

    switch (data.response_code) {
      case 0: // Success
        return decodeQuestions(data.results);
      case 1: // No Results
        throw new Error("No questions found for this combination. Try a lower difficulty.");
      case 2: // Invalid Parameter
        throw new Error("Invalid request parameters.");
      case 5: // Rate Limit
        throw new Error("Too many requests. Please wait 5 seconds before trying again.");
      default:
        throw new Error("An unexpected error occurred while fetching quests.");
    }
  } catch (error) {
    console.error("❌ API Error:", error.message);
    throw error;
  }
};

export default fetchQuestions;