import { useState } from "react";

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleOnChange = (event) => {
    // get words from text area
    const value = event.target.value.trim();

    // count the words
    const words = value.split(" ");

    // get word length
    const wordLength = words.length;

    // set the count in state
    setWordCount(wordLength);
  };

  return (
    <div>
      <div>
        <textarea
          rows={10}
          placeholder="Type or paste your text here..."
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div>Word count: {wordCount}</div>
    </div>
  );
};
