import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import styles from "./SalesBanner.module.css";

export default function SalesBanner() {
    return (
        <div className={styles.bgImage}>
            <div className="container">
                <div className={styles.seactionSalesBanner}>
                    <div className={styles.cardText}>
                        <h4>
                            Get <i>20% OFF</i> on
                            <br /> your first purchase
                        </h4>
                        <p>Sign Up for our newsletter and never miss any offers</p>
                    </div>
                    <div className={styles.cardRegister}>
                        <Input
                            type={"email"}
                            id={"email"}
                            placeholderText={"Enter Your Email Address"}
                            styleClass={"input-component"}
                        />
                        <Button
                            type={"button"}
                            text={"REGISTER IT NOW"}
                            styleClass={"primaryButton-hover"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
