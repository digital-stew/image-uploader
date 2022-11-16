import React from "react";
import Image from "next/image";
import styles from "../styles/imageCard.module.css";
import { dbImage } from "../pages/api/images";
import Link from "next/link";

function ImageCard({ uuid, fileName }: dbImage) {
  return (
    <>
      <Link href={"/api/image/" + uuid} className={styles.link}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={"/uploaded/" + uuid}
              alt="drop image"
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
          <p>{fileName}</p>
        </div>
      </Link>
    </>
  );
}

export default ImageCard;
