import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">All pizza</h2>
          <div className="content__items">
            <PizzaBlock tittle={"Cheesburger"} price={4.99}/>
            <PizzaBlock tittle={"Peperoni"} price={7.99}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
