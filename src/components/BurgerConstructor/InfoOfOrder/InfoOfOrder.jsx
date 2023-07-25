import React from 'react'

import styles from './InfoOfOrder.module.css'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalInfoOfOrder from './ModalInfoOfOrder/ModalInfoOfOrder';

function InfoOfOrder () {

    const [modalActive, setModalActive] = React.useState(false);

    const openPopup = () => {
        setModalActive(true)
    }

    function closePopupByKey (evt) {
        if (evt.key === 'Escape') {
            setModalActive(false)
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', closePopupByKey);

        return () => {
            document.removeEventListener('keydown', closePopupByKey)
        }
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.total}>610 <CurrencyIcon /></h2>
            <Button size='large' type='primary' htmlType='button' onClick={openPopup}>Оформить заказ</Button>
            <ModalInfoOfOrder active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default InfoOfOrder