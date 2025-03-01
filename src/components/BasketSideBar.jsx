import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbCheckbox } from "react-icons/tb";

import styles from "./BasketSidebar.module.css";

function BasketSideBar({ state, clickHandeler }) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbCheckbox />
        <p>Total:</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending ..."}</span>
      </div>
      <button onClick={() => clickHandeler("CHECKOUT")}>Checkout</button>
    </div>
  );
}

export default BasketSideBar;
