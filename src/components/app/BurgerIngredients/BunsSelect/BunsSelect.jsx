import React, {useEffect}  from 'react';
import styles from './BunsSelect.module.css';
import { data } from '../../../../utils/data';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../services/reducers/apiReducer';

const BunsSelect = (({openPopup}) => {

    const ingredients = useSelector(state => state.apiReducer.ingredientData[0])

    return(
        <section>
            <h3 className={styles.title}>Булки</h3>
            <nav className={styles.container}>
            {ingredients && ingredients.length > 0 && ingredients.map((ingredient) => {
                if (ingredient.type === 'bun') {
                    return (
                        <div className={styles.ingredient}
                        onClick={() => openPopup(ingredient)}>
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