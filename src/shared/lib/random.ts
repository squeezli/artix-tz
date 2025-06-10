import { type CardType } from "../../entites/card/type";

export const getRandomColor = (): string => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const createCard=():CardType=>{
    return{
        id: Date.now()+Math.floor(Math.random() * (100 - 2 + 1)) + 2,
        color: getRandomColor(),
        createdAt:Date.now(),
        expiresAt:Math.floor(Math.random() * (10 - 2 + 1)) + 2,
    }
}