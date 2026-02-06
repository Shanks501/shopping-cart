import Navbar from "../../components/Navbar/Navbar";
import Herobanner from "../../components/Herobanner/Herobanner";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import FeaturedCategorie from "../../components/FeaturedCategorie/FeaturedCategorie";
import SalesBanner from "../../components/SalesBanner/SalesBanner";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import styles from "./Homepage.module.css";

export default function Homepage() {
    return (
        <>
            <Navbar />
            <div className={styles.backgroundImageLayer}>
                <div className="container">
                    <Herobanner />
                </div>
            </div>
            <div className="container">
                <ServiceBanner />
                <div className={styles.sectionProductGrid}>
                    <h2>New Arrivals</h2>
                    <ProductGrid />
                    <div className={styles.buttonContainer}>
                        <Button
                            type={"button"}
                            text={"View all Products"}
                            styleClass={"primaryBtn"}
                        />
                    </div>
                </div>
            </div>
            <FeaturedCategorie />
            <SalesBanner />
            <Footer />
        </>
    );
}
