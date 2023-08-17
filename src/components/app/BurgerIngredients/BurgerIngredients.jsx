import React from 'react';

import styles from './BurgerIngredients.module.css'

import Navigation from './Navigation/Navigation';
import BunsSelect from './BunsSelect/BunsSelect';
import Souses from './Souses/Souses';
import Main from './Main/Main';
import ModalInfoIngredients from './ModalInfoIngredients/ModalInfoIngredients';

function BurgerIngredients () {

    const [modalActive, setModalActive] = React.useState(false)


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

    const openPopup = () => {
        setModalActive(true);
    }

    return (
        <section className={styles.burgerIngredients}>
            <h1 className={styles.text}>Соберите бургер</h1>
            <Navigation />
            <BunsSelect openPopup={openPopup} />
            <Souses openPopup={openPopup}/>
            <Main openPopup={openPopup}/>
            <ModalInfoIngredients active={modalActive} setActive={setModalActive}/>
        </section>
    )
}


export default BurgerIngredients;