import React, { useEffect, useState } from "react";
import { type CardType } from "../entites/card/type";
import { Card } from "../entites/card/card";
import { createCard } from "../shared/lib/random";

export const CardSpawner = () => {
  const [count, setCount] = useState<number>(0);
  const [intervalMs, setIntervalMs] = useState<number>(10);

  const [cards, setCards] = useState<CardType[]>([]);

  const generateCards = () => {
    const newCards: CardType[] = []
    for (let i = 0; i < count; i++) {
      newCards.push(createCard())
    }
    setCards((prev) => [...prev, ...newCards])
  }

  const handleCardClick = (id: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, expiresAt: card.lifeTime }
          : card
      )

    )
    console.log('click')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) =>
        prevCards.map((card) =>
          ({ ...card, expiresAt: card.expiresAt - 1 })
        )
          .filter((card) => card.expiresAt > 0)
      )
    }, 1000)
    return () => clearInterval(interval)
  })


  useEffect(() => {
    const interval = setInterval(generateCards, intervalMs * 1000)
    return () => clearInterval(interval)
  })

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          min={1}
          value={count}
          onChange={e => setCount(Number(e.target.value || 1))}
          className="border p-1"
        />
        <input
          type="number"
          min={1}
          value={intervalMs}
          onChange={e => setIntervalMs(Number(e.target.value || 1))}
          className="border p-1"
        />
      </div>


      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          onClick={() => handleCardClick(card.id)}
        />
      ))}

    </div>
  );
};