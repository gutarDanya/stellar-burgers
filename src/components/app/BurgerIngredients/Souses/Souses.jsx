import React from 'react';

import styles from './Souses.module.css';
import { data } from '../../../../utils/data';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

function Souses ({openPopup}) {

    const ingredients = useSelector(store => store.apiReducer.ingredientData[0])

    return (
        <section>
            <h3 className={styles.title}>Соусы</h3>
            <nav className={styles.container}>
            {ingredients && ingredients.length > 0 && ingredients.map((souses) => {
                if (souses.type === 'sauce') {
                    return (
                        <div className={styles.ingredient}
                        onClick={() => openPopup(souses)}>
                            {souses.name === 'Соус традиционный галактический'
                            ? <Counter count={1} size='default' extraClass='m-1' />
                            : null}
                            <img src={souses.image} alt={souses.alt} />
                            <h4 className={styles.price}>{souses.price} <CurrencyIcon /></h4>
                            <p className={styles.name}>{souses.name}</p>
                        </div>
                    )
                }
            })}
            </nav>
        </section>
    )
}

export default Souses;