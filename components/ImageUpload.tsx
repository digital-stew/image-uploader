import React, { useState, useRef } from "react";
import styles from "../styles/imageUpload.module.css";
const dropImage = require("./images/image.svg") as string;
const finishImage = require("./images/finish.jpg") as string;
import Image from "next/image";

function ImageUpload() {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState() as any;

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files.length > 1) {
      return setError("1 picture at a time please");
    }
    setImage(e.dataTransfer.files[0]);
  }

  async function upload() {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch("/api/upload", {
      method: "POST",

      body: formData,
    });
    const data = await res.json();
    setLoading(false);
    setFinished(true);
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
          {image ? (
            //keep aspect ratio
            <Image
              src={URL.createObjectURL(image)}
              alt="drop image"
              layout={"fill"}
              objectFit={"contain"}
            />
          ) : (
            <>
              <Image src={dropImage} alt="drop image" width="114" height="88" />{" "}
              <p>Drag & Drop your image here</p>
            </>
          )}
        </div>

        {image ? (
          <div>
            <p></p>
            <button onClick={() => upload()}>upload</button>
            <button onClick={() => setImage()}>cancel</button>
          </div>
        ) : (
          <>
            <p>Or</p>
            <input
              style={{ display: "none" }}
              type="file"
              id="selectFile"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button
              onClick={() => document.getElementById("selectFile").click()}
            >
              Choose a file
            </button>
          </>
        )}

        {error && error}
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
