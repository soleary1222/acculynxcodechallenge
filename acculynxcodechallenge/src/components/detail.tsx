// DetailView.js
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import constants from "../constants.json";
import Answer from "./answer";

interface quest {
  question_id: string;
  title: string;
  link: string;
  owner: any;
  body: any;
  tags: any;
}
interface answers {
  is_accepted: boolean;
  score: number;
  answer_id: string;
  body: string;
  owner: any;
}

const HtmlToReactParser = require("html-to-react").Parser;

const htmlParser = (string: string)=> {
  const parser = new HtmlToReactParser();
  return parser.parse(string);
}

// Shuffle array function using Durstenfield shuffle
function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const DetailView = () => {
  const [question, setQuestion] = React.useState<quest>();
  const [answers, setAnswers] = React.useState<answers[]>([]);
  const { questionId } = useParams();

  useEffect(() => {
    const apiKey = constants.apiKey;
    const apiUrl = `https://api.stackexchange.com/2.3/questions/${questionId}?site=stackoverflow&filter=withbody&key=${apiKey}`;

    //console.log(apiUrl);
    axios
      .get(apiUrl)
      .then((response) => {
        setQuestion(response.data.items[0]);

        const answerUrl = `https://api.stackexchange.com/2.3/questions/76706997/answers?site=stackoverflow&filter=withbody&key=Gdtn3zINyXViMbRE8MU8EA((`;
        axios
        .get(answerUrl)
        .then((response) => {
          const shuffled = shuffleArray(response.data.items);
          setAnswers(shuffled);
        });


        
        //const reactElement = htmlToReactParser.parse(response.data.items.body);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //  const question = questions.find((q:any) => q.question_id.toString() === questionId);

  return (
    <div>

      {question && (
        <div className="question-body">
          <h1>{question.title}</h1>
          <p>{htmlParser(question.body)}</p>
          <h4>Select what you believe to be the correct answer:</h4>
          <ul>
            {answers.map((answer:any) => (
              <Answer key={answer.answer_id}
                is_accepted = {answer.is_accepted}
                score = {answer.score}
                owner = {answer.owner}
                answer_id={answer.answer_id}
                body = { htmlParser(answer.body)}
              />

            ))}
            </ul>
        </div>
      )}
    </div>
  );
};

export default DetailView;
