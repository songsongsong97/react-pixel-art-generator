import React, { useContext } from "react";
import { AppContext } from "../App";

function PixelArt() {
  const appContext = useContext(AppContext);
  const {
    pixels,
    handlePixelClick,
    showGrid,
    handlePixelDrag,
    drawErase,
    setIsDragging,
  } = appContext;

  return (
    <div className="h-full grid justify-items-center m-4">
      {showGrid &&
        pixels.map((row, rowIndex) => (
          <div key={rowIndex} className="pixel-row">
            {row.map((pixelColor, colIndex) => (
              <div
                key={colIndex}
                className="pixel"
                style={{ backgroundColor: pixelColor }}
                onClick={() => handlePixelClick(rowIndex, colIndex, drawErase)}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseOver={() => {
                  handlePixelDrag(rowIndex, colIndex, drawErase);
                }}
              />
            ))}
          </div>
        ))}
    </div>
  );
}

export default PixelArt;
