import { useState } from "react"

export default function Question(){
    const questionObj = [
        {key: "1", Question:"How Old Are You?", Answer:"x"},
        {key: "2", Question:"What is the biggest supewpower", Answer:"x"},
        {key: "3", Question:"What is the capital of USA", Answer:"Washington"},
        {key: "4", Question:"Who was the first president of the USA", Answer:"George Washington"},
        {key: "5", Question:"Who is the founder of Telsna", Answer:"Elon Musk"},
    ]
 //These are just example quiz questions. I only care about the logic
    const [currentIndex, setCurrentIndex]= useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [feedback, setFeedback] = useState("");
    const [userScore, setScore] = useState(0);
    const handleNextQuestion = () =>{
        setUserInput("")
        setFeedback("")
        setShowAnswer(false);
        setCurrentIndex((prevIndex) => (prevIndex+1) %(questionObj.length) )
    }
    const handleRevealAnswer = () => {
        setShowAnswer(true);
        setScore((prevScore) => prevScore - 1); 
    }
    const handleInputChange= (e) => {
        setUserInput(e.target.value);
    }
    const handleCheckAnswer = () =>{
        if(userInput.trim().toLowerCase() === questionObj[currentIndex].Answer.toLowerCase()){
            setFeedback("Correct");
            setScore((prevScore) => prevScore + 1);
        }else{
            setFeedback("Incorrect Try Again")
        }
    }
    return(
        <>
            <section className="questionAnswerSection">
                <div id="questionPortion">
                    <p id="questionContent">
                        {questionObj[currentIndex].Question}
                    </p>
                </div>
                <div id="answerPotion">
                    <p id="answerContent">
                        {showAnswer ? questionObj[currentIndex].Answer : "The Answer Hasn't Been Revealed Yet, Press the button below to reveal it or take a guess "}
                    </p>
                </div>
            </section>
            <div id="userGuess">
                <input
                    type="text"
                    placeholder="Enter Your Guess Here"
                    value={userInput}
                    onChange={handleInputChange}
                />
                <button onClick={handleCheckAnswer}>Submit</button>
            </div>
            {feedback && (
                <div id="feedback">
                    <p>{feedback}</p>
                </div>
            )}
            <section className="buttonsSection">
                <div id="buttons">
                    <button onClick={handleNextQuestion}>Question Add</button>
                    <button onClick={handleRevealAnswer}>Answer Reveal </button>
                </div>
            </section>
            <div id="userScore">
               <p>Your Score: {userScore}</p>
            </div>
        </>
)
}