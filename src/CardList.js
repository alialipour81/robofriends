import React from "react";
import Card from "./Card.js";
const CardList = ({robots}) => {
    const robo = robots.map((robot,i) =>{
        return <Card key={robot.id} id = {robot.id} name = {robot.name} email = {robot.email}/>;
    })
    return (
        <div>
            {robo}
        </div>
    )
}

export default CardList;