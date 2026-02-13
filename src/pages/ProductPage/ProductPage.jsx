import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Footer";

import useFetchData from "../../hooks/useFetchData";
import styles from "./ProductPage.module.css";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";

export default function ProductPage() {
    const { id } = useParams();
    const { data, error, loading } = useFetchData(id);
    const [productSelectedSize, setProductSelectedSize] = useState("M");
    const productSize = ["S", "M", "L", "XL"];
    const [productQuantity, setProductQuantity] = useState(1);

    if (loading) return console.log("Loading...");
    if (error) return console.log("A network error was encountered");

    function handleProductSize(size) {
        setProductSelectedSize(size);
    }

    function handleDecreaseProductQuantity() {
        if (productQuantity === 0) return;
        setProductQuantity(productQuantity - 1);
    }

    function handleIncreaseProductQuantity() {
        setProductQuantity(productQuantity + 1);
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className={styles.productSection}>
                    <div className={styles.backgroundLayer}>
                        <img src={data.image} alt={"placeholder text"} width="350" height="425" />
                    </div>
                    <div className={styles.productInfo}>
                        <h2>Lorem ipsum</h2>
                        <span>${data.price}</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et, quasi
                            aut distinctio, libero nemo, suscipit ipsam id reiciendis eaque
                            cupiditate neque laboriosam dolor iusto in impedit maiores eos quidem.
                        </p>
                        <div className={styles.productSize}>
                            <h6>Size:</h6>
                            <div className={styles.sizeButtonContainer}>
                                {productSize.map((size) => (
                                    <Button
                                        type={"button"}
                                        key={size}
                                        text={size}
                                        variant={"selectionBtn"}
                                        onClick={() => handleProductSize(size)}
                                        data-hover={"true"}
                                        data-active={size === productSelectedSize && "true"}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className={styles.productActions}>
                            <div className={styles.productQuantity}>
                                <Button
                                    type={"button"}
                                    key={"decrease"}
                                    text={"-"}
                                    variant={"tertiaryBtn"}
                                    onClick={() => handleDecreaseProductQuantity()}
                                />
                                <Input
                                    type={"text"}
                                    value={productQuantity}
                                    styleClass={"secondaryInput"}
                                />
                                <Button
                                    type={"button"}
                                    key={"increase"}
                                    text={"+"}
                                    variant={"tertiaryBtn"}
                                    onClick={() => handleIncreaseProductQuantity()}
                                />
                            </div>
                            <Button
                                type={"button"}
                                key={"addToCart"}
                                text={"Add To Cart"}
                                variant={"secondaryBtn"}
                                shape={"roundedSm"}
                                border={"thinGreySm"}
                            />
                            <Button
                                type={"button"}
                                key={"favorite"}
                                text={<Icon path={mdiHeart} size={1} />}
                                variant={"secondaryBtn"}
                                shape={"roundedSm"}
                                border={"thinGreySm"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
