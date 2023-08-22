import react from 'react';

import InfoOfOrder from './InfoOfOrder/InfoOfOrder';

import styles from './BurgerConstructor.module.css';
import { data } from '../../utils/data';
import { useSelector } from 'react-redux';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {

    const ingredients = useSelector(state => state.apiReducer.ingredientData[0])

    console.log(ingredients)
    return (
        <nav className={styles.container}>
            <div className={styles.ingredients}>
                <ConstructorElement
                    type='top'
                    isLocked={true}
                    text={data[0].name}
                    price={data[0].price}
                    thumbnail={data[0].image} />

                <div>
                    <DragIcon />
                    <ConstructorElement
                    text={data[5].name}
                    price={data[5].price}
                    thumbnail={data[5].image}
                />
                </div>

                <div>
                    <DragIcon />
                    <ConstructorElement
                    text={data[4].name}
                    price={data[4].price}
                    thumbnail={data[4].image}
                />
                </div>

                <div>
                    <DragIcon />
                    <ConstructorElement
                    text={data[7].name}
                    price={data[7].price}
                    thumbnail={data[7].image}
                />
                </div>

                <div>
                    <DragIcon />
                    <ConstructorElement
                    text={data[8].name}
                    price={data[8].price}
                    thumbnail={data[8].image}
                />
                </div>

                <div>
                    <DragIcon />
                    <ConstructorElement
                    text={data[8].name}
                    price={data[8].price}
                    thumbnail={data[8].image}
                />
                </div>

                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={data[0].name}
                    price={data[0].price}
                    thumbnail={data[0].image}
                />

            </div>
            <InfoOfOrder />
        </nav>
    )
}

export default BurgerConstructor