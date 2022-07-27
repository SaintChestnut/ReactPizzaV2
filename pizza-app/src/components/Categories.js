import React from 'react';

const categoriesNames = ["All","Meat","Vegeterian","Grill","Spicy","Closed"]

export default function Categories(props)
{
    // const [ activeIndex, setActiveIndex ] = useState(0);
    const { activeValue, onChangeCategory } = props;
    const classNameHandler = (index) => {
      onChangeCategory(index);
    };

    return(<div className="categories">
    <ul>
      {categoriesNames.map((value, index) =>
        <li 
          key={"categorie_"+index}
          className={activeValue === index ? "active" : ""}
          onClick={() => classNameHandler(index)}>
            {value}
        </li>
      )}
    </ul>
  </div>)
}