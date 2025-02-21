import Card from "../components/Card";
import { useProducts } from "../context/ProductsProvider";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.products}>
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>sideBar</div>
      </div>
    </>
  );
}

export default ProductsPage;
