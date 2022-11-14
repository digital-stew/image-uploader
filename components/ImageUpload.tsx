import React, { useState } from "react";
import styles from "../styles/imageUpload.module.css";
const dropImage = require("./images/image.svg") as string;
const finishImage = require("./images/finish.jpg") as string;
// import dropImage from "./images/image.svg";
import Image from "next/image";

function ImageUpload() {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // set dropEffect to copy i.e copy of the source item
    // e.dataTransfer.dropEffect = "copy";
    // dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file?.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...e.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }
  if (!loading && !finished) {
    return (
      <div className={styles.wrapper}>
        <h2>Upload your image</h2>
        <h3>File should be Jpeg, Png,...</h3>
        <div
          className={styles.dropZone}
          onDrop={(e) => {
            dropHandler(e);
          }}
          onDragOver={(e) => {
            handleDragOver(e);
          }}
        >
          <Image src={dropImage} alt="drop image" width="114" height="88" />
          <p>Drag & Drop your image here</p>
        </div>

        <p>Or</p>
        <button>Choose a file</button>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={styles.wrapper}>
        <h2>Uploading...</h2>
        <div className={styles.progressBar}></div>
      </div>
    );
  }
  if (!loading && finished) {
    return (
      <div className={styles.wrapper}>
        <h2>Uploaded Successfully!</h2>
        <Image
          src={finishImage}
          className={styles.finishImage}
          alt="drop image"
          width="338"
          height="224"
        />
        <div className={styles.downloadLink}>
          <p>Lorem ipsum dolor sit.</p>
          <button>Copy Link</button>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
