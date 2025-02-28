import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import styles from "./SideBar.module.css";

const categories = [
  { id: 1, type: "All" },
  { id: 2, type: "Electronics" },
  { id: 3, type: "Jewelery" },
  { id: 4, type: "Men's Clothing" },
  { id: 5, type: "Women's Clothing" },
];

function SideBar({ query, setQuery }) {
  const categoryHandeler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <>
      <div className={styles.sidebar}>
        <div>
          <FaListUl />
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandeler}>
          {categories.map((item) => (
            <li
              key={item.id}
              className={
                item.type.toLowerCase() === query.category
                  ? styles.selected
                  : null
              }
            >
              {item.type}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideBar;
