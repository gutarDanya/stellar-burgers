import React, {useEffect} from 'react';

import InfoOfOrder from './InfoOfOrder/InfoOfOrder';

import styles from './BurgerConstructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getStartConstructorElementsGenerator } from '../services/actions/ingredientsConstructorAction';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {

    const dispatch = useDispatch();

    const AllIngredients = useSelector(state => state.apiReducer.ingredientData[0]);

    const consructorElements = useSelector(state => state.constructorReducer.constructorElements[0]);


useEffect(() => {
dispatch(getStartConstructorElementsGenerator([AllIngredients[0], AllIngredients[8], AllIngredients[5], AllIngredients[11], AllIngredients[10], AllIngredients[10]]))
}, [])


    return (
        <nav className={styles.container}>
            <div className={styles.ingredients}>
                {consructorElements && consructorElements.length > 0 && consructorElements.map((ingredient) => {
                    if (ingredient.type === 'souce' || ingredient.type === 'main') {
                        return (
                            <ConstructorElement
                             isLocked={true}
                             text={ingredient.name}
                             price={ingredient.price}
                             thumbnail={ingredient.image}
                             />
                        )
                    } else if (ingredient.type === 'bun') {
                        return (
                            <div className={styles.ingredient}>
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