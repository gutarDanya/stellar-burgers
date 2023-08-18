import React from 'react';

import styles from './BurgerIngredients.module.css'

import Navigation from './Navigation/Navigation';
import BunsSelect from './BunsSelect/BunsSelect';
import Souses from './Souses/Souses';
import Main from './Main/Main';
import ModalInfoIngredients from './ModalInfoIngredients/ModalInfoIngredients';
import { useSelector } from 'react-redux';

function BurgerIngredients ({ingredients}) {

    const [modalActive, setModalActive] = React.useState(false);
    const [currentIngredient, setCurrentIngredient] = React.useState({})




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


    //const ingredients = useSelector(store => store.apiReducer.ingredientsData)


    const openPopup = (ingredient) => {
        setModalActive(true);

        setCurrentIngredient(ingredient)
    }

    return (
        <section className={styles.burgerIngredients}>
            <h1 className={styles.text}>Соберите бургер</h1>
            <Navigation />
            <BunsSelect openPopup={openPopup} ingredients={ingredients}/>
            <Souses openPopup={openPopup} ingredients={ingredients}/>
            <Main openPopup={openPopup} ingredients={ingredients}/>
            <ModalInfoIngredients active={modalActive} setActive={setModalActive} usedIngredient={currentIngredient}/>
        </section>
    )
}


export default BurgerIngredients;