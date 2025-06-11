import React, { useEffect, useState } from "react";
import { type CardType } from "../entites/card/type";
import { Card } from "../entites/card/card";
import { createCard } from "../shared/lib/random";
import './cardSpawner.css'

export const CardSpawner = () => {
  const [count, setCount] = useState<number>(1);
  const [intervalMs, setIntervalMs] = useState<number>(2);

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
          ? { ...card, expiresAt: card.countdown }
          : card
      )
    )
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
  },[])


  useEffect(() => {
    const interval = setInterval(generateCards, intervalMs * 1000)
    return () => clearInterval(interval)
  },[intervalMs, count])

  return (
    <div className="container">
    <h1>Генератор карточек</h1>
    <div className="controls">
      <label>
        Кол-во карточек
        <br/>
        <input
          type="number"
          min={1}
          value={count}
          onChange={e => setCount(Number(e.target.value || 1))}
        />
      </label>
      <label>
        Интервал (сек)
        <br/>
        <input
          type="number"
          min={1}
          value={intervalMs}
          onChange={e => setIntervalMs(Number(e.target.value || 1))}
        />
      </label>
    </div>

    <div className="cards-wrapper">
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  </div>
  );
};