import React from "react";
import { type CardType } from './type.ts'

type props = {
    card: CardType;
}

export const Card: React.FC<props> = ({ card }) => {
    return (
        <div className="card"
            style={{ backgroundColor: card.color }}
            color={card.color}
        >
            {card.color}
        </div>
    )
}