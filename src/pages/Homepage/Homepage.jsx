import Navbar from "../../components/Navbar/Navbar";
import Herobanner from "../../components/Herobanner/Herobanner";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import FeaturedCategorie from "../../components/FeaturedCategorie/FeaturedCategorie";

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
                <ProductGrid />
            </div>
            <FeaturedCategorie />
        </>
    );
}
