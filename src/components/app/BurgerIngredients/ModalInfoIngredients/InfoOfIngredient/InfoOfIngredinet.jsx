import React from 'react';

import styles from './InfoOfIngredient.module.css';

import { data } from '../../../../../utils/data';

function InfoOfIngridient () {


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{data[2].name}</h2>
            <div className={styles.main}>
                <div className={styles.info}>
                    <h3 className={styles.text}>Калории,ккал</h3>
                    <p className={styles.numbers}>{data[2].calories}</p>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.text}>Белки, г</h3>
                    <p className={styles.numbers}>{data[2].proteins}</p>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.text}>Жиры, г</h3>
                    <p className={styles.numbers}>{data[2].fat}</p>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.text}>Углеводы, г</h3>
                    <p className={styles.numbers}>{data[2].carbohydrates}</p>
                </div> 
            </div>
        </div>
        
    )
}

export default InfoOfIngridient;