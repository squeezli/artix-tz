import { type CardType } from "../../entites/card/type";

export const getRandomColor = (): string => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const createCard=():CardType=>{
    const expires=Math.floor(Math.random() * (10 - 2 + 1)) + 2
    return{
        id: Date.now()+1000+Math.floor(Math.random() * 1000) ,
        color: getRandomColor(),
        createdAt:Date.now(),
        expiresAt:expires,
        countdown:expires,
    }
}