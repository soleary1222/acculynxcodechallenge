import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  questionId: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, questionId }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" />
      <div className="card-content">
        <Link to={`/detail/${questionId}`}>
          <h2>{title}</h2>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
