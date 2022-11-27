"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/imageCard.module.css";
import { dbImage } from "../pages/api/images";
function ImageCard({ uuid, fileName }: dbImage) {
  return (
    <>
      <a href={"/image-uploader/api/image/" + uuid}>
        <div className={styles.card}>
          <div className={styles.imageWrap}>
            <img
              className={styles.image}
              src={"/image-uploader/uploaded/" + uuid}
              alt="drop image"
              sizes="200px"
            />
          </div>
          <p>{fileName}</p>
        </div>
      </a>
    </>
  );
}

export default ImageCard;
