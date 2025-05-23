import SubmitButton from  '../components/submitButton'

interface AnswerBoxProps {
  userAnswer: string;
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

function AnswerBox({ userAnswer, setUserAnswer, handleSubmit }: AnswerBoxProps) {
  return <>
    <input
    autoFocus
    type="text"
    placeholder="Type your answer..."
    value={userAnswer}
    onChange={(e) => setUserAnswer(e.target.value)}
    onKeyDown={(event) => {
      if (event.key === 'Enter') handleSubmit();
    }}
    className='w-11/12 p-2.5 m-2.5 text-base rounded-md border text-black'
    />
    <SubmitButton handleSubmit={handleSubmit}/>
  </>
}

export default AnswerBox;
