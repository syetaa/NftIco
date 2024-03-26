import Image from "next/image";
import styles from "./Slider.module.css"

import { items } from "@/data/db.json"

import img1 from "@/public/Nft_pic1.png"

export default async function Slider(){
    const posts = items;

    return (
        <div>
            {posts.map((e) => (
                <div key={e.id} className={styles.card}>
                    <div className="img">
                        <Image src={img1} width={264} height={232} alt="img1"/>
                    </div>
                    <div className="cont0">
                        <div className="text1">

                        </div>
                        <div className="table">
                            <div className="cont1">
                                <div className={styles.text1}>

                                </div>
                                <div className={styles.text1}>

                                </div>
                            </div>
                            <div className="cont2">
                                <div className={styles.text1}>

                                </div>
                                <div className={styles.text1}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}