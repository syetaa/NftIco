import Image from "next/image";
import styles from "./page.module.css";
import { Discover } from "@/components/discover/Discover";
import { WorldArts } from "@/components/worldarts/WorldArts";
import { Browse } from "@/components/browse/Browse";
import { Tabes } from "@/components/tabs/Tabes";
import { Crystal } from "@/components/crystal/Crystal";


export default function Home() {
  return (
    <>
      <div className={styles.textmain}>
        <Discover/>
        <WorldArts/>
        <Browse/>
        <Tabes/>
        <Crystal/>
        
      </div>
    </>
  );
}
