import styles from "./app.module.css";
import { data } from "../../utils/data";

import AppHeader from './AppHeader/AppHeader.jsx'
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <div className={styles.app}>
      <pre className={styles.container}>
        <>
          <AppHeader />
          <div className={styles.main}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </>
      </pre>
    </div>
  );
}

export default App;
