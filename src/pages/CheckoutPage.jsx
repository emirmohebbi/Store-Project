import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";

import { useCart } from "../context/CartProvider";

import styles from "./CheckoutPage.module.css";
function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandeler = (type, payload) => {
    dispatch({ type, payload });
  };
  if (!state.itemsCounter)
    return (
      <div className={styles.container} style={{ margin: "10px" }}>
        <p>Empty</p>
      </div>
    );
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandeler={clickHandeler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandeler={clickHandeler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
