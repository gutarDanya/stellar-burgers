import React from 'react'

import styles from './InfoOfOrder.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_MODAL_WINDOW } from '../../services/actions/orderedIngredientsAction'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalInfoOfOrder from './ModalInfoOfOrder/ModalInfoOfOrder';

function InfoOfOrder() {

    const dispatch = useDispatch();

    const openPopup = () => {
        dispatch({ type: OPEN_MODAL_WINDOW})
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.total}>610 <CurrencyIcon /></h2>
            <Button size='large' type='primary' htmlType='button' onClick={openPopup}>Оформить заказ</Button>
            <ModalInfoOfOrder />
        </div>
    )
}

export default InfoOfOrder