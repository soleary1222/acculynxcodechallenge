// DetailView.js
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import constants from '../constants.json';

// interface DetailProps {
//     questions: any;
//   }

const DetailView = () => {
  const [question, setQuestion] = React.useState<any>();
  const { questionId } = useParams();

  // Find the question with the matching ID
  const apiKey = constants.apiKey;
  const apiUrl = `https://api.stackexchange.com/2.3/question/${questionId}?key=${apiKey}`;

  axios.get(apiUrl)
    .then(response => {
      setQuestion(response.data.items);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });


//  const question = questions.find((q:any) => q.question_id.toString() === questionId);

  return (
    <div>
      <h1>Question Details</h1>
      {question && (
        <div>
          <h3>{question.title}</h3>
          <p>{question.body}</p>
          <h4>Answers:</h4>
          <ul>
            {question.answers.map((answer:any) => (
              <li key={answer.answer_id}>{answer.body}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetailView;
