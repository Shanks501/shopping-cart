import Icon from "@mdi/react";
import { mdiTruckOutline, mdiShieldCheckOutline, mdiLicense, mdiCash } from "@mdi/js";
import styles from "./ServiceBanner.module.css";

export default function ServiceBanner() {
    function ServiceCard({ icon, title, description }) {
        return (
            <div className={styles.serviceCard}>
                <Icon path={icon} size={1.5} />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        );
    }

    return (
        <div className={styles.serviceSection}>
            <ServiceCard
                icon={mdiTruckOutline}
                title={"Free Delivery"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
            />
            <ServiceCard
                icon={mdiShieldCheckOutline}
                title={"100% secure payment"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
            />

            <ServiceCard
                icon={mdiLicense}
                title={"Quality guarantee"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
            />

            <ServiceCard
                icon={mdiCash}
                title={"Daily Offer"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
            />
        </div>
    );
}
