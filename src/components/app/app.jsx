import styles from "./app.module.css";
import { data } from "../../utils/data";

import AppHeader from './AppHeader/AppHeader.jsx'
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { apiReducer } from "../services/reducers/apiReducer";
import { constuctorIngredientsReducer } from "../services/actions/ingredientsConstructorAction";
import { currentIngredientsReudecer } from "../services/reducers/currentIngredientsToModalReducer";
import React from 'react'
import { useEffect, useState } from "react";

const rootReducer = combineReducers({
  apiReducer,
  constuctorIngredientsReducer,
  currentIngredientsReudecer,
  
})


const store = createStore(rootReducer)

function App() {

  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    const getIngredients = () => {
    fetch(`https://norma.nomoreparties.space/api/ingredients`)
    .then(res => res.json())
    .then(data => {setIngredients(Array.from(data.data))})
    .catch(err => console.log(`ошибка получения ингредиентов: ${err.status}`))
    }

    getIngredients()
    console.log(ingredients)
  }, [])


  return (
    <Provider store={store}>
    <div className={styles.app}>
      <pre className={styles.container}>
        <>
          <AppHeader />
          <div className={styles.main}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </>
      </pre>
    </div>
    </Provider>
  );
}

export default App;
