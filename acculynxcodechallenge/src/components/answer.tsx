import React from "react";
import { Link } from "react-router-dom";
import "../styles/answer.css";



interface AnswerProps {
    is_accepted: boolean;
    score: number;
    answer_id: string;
    body: string;
    owner: any;
}



const Answer: React.FC<AnswerProps> = ({ is_accepted, body, owner, score, answer_id }) => {
  const checkAnswer = (is_accepted: boolean, score: number)=>{
    if (is_accepted){
      alert("This was the chosen answer with a score of "+score);
    } else {
      alert("Try again");
    }
  }
  return (
    <div className="answer" onClick={()=>checkAnswer(is_accepted,score)}>
      <div className="answer-content">
        <div>{body}</div>
      </div>
    </div>
  );
};

export default Answer;
