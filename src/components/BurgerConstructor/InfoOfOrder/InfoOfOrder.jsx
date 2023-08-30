import React, { useMemo } from 'react'

import styles from './InfoOfOrder.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_MODAL_WINDOW } from '../../services/actions/orderedIngredientsAction'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalInfoOfOrder from './ModalInfoOfOrder/ModalInfoOfOrder';
import { sendOrder } from '../../services/reducers/orderedIngredientsReducer';

function InfoOfOrder() {

    const ingredients = useSelector(state => state.constructorReducer.allIngredients)

    const totalPrice = ingredients.reduce((acc, ingredient) =>
        ingredient.type === 'bun'
            ? ingredient.price * 2 + acc
            : ingredient.price + acc, 0)



    const dispatch = useDispatch();

    const openPopup = () => {
        dispatch({ type: OPEN_MODAL_WINDOW });
        dispatch(sendOrder(ingredients));
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.total}>{totalPrice}<CurrencyIcon /></h2>
            <Button size='large' type='primary' htmlType='button' onClick={openPopup}>Оформить заказ</Button>
            <ModalInfoOfOrder />
        </div>
    )
}

export default InfoOfOrder