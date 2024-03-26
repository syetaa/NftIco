import { Trending } from "@/components/trending/Trending"
import styles from "./page.module.css"

import Carousel from "@/components/carousel/Carousel"
import { Resources } from "@/components/resources/Resources"








export default function Stat() {
  return (
    <div>
        <div className={styles.textmain}>
            <Trending/>
            {/* <Carousel/> */}
            <Resources/>
            
        </div>
        
    </div>
  )
}
