import Image from "next/image";
import styles from "./Footer.module.css"
import Link from "next/link";
import { Clients } from "../clients/Clients";
import { Footer_info } from "../footer_info/Footer_info";

const Footer = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <Clients/>
                <Footer_info/>
            </div>
            
        </div>
    )
}

export {Footer};