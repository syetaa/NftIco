import Image from "next/image";
import styles from "./Clients.module.css"


const Clients = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <Image src="/clients1.png" width={100} height={69} alt="клиент1"/>
                <Image src="/clients2.png" width={208} height={60} alt="клиент2"/>
                <Image src="/clients3.png" width={200} height={78} alt="клиент3"/>
                <Image src="/clients4.png" width={200} height={78} alt="клиент4"/>
                <Image src="/clients5.png" width={174} height={60} alt="клиент5"/>
                
            </div>
            <hr className={styles.hr}></hr>
        </div>
    )
}

export {Clients};