import React from 'react';

import styles from './Main.module.css';
import { data } from '../../../../utils/data';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';

function Main({openPopup}) {

    const ingredients = useSelector(store => store.apiReducer.ingredientData[0])
    
    return (
        <section>
            <h3 className={styles.title}>Начинка</h3>
            <nav className={styles.container}>
                {ingredients && ingredients.length > 0 && ingredients.map((filling) => {
                    if (filling.type === 'main') {
                        return (
                            <div  className={styles.ingredient}
                            onClick={() => openPopup(filling)}>
                                {filling.name === 'Мясо бессмертных моллюсков Protostomia' || filling.name === 'Плоды Фалленианского дерева'
                                ? <Counter count={1} size="default" extraClass="m-1" />
                                : null}
                                {filling.name === 'Хрустящие минеральные кольца'
                                ? <Counter count={2} size='default' extraClass='m-1' />
                                : null}
                                <img src={filling.image} alt={filling.alt} />
                                <h4 className={styles.price}>{filling.price} <CurrencyIcon /></h4>
                                <p className={styles.name}>{filling.name}</p>
                            </div>
                        )
                    }
                })}
            </nav>
        </section>
    )
}

export default Main
