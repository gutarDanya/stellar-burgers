import React from 'react';
import styles from './IngredientsConstructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeIngredient } from '../../services/actions/ingredientsConstructorAction';



export const IngredientsConstructor = () => {

    const dispatch = useDispatch();

    const bun = useSelector(state => state.constructorReducer.bun);
    const main = useSelector(state => state.constructorReducer.main);

    const deleteIngredient = (ingredient) => {
        dispatch(removeIngredient(ingredient))
    }

    return (<>
        < ConstructorElement
                    text={bun.name}
                    thumbnail={bun.image}
                    price={bun.price}
                    type='top'
                    isLocked={true}
                />
                {main && main.length > 0 && main.map((ingredient, i) => {
                    return (
                        <div className={styles.ingredient}
                        key={i}>
                            <DragIcon />
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                isLocked={false}
                                thumbnail={ingredient.image}
                                handleClose={(evt) => deleteIngredient(evt)}
                            />
                        </div>
                    )
                })}
                <ConstructorElement
                    text={bun.name}
                    thumbnail={bun.image}
                    price={bun.price}
                    type='bottom'
                    isLocked={true}
                />
                </>
    )
}