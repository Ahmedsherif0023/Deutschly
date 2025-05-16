import React from 'react';
import "./Card.css";

interface CardProps {
  title?: string;
  children?: React.ReactNode;
  p?: string;
  onPronounce?: () => void; // New prop
  onClick?: () => void;
}


const Card: React.FC<CardProps> = ({ title, children, p, onPronounce, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: onClick ? "pointer" : undefined }}>
      {title && <h1>{title}</h1>}
      {onPronounce && (
        <div  className="pronouncebtn" onClick={(e) => { e.stopPropagation(); onPronounce(); }} >
          {p && <p>{p}</p>}  🔊
        
        </div>
        
      )}
      {children}
    </div>
  );
};

export default Card;