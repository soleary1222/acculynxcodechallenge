import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";


const HtmlToReactParser = require('html-to-react').Parser;

interface CardProps {
  title: string;
  description: string;
  body: string;
  imageUrl: string;
  questionId: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, body, imageUrl, questionId, link }) => {
  const htmlToReactParser = new HtmlToReactParser();
  const reactElement = htmlToReactParser.parse(body);

  return (
    <div className="card">
      <img src={imageUrl} alt="Card" />
      <div className="card-content">
        <Link to={`/detail/${questionId}`}>
          <h2>{title}</h2>
        </Link>
        <div>{reactElement}</div>
        <p>Tags: {description}</p>

        <a href={link}>Link to StackOverflow</a>
      </div>
    </div>
  );
};

export default Card;
