import React, { useEffect } from 'react';

import InfoOfOrder from './InfoOfOrder/InfoOfOrder';

import styles from './BurgerConstructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getStartConstructorElementsGenerator } from '../services/actions/ingredientsConstructorAction';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { ADDED_INGREDIENT_TO_CONSTRUCTOR } from '../services/actions/ingredientsConstructorAction';
import { addBun, addMainIngredient } from '../services/actions/ingredientsConstructorAction';
import { removeIngredient } from '../services/actions/ingredientsConstructorAction';
import { IngredientsConstructor } from './IngredientsConstructor/IngredientsConstructor';

function BurgerConstructor() {

    const dispatch = useDispatch();


    const [, ref] = useDrop({
        accept: 'ingredient',
        drop(item) {
            if (item.type === 'bun') {
                dispatch(addBun(item.ingredient))
            } else {
                dispatch(addMainIngredient(item.ingredient))
            }
        }
    })


    return (
        <nav className={styles.container}>
            <div className={styles.ingredients}
                ref={ref}>
                    <IngredientsConstructor />
            </div>
            <InfoOfOrder />
        </nav>
    )
}

export default BurgerConstructor