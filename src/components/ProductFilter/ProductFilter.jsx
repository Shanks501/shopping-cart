import styles from "./ProductFilter.module.css";
import Input from "../../components/Input/Input";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

export default function ProductFilter() {
    return (
        <div className={styles.productFilter_container}>
            <div className={styles.productSearch_Container}>
                <Input
                    type={"text"}
                    id={"productSearch"}
                    placeholderText={"Seach For Products"}
                    styleClass={"productSearch"}
                />
                <Icon path={mdiMagnify} size={"1.5rem"} color={"#747474"} />
            </div>

            <div className={styles.filterCategories}>
                <h3>Categories</h3>
                <span>All</span>
                <span>T-Shirt</span>
                <span>Hoodies</span>
                <span>Pants</span>
                <span>Sweaters</span>
            </div>
            <div className={styles.filterTags}>
                <h3>Tags</h3>
                <span>T-shirts</span>
                <span>Clothes</span>
                <span>Cotton</span>
                <span>Woolen</span>
            </div>
            <div className={styles.filterBrands}>
                <h3>Brands</h3>
                <span>Addidas</span>
                <span>Puma</span>
                <span>Nike</span>
            </div>
            <div className={styles.filterByPrice}>
                <h3>Filter By Price</h3>
                <span>Less than $10</span>
                <span>$10- $20</span>
                <span>$20- $30</span>
                <span>$30- $40</span>
                <span>$40- $50</span>
                <span>$50- $60</span>
            </div>
        </div>
    );
}
