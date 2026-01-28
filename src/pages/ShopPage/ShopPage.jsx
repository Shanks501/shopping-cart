import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import ProductFilter from "../../components/ProductFilter/ProductFilter";

import styles from "./ShopPage.module.css";
import Input from "../../components/Input/Input";

export default function Shop() {
    return (
        <>
            <Navbar />
            <div className={styles.backgroundImageLayer}>
                <div className="container">
                    <Header headertitle={"Shop"} />
                </div>
            </div>
            <div className={`${styles.productListings} container`}>
                <ProductFilter />
                <div className={styles.sectionProductGrid}>
                    <div className={styles.sectionProductGrid_Sort}>
                        <p>Showing 1–9 of 55 results</p>
                        <select name="sorting" id="productSort">
                            <option value="">Default sorting</option>
                            <option value="nameAsc">Name (A - Z)</option>
                            <option value="nameDes">Name (Z - A)</option>
                            <option value="priceAsc">Price (Low-High)</option>
                            <option value="priceDes">Price (High-Low)</option>
                            <option value="ratingHigh">Rating (Highest)</option>
                            <option value="ratingLow">Rating (Lowest)</option>
                            <option value="modelAsc">Model (A - Z)</option>
                            <option value="modelDes">Model (Z - A)</option>
                        </select>
                    </div>
                    <ProductGrid />
                </div>
            </div>
        </>
    );
}
