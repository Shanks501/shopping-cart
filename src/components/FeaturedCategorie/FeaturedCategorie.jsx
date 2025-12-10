import styles from "./FeaturedCategorie.module.css";

function CategorySection({ text, img }) {
    return (
        <>
            <div className={styles[img]}>
                <p>{text}</p>
            </div>
        </>
    );
}

export default function FeaturedCategorie() {
    return (
        <div className={styles.sectionFeaturedCategorie}>
            <CategorySection text={"Printed T-Shirts"} img={"catagorySectionPrintedTshirts"} />
            <CategorySection text={"Mono T-Shirts"} img={"catagorySectionMonoTshirts"} />
            <CategorySection text={"Hoodies"} img={"catagorySectionHoodies"} />
        </div>
    );
}
