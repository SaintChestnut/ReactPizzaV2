import React, { useState } from 'react';

const categoriesNames = ["All","Meat","Vegeterian","Grill","Spicy","Closed"]

export default function Categories(){
    const [ activeIndex, setActiveIndex ] = useState(0);

    const classNameHandler = (index) => {
      setActiveIndex(index);
    };

    return(<div className="categories">
    <ul>
      {categoriesNames.map((value, index) =>
        <li 
          key={"categorie_"+index}
          className={activeIndex === index ? "active" : ""}
          onClick={() => classNameHandler(index)}>
            {value}
        </li>
      )}
    </ul>
  </div>)
}