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

interface AnswerInputBoxProps {
  userAnswer: string;
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
}

function AnswerInputBox({ userAnswer, setUserAnswer }: AnswerInputBoxProps) {
  return(
    <input
    type="text"
    placeholder="Type your answer..."
    value={userAnswer}
    onChange={(e) => setUserAnswer(e.target.value)}
    className='w-4/5 p-2.5 m-2.5 text-base rounded-md border text-black'
    />
  )
}

interface ExplanationInputBox {
  userExplanation: string;
  setUserExplanation: React.Dispatch<React.SetStateAction<string>>;
}

function ExplanationInputBox({ userExplanation, setUserExplanation }: ExplanationInputBox) {
  return <>
      <p>Explain the logic behind your answer</p>
      <input
        type="text"
        placeholder="Explain your answer..."
        value={userExplanation}
        onChange={(e) => setUserExplanation(e.target.value)}
        className='w-4/5 p-2.5 m-2.5 text-base rounded-md border text-black'
      />
  </>
}

const FlashcardApp: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userExplanation, setUserExplanation] = useState('');
  const [level, setLevel] = useState(1);
  const [isCorrect, setIsCorrect] = useState(false);

  async function handleSubmit() {
    const currentCard = flashcards[currentCardIndex];
    if (userAnswer.toLowerCase() === currentCard.answer.toLowerCase()) {
      alert('Correct!');
      setIsCorrect(true);
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
  }

  return (
    <div>
      <h1 className='font-bold'>Level {level}</h1>
      <div className='rounded-lg p-5 m-5 bg-[#36393e] h-96' // pakicustomize ung color
      >
        <img
          src={'https://lh6.googleusercontent.com/UIVWucNCaO5i80gV4avqtMtpI8OREza1FhcmV4uULqm8PxPDP-HB3n0OejNGrj0Bojn6fMwBgNTULFhHZ7ulBMtPBLUzJqrGmWm0ypcJtVTj-W8UFEGvEnWtigVbojtU8Q=w740'} // edit
          alt="Flashcard Question"
          className='object-cover w-full h-full rounded-lg'
        />
      </div>
      <AnswerInputBox userAnswer={userAnswer} setUserAnswer={setUserAnswer}/>
      <ExplanationInputBox userExplanation={userExplanation} setUserExplanation={setUserExplanation}/>
      <button
        onClick={handleSubmit}
        className='py-2.5 px-5 m-5 text-base rounded-md bg-[#4caf50] cursor-pointer'
      >
        Submit
      </button>
    </div>
  );
};

export default FlashcardApp;
