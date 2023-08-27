import jsQR from "jsqr";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import design from "./style.module.css";
import { useState, useRef } from "react";

const QRCodeScanner = ({ onRecycledData, onProcessed }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [result, setResult] = useState("");

  const startScan = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });

    const canvas = canvasRef.current.getContext("2d");
    canvas.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    const intervalId = setInterval(() => {
      canvas.drawImage(
        videoRef.current,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const imageData = canvas.getImageData(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        setResult(code.data);
        clearInterval(intervalId);
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
        onRecycledData(code.data);
      }
    }, 100);
  };

  const handleProcessed = () => {
    onProcessed();
  };

  return (
    <div className={design.QR_container}>
      <Button
        content="Scan QR Code"
        onClick={startScan}
        style={{ backgroundColor: "#7F56D9", border: "none", marginLeft: "0" }}
      />
      <p>
        Make sure the QR code is inside the viewfinder rectangle to start
        scanning
      </p>
      <video ref={videoRef} style={{ display: "none" }}></video>
      <canvas ref={canvasRef} className={design.QrCanvas}></canvas>
      <div className={design.QR_result_container}>
        {result && (
          <Button
            onClick={handleProcessed}
            content={
              `You have recycled ` + result + ` bottles, click to proceed`
            }
            style={{
              backgroundColor: "#8BC34A",
              border: "1px solid #8BC34A",
              marginLeft: "0",
              width: "100%",
              textAlign: "center",
              fontWeight: "400",
            }}
          />
        )}
      </div>
    </div>
  );
};

QRCodeScanner.propTypes = {
  onRecycledData: PropTypes.func.isRequired,
  onProcessed: PropTypes.func.isRequired,
};

export default QRCodeScanner;
