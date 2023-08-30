import React from 'react';
import styles from './IngredientsConstructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeIngredient } from '../../services/actions/ingredientsConstructorAction';
import { useDrag, useDrop } from 'react-dnd';
import { removeCount } from '../../services/actions/apiAction';



export const IngredientsConstructor = ({ main, bun }) => {
    const dispatch = useDispatch();


    const deleteIngredient = (ingredient) => {
        dispatch(removeIngredient(ingredient))
        dispatch(removeCount(ingredient))
        // console.log(ingredient)
    }

    const [, sortDrag] = useDrag

    return (<>
        {bun && bun.length !== 0
            ? < ConstructorElement
                text={bun.name}
                thumbnail={bun.image}
                price={bun.price}
                type='top'
                isLocked={true}
            />
            : null}
        {main && main.length > 0 && main.map((ingredient, i) => {
            return (
                <div className={styles.ingredient}
                    key={ingredient._id}>
                    <DragIcon />
                    <ConstructorElement
                        text={ingredient.name}
                        price={ingredient.price}
                        isLocked={false}
                        thumbnail={ingredient.image}
                        handleClose={() => deleteIngredient(ingredient)}
                    />
                </div>
            )
        })}
        {bun && bun.length !== 0
            ? < ConstructorElement
                text={bun.name}
                thumbnail={bun.image}
                price={bun.price}
                type='bottom'
                isLocked={true}
            />
            : null}
    </>
    )
}