import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import "./WebcamCapture.css";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState();

  const dispatch = useDispatch();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div className="webcamCapture">
        <Webcam
          audio={false}
          height={videoConstraints.height}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={videoConstraints.width}
          videoConstraints={videoConstraints}
        />
        <RadioButtonUncheckedIcon
          className="webcamCapture__button"
          onClick={capture}
          fontSize="large"
        />
      </div>
      <img className="capture-img" src={image} alt="" />
    </div>
  );
}

export default WebcamCapture;
