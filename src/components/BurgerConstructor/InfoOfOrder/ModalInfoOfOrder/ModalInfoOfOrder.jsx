import React from 'react';

import styles from './ModalInfoOfOrder.module.css';

import done from '../../../../images/done.png'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';


function ModalInfoOfOrder ({active, setActive}) {

    const closePopup = () => {
        setActive(false)
    }
    return (
        <div className={active
        ? styles.modal
        : styles.modalHidden}
        onClick={closePopup}>
            <section className={styles.popup}
            onClick={e => e.stopPropagation()}>
                <div className={styles.mark}><CloseIcon onClick={closePopup}/></div>
                <h2 className='text text_type_digits-large'>034536</h2>
                <p className={styles.title}>инетификатор заказа</p>
                <img src={done} alt='картинка' 
                className={styles.picture}/>
                <p className={styles.wait}>Ваш заказ начали готовить</p>
                <p className={styles.bluredText}>Дождитесь готовности на орбитальной станции</p>
            </section>
        </div>
    )
}

export default ModalInfoOfOrder;