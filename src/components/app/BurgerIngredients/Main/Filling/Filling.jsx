import React from 'react';
import styles from './Filling.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';


export const Filling = ({ filling, openPopup }) => {

    const [, ref] = useDrag({
        type: 'ingredient',
        item: filling._id
    })
    return (
        <div className={styles.ingredient}
            onClick={() => openPopup(filling)}
            ref={ref}
            key={filling._id}>
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