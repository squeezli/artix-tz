import React, { useEffect, useState } from "react";
import { type CardType } from "../entites/card/type";
import { Card } from "../entites/card/card";
import { createCard } from "../shared/lib/random";


export const CardSpawner = () => {
    // const [count, setCount] = useState<number>(1);
    // const [interval, setInterval] = useState<number>(1);

    const [count, setCount] = useState(1);
    const [intervalSec, setIntervalSec] = useState(2);
    const [cards, setCards] = useState<CardType[]>([]);



    // return (
    //     <>
    //         <div className="inputWrapper">
    //             <label>Количество элементов:</label>
    //             <br />
    //             <input
    //                 type="number"
    //                 min={0}
    //                 value={count}
    //                 onChange={(e) => setCount(Number(e.target.value))}
    //             />
    //             <br />
    //             <br />
    //             <label>Интервал:</label>
    //             <br />
    //             <input
    //                 type="number"
    //                 min={1}
    //                 value={intervalSec}
    //                 onChange={(e) => setIntervalSec(Number(e.target.value))}
    //             />

    //         </div>
    //         <div className="cardList">
    //             <div className="card">

    //             </div>
    //         </div>
    //     </>
    // )

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
          value={intervalSec}
          onChange={e => setIntervalSec(Number(e.target.value || 1))}
          className="border p-1"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            // onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};