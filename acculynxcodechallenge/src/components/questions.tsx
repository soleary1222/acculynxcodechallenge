// src/components/Questions.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';

interface Question {
  question_id: number;
  title: string;
  link: string;
  owner: any;
  tags: any;
}

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Replace YOUR_API_KEY with the actual API key you obtained from StackOverflow
    const apiKey = 'Gdtn3zINyXViMbRE8MU8EA((';
    const apiUrl = `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=creation&site=stackoverflow&key=${apiKey}&accepted=true&answers=2`;

    axios.get(apiUrl)
      .then(response => {
        setQuestions(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Recent StackOverflow Questions</h1>


      <div className="card-container">


      {questions.map(question => (
          <Card  key={question.question_id}
            title={question.title}
            description={question.tags.join(', ')}
            imageUrl={question.owner.profile_image}
            />
        ))}
      </div>

    </div>
  );
};

export default Questions;
