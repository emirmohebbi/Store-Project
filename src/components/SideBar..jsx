import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

function SideBar({ setQuery }) {
  const categoryHandeler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <>
      <div>
        <div>
          <FaListUl />
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandeler}>
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's clothing</li>
          <li>Women's clothing</li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
