import React, {useEffect}  from 'react';
import styles from './BunsSelect.module.css';
import { Bun } from './Bun/Bun';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../services/reducers/apiReducer';
import { useDrag } from 'react-dnd';

const BunsSelect = (({openPopup}) => {

    const ingredients = useSelector(state => state.apiReducer.ingredientData[0])

    return(
        <section>
            <h3 className={styles.title}>Булки</h3>
            <nav className={styles.container}>
            {ingredients && ingredients.length > 0 && ingredients.map((ingredient) => {
                if (ingredient.type === 'bun') {
                    return (
                        <Bun ingredient={ingredient} openPopup={openPopup}/>
                    )
                }
            })}
            </nav>
        </section>
    )
}
)

export default BunsSelect;