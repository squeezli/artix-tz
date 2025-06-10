import React, { useState } from "react";

export const MainPage = () => {

    const [count, setCount] = useState<number>(1);
    const [interval, setInterval] = useState<number>(1);



    return (
        <div className="container">
            <div className="inputWrapper">
                <label>Количество элементов:</label>
                <br />
                <input
                    type="number"
                    min={0}
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <br/>
                <br/>
                <label>Интервал:</label>
                <br />
                <input
                    type="number"
                    min={1}
                    value={interval}
                    onChange={(e) => setInterval(Number(e.target.value))}
                />

            </div>
        </div>
    )

}