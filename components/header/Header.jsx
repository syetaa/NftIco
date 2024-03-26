import Image from "next/image";
import styles from "./Header.module.css"
import Link from "next/link";

const Header = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.logo}>
                    <Image src="/lOGO.png" 
                    width={124} height={44} alt="logo1"/>
                </div>
                <div className={styles.links}>
                    <Link href="/">Explore</Link>
                    <Link href="/stat">Stats</Link>
                    <Link href="/drops">Drops</Link>
                </div>
                <div className={styles.btns}>
                    <input className={styles.inp1} placeholder="Search..."/>
                    <a className={styles.get} href="#homepage">Get in Touch</a>
                </div>
            </div>
            
        </div>
    )
}

export {Header};