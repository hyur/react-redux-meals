import React from 'react';

function trim(str){
    return str.length>16?str.slice(0,16)+'...':str;
}
export default function FoodList({food,onSelect}){
    if(food.length===0){
        return <p>Your search has 0 results</p>
    }
    return (
        <ul>
            {
                food.map((item)=>(
                    <li onClick = {()=>onSelect(item)} key = {item.babel}>
                        <h3>{trim(item.babel)}</h3>
                        <img src = {item.image} alt = {item.babel}/>
                        <div>{Math.floor(item.calories)}Calories</div>
                        <div>{item.source}</div>
                    </li>
                ))
            }
        </ul>
    )
}