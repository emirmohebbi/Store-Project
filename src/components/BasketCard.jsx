import { MdDeleteOutline } from "react-icons/md";

import { shortenText } from "../helper/helper";

import styles from "./BasketCard.module.css";

function BasketCard({ data, clickHandeler }) {
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title} />
      <p>{shortenText(data.title)}</p>
      <div className={styles.actions}>
        {data.quantity === 1 && (
          <button onClick={() => clickHandeler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={() => clickHandeler("DECREASE", data)}>-</button>
        )}
        <span>{data.quantity}</span>
        <button onClick={() => clickHandeler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
