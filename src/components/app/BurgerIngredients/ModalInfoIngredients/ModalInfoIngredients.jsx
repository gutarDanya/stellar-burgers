import React from 'react';

import styles from './ModalInfoIngredients.module.css';
import { data } from '../../../../utils/data';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CLOSE_MODAL_WINDOW } from '../../../services/actions/orderedIngredientsAction';
import InfoOfIngridient from './InfoOfIngredient/InfoOfIngredinet';
import { useSelector, useDispatch } from 'react-redux';
import { removeCurrentIngredientGenerator } from '../../../services/actions/currentIngredientsToModalAction';

const ModalInfoIngredients = () => {

    const dispatch = useDispatch();

    const active = useSelector(state => state.orderedIngredientsReducer.modalOpened)

    const closePopup = () => {
        dispatch(removeCurrentIngredientGenerator())
        dispatch({type: CLOSE_MODAL_WINDOW})
    }

    const usedIngredient = useSelector(store => store.currentIngredientReducer.currentIngredient)
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
                <img src={usedIngredient.image_large} alt={usedIngredient.name} />
                <InfoOfIngridient ingredient={usedIngredient} />
            </section>
        </div>
    )
}

export default ModalInfoIngredients;