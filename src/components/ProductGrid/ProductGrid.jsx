import useFetchData from "../../hooks/useFetchData";
import Button from "../Button/Button";
import styles from "./ProductGrid.module.css";

export default function ProductGrid() {
    function ProductCard({ productId }) {
        const { data, error, loading } = useFetchData(productId);

        if (loading) return console.log("Loading...");
        if (error) return console.log("A network error was encountered");

        console.log(data.title.split("-"));
        const productTitle = data.title.split("-");
        return (
            <div className={styles.productCard}>
                <div className={styles.backgroundLayer}>
                    <img src={data.image} alt={"placeholder text"} width="200" height="250" />
                </div>
                <p>{productTitle[0]}</p>
                <span></span>
            </div>
        );
    }

    return (
        <div className={styles.sectionProductGrid}>
            <h2>New Arrivals</h2>
            <ProductCard productId={1} />
            <ProductCard productId={2} />
            <ProductCard productId={3} />
            <ProductCard productId={4} />
            <ProductCard productId={4} />
            <ProductCard productId={3} />
            <ProductCard productId={2} />
            <ProductCard productId={1} />
            <div className={styles.buttonContainer}>
                <Button type={"button"} text={"View all Products"} styleClass={"primaryButton"} />
            </div>
        </div>
    );
}
