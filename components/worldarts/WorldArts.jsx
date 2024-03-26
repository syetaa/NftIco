import styles from "./WorldArts.module.css"


const WorldArts = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.cont1}>
                    We will take all the worry and guesswork out of your<br/> blockchain and cryptocurrency concerns.
                </div>
                <div className={styles.cont2}>
                    <div className={styles.text1}>
                        <span className={styles.arts}>30.000+</span>
                    </div>
                    <div className={styles.text2}>
                        World Arts
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.text1}>
                        18.000+
                    </div>
                    <div className={styles.text2}>
                        Digital Artists
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.text1}>
                        22.000+
                    </div>
                    <div className={styles.text2}>
                        Live Auctions
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.text1}>
                        50.000+
                    </div>
                    <div className={styles.text2}>
                        Unique Products
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export {WorldArts};