import React, {useEffect} from 'react';

import InfoOfOrder from './InfoOfOrder/InfoOfOrder';

import styles from './BurgerConstructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getStartConstructorElementsGenerator } from '../services/actions/ingredientsConstructorAction';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop } from 'react-dnd';
import { ADDED_INGREDIENT_TO_CONSTRUCTOR } from '../services/actions/ingredientsConstructorAction';

function BurgerConstructor() {

    const dispatch = useDispatch();

    const AllIngredients = useSelector(state => state.apiReducer.ingredientData);


    const consructorElements = useSelector(state => state.constructorReducer.constructorElements);

    console.log(AllIngredients)

    const [drop, ref] = useDrop({
        accept: 'ingredient',
        drop(itemId) {
            dispatch({
                type: ADDED_INGREDIENT_TO_CONSTRUCTOR,
            })
        }
    })



// useEffect(() => {
// dispatch(getStartConstructorElementsGenerator())
// }, [])


    return (
        <nav className={styles.container}>
            <div className={styles.ingredients}
            ref={ref}>
                {consructorElements && consructorElements.length > 0 && consructorElements.map((ingredient, i) => {
                    if (ingredient.type === 'souce' || ingredient.type === 'main') {
                        return (
                            <div className={styles.ingredient}
                            key={i}>
                                <DragIcon />
                            <ConstructorElement
                             text={ingredient.name}
                             price={ingredient.price}
                             thumbnail={ingredient.image}
                             />
                             </div>
                        )
                    } else if (ingredient.type === 'bun') {
                        return (
                            <div className={styles.ingredient}
                            key={i}>
                            <DragIcon />
                            <ConstructorElement
                            type='top'
                            isLocked={true}
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                            />
                            </div>
                        )
                    }
                })}
            </div>
            <InfoOfOrder />
        </nav>
    )
}

export default BurgerConstructor