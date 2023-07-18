import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";



interface CardProps {
  title: string;
  description: string;
  body: string;
  imageUrl: string;
  questionId: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, body, imageUrl, questionId, link }) => {
  //const htmlToReactParser = new HtmlToReactParser();
  //const reactElement = htmlToReactParser.parse(body);
  const regex = /(<([^>]+)>)/gi;
  const content = body.replace(regex, "").substring(0,100)+"...";

  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt="Poster Avatar" />}
      <div className="card-content">
        <Link to={`/detail/${questionId}`}>
          <h2>{title}</h2>
        </Link>
        <div>{content}</div>
        <p>Tags: {description}</p>

        <a href={link}>Link to StackOverflow</a>
      </div>
    </div>
  );
};

export default Card;
