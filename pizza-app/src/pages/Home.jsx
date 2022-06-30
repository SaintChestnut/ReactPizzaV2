import React, { useEffect, useState } from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
    const [pizzasData, setPizzaData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://62b03922b0a980a2ef4db80d.mockapi.io/pizzas")
            .then((res) => res.json())
            .then((jsonData) => {
                setPizzaData(jsonData);
                setLoading(false);
            });
    }, [])

    return (<div className="container">
        <div className="content__top">
            <Categories />
            <Sort />
        </div>
        <h2 className="content__title">All pizza</h2>
        <div className="content__items">
            {isLoading ? [...new Array(6)].map((_, index) =>
                <PizzaSkeleton key={index} />) :
                pizzasData.map((value, index) => <PizzaBlock data={value} index={index} key={"pizza-" + index} />)
            }
        </div>
    </div>)
}

export default Home;