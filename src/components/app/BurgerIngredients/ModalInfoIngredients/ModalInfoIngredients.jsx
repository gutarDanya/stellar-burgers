import React from 'react';

import styles from './ModalInfoIngredients.module.css';
import { data } from '../../../../utils/data';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import InfoOfIngridient from './InfoOfIngredient/InfoOfIngredinet';

const ModalInfoIngredients = ({ active, setActive }) => {
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
                <div className={styles.textContainer}>
                    <h3 className={styles.title}>Детали ингредиента</h3>
                    <CloseIcon
                        onClick={closePopup}/>
                </div>
                <img src={data[2].image_large} alt={data[2].name} />
                <InfoOfIngridient ingredient={data} />
            </section>
        </div>
    )
}

export default ModalInfoIngredients;