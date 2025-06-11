import React from "react";
import { type CardType } from './type.ts'
import './card.css'

type props = {
    card: CardType;
    onClick?: (id:number) => void;
}

export const Card: React.FC<props> = ({ card, onClick}) => {
    return (
        <div className="card" style={{ backgroundColor: card.color }}  onClick={() => onClick?.(card.id)}  >
            {card.color}
            <br />
            {card.expiresAt}
            
        </div>
    )
}