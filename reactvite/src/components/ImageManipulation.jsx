import { useState } from 'react';
import fav from "../images/fav.png";

function ImageManipulation() {

  // Image size
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  // Background color
  const [bgColor, setBgColor] = useState("white");

  // Image angle
  const [rotation, setRotation] = useState(0);

  // Generate random color
  function changeColor() {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    setBgColor(randomColor);
  }

  function increaseHeight() {
    setHeight(height + 20);
  }

  function decreaseHeight() {
    if (height > 20) {
      setHeight(height - 20);
    }
  }

  function increaseWidth() {
    setWidth(width + 20);
  }

  function decreaseWidth() {
    if (width > 20) {
      setWidth(width - 20);
    }
  }

  // Rotate image
  function rotateImage() {
    setRotation(prevRotation => prevRotation + 30);
  }

  return (
    <div>
      <h2>Image Manipulation</h2>

      <div
        style={{
          border: '4px solid red',
          height: '300px',
          width: '300px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bgColor
        }}
      >
        <img
          src={fav}
          height={height}
          width={width}
          style={{
            transform: `rotate(${rotation}deg)`
          }}
        />
      </div>

      <br />

      <div>
        <button onClick={increaseHeight}>
          Increase Height
        </button>

        <button onClick={decreaseHeight}>
          Decrease Height
        </button>

        <button onClick={increaseWidth}>
          Increase Width
        </button>

        <button onClick={decreaseWidth}>
          Decrease Width
        </button>

        <button onClick={changeColor}>
          Change Color
        </button>

        <button onClick={rotateImage}>
          Rotate Image
        </button>
      </div>
    </div>
  );
}

export default ImageManipulation;