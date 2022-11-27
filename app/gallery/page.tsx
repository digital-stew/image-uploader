"use client";
import React, { useState, useEffect } from "react";
import ImageCard from "../../components/ImageCard";
import { dbImage } from "../../pages/api/images";
import styles from "./page.module.css";
function Page() {
  const [images, setImages] = useState<dbImage[]>([]);

  useEffect(() => {
    async function getImages() {
      const res = await fetch("https://tux-systems.co.uk/image-uploader/api/images/");
      if (res.status === 200) {
        const data: dbImage[] = await res.json();
        setImages([...data]);
        console.log(data)
      }
    }
    getImages();
    return () => {};
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {images.length > 0 &&
          images.map((image) => {
            return (
              <ImageCard
                key={image.uuid}
                uuid={image.uuid}
                fileName={image.fileName}
              />
            );
          })}
      </div>
    </>
  );
}

export default Page;
