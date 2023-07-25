import React from 'react';

import styles from './BunsSelect.module.css';
import { data } from '../../../../utils/data';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const BunsSelect = (({openPopup}) => {

    return(
        <section>
            <h3 className={styles.title}>Булки</h3>
            <nav className={styles.container}>
            {data.map((ingredient) => {
                if (ingredient.type === 'bun') {
                    return (
                        <div className={styles.ingredient}
                        onClick={openPopup}>
                            {ingredient.name === 'Краторная булка N-200i'
                            ? <Counter count={1} size='default' extraClass='m-1'/>
                            : null}
                            <img src={ingredient.image} alt={ingredient.alt} />
                            <h4 className={styles.price}>{ingredient.price} <CurrencyIcon /></h4>
                            <p className={styles.name}>{ingredient.name}</p>
                        </div>
                    )
                }
            })}
            </nav>
        </section>
    )
}
)

export default BunsSelect;