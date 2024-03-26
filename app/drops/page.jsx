import Carousel2 from "@/components/carousel2/Carousel2"
import styles from "./page.module.css"
import { Notable } from "next/font/google"
import { Notabledrops } from "@/components/notabledrops/Notabledrops"
import { Collections } from "@/components/collections/Collections"
import { Collections_cards } from "@/components/collections_cards/Collections_cards"
import { SeeAll } from "@/components/seeall/SeeAll"

export default function Drops() {
  return (
    <div>
        <div className={styles.textmain}>
          <Notabledrops/>
          <Carousel2/>
          <Collections/>
          <Collections_cards/>
          <SeeAll/>
        </div>
        
    </div>
  )
}
