import React from 'react';

import styles from './BurgerIngredients.module.css'

import Navigation from './Navigation/Navigation';
import BunsSelect from './BunsSelect/BunsSelect';
import Souses from './Souses/Souses';
import Main from './Main/Main';
import ModalInfoIngredients from './ModalInfoIngredients/ModalInfoIngredients';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CURRENT_INGREDIENT_TO_MODAL, getCurrentIngredientGenerator } from '../../services/actions/currentIngredientsToModalAction';

function BurgerIngredients ({ingredients}) {

    const [modalActive, setModalActive] = React.useState(false);

    const dispatch = useDispatch();

    function closePopupByKey (evt) {
        if (evt.key === 'Escape') {
            setModalActive(false)
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', closePopupByKey);

        return () => {
            document.removeEventListener('keydown', closePopupByKey)
        };

    }, [])


    const openPopup = (ingredient) => {
        setModalActive(true);

        dispatch({type: GET_CURRENT_INGREDIENT_TO_MODAL, payload: ingredient})
    }

    const currentIngredient = useSelector(store => store.currentIngredientReducer.currentIngredient);

    console.log(currentIngredient);


    return (
        <section className={styles.burgerIngredients}>
            <h1 className={styles.text}>Соберите бургер</h1>
            <Navigation />
            <BunsSelect openPopup={openPopup}/>
            <Souses openPopup={openPopup} />
            <Main openPopup={openPopup} />
            <ModalInfoIngredients active={modalActive} setActive={setModalActive}/>
        </section>
    )
}


export default BurgerIngredients;