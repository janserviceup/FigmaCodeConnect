import React from "react";

export interface CardProps {
  /** Card title */
  title: string;
  /** Card description text */
  description?: string;
  /** Optional image URL */
  imageUrl?: string;
  /** Whether the card has an elevated shadow */
  elevated?: boolean;
}

export function Card({ title, description, imageUrl, elevated = false }: CardProps) {
  return (
    <div className={`card${elevated ? " card--elevated" : ""}`}>
      {imageUrl && (
        <div className="card__image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
      </div>
    </div>
  );
}
