import React, { useState } from 'react';

interface Flashcard {
  image: string;
  answer: string;
}

const flashcards: Flashcard[] = [
  { image: 'https://example.com/image1.jpg', answer: 'apple' },
  { image: 'https://example.com/image2.jpg', answer: 'banana' },
  { image: 'https://example.com/image3.jpg', answer: 'cherry' },
];

const FlashcardApp: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [level, setLevel] = useState(1);

  const handleSubmit = () => {
    const currentCard = flashcards[currentCardIndex];
    if (userAnswer.toLowerCase() === currentCard.answer.toLowerCase()) {
      alert('Correct!');
      setLevel(level + 1);
      if (currentCardIndex < flashcards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      } else {
        alert("Congratulations, you've completed all levels!");
        setCurrentCardIndex(0);  // Reset to first card
        setLevel(1);  // Reset level
      }
    } else {
      alert('Try again!');
    }
    setUserAnswer('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Flashcard App</h2>
      <h3>Level: {level}</h3>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          marginBottom: '20px',
          backgroundColor: '#f9f9f9'
        }}
      >
        <img
          src={flashcards[currentCardIndex].image}
          alt="Flashcard Question"
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
        />
      </div>
      <input
        type="text"
        placeholder="Type your answer..."
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        style={{
          width: '80%',
          padding: '10px',
          marginBottom: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ddd'
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default FlashcardApp;
