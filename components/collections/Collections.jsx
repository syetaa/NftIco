import styles from "./Collections.module.css"

import { IoMdArrowDropdown } from "react-icons/io";


const Collections = () => {
    return(
        <div>
           <div className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.text1}>
                        <span className={styles.nfts}>NFTs</span>  
                    </div>
                    <div className={styles.text2}>
                        Trending NFTs
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.tab}>
                        <a href="#">1 DAY <IoMdArrowDropdown/></a>
                        <a href="#">7 DAYS <IoMdArrowDropdown/></a>
                        <a href="#">30 DAYS <IoMdArrowDropdown/></a>
                    </div>
                </div>
                <div className={styles.cont3}>
                    <div className={styles.btn}>
                        <a href="#">Ethereum <IoMdArrowDropdown/></a>
                    </div>
                </div>
           </div>
            
        </div>
    )
}

export {Collections};