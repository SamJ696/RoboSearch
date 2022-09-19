import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((user, i) => {   // For displaying all the robot components. Mapping is used.
        return ( 
        <Card  
          key={i}                                 // Unique key id so that it does not bundle again. It has unique key for each item.
          id={robots[i].id} 
          name={robots[i].name} 
          email={robots[i].email}
        />
        );
    })
    return (
        <div>
          { cardsArray }
        </div>
    );
} 

export default CardList;


// Instead of creating const cardsArray, all the mapping code can be wrapped in return. 