"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/imageCard.module.css";
import { dbImage } from "../pages/api/images";
function ImageCard({ uuid, fileName }: dbImage) {
  return (
    <>
      <a href={"/api/image/" + uuid}>
        <div className={styles.card}>
          <div className={styles.imageWrap}>
            <Image
              className={styles.image}
              src={"/uploaded/" + uuid}
              alt="drop image"
              sizes="200px"
              fill
            />
          </div>
          <p>{fileName}</p>
        </div>
      </a>
    </>
  );
}

export default ImageCard;
