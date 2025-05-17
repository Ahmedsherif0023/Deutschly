import React from 'react';
import "./Card.css";

interface CardProps {
  title?: string;
  children?: React.ReactNode;
  p?: string;
  category?: string; // New prop
  onPronounce?: () => void; // New prop
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, children, p, category, onPronounce, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: onClick ? "pointer" : undefined }}>
      {title && <h1>{title}</h1>}
      {p && <p>{p}</p>}
      <div className='card-footer'>
          {category && <span className="card-category">{category}</span>}
        {onPronounce && (
          <button
            className="pronouncebtn"
            onClick={e => { e.stopPropagation(); onPronounce(); }}
            aria-label="Pronounce"
          >
            🔊
          </button>
        )}
      </div>
    

      {children}
    </div>
  );
};

export default Card;