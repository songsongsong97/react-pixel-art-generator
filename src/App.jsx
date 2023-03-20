import "./index.css";
import Header from "./components/Header";
import GridSelection from "./components/GridSelection";
import Buttons from "./components/Buttons";
import PixelArt from "./components/PixelArt";
import Footer from "./components/Footer";
import { useState, createContext } from "react";

export const AppContext = createContext();

export default function App() {
  const DEFAULT_COLOR = "#fafafa";
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [showGrid, setShowGrid] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [drawErase, setDrawErase] = useState(false); // true: draw, false: erase
  const [pixels, setPixels] = useState(
    Array.from({ length: height }, () =>
      Array.from({ length: width }, () => color)
    )
  );

  const handleResestPixel = ( )=> {
    const defaultPixels = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => DEFAULT_COLOR)
    );
    setPixels(defaultPixels);
  }

  const handlePixelClick = (row, col, drawErase) => {
    const newPixels = [...pixels];
    newPixels[row][col] = drawErase ? DEFAULT_COLOR : color;
    setPixels(newPixels);
  };

  const handlePixelDrag = (row, col, drawErase) => {
    if (isDragging){
      const newPixels = [...pixels];
      newPixels[row][col] = drawErase ? DEFAULT_COLOR : color;
      setPixels(newPixels);
      }
  };

  const handleSetValue = (type, value) => {
    type === "Width" ? setWidth(value) : setHeight(value);
  };

  const handleCreateGrid = (width, height) => {
    setShowGrid(true);
    setPixels(
      Array.from({ length: height }, () =>
        Array.from({ length: width }, () => DEFAULT_COLOR)
      )
    );
  };

  const downloadImage = () =>{
    const scale = 25;
    const canvas = document.createElement("canvas");
    canvas.width = width * scale;
    canvas.height = height * scale;

    const context = canvas.getContext("2d");
    context.scale(scale,scale);

    pixels.forEach((row, rowIndex) => {
      row.forEach((pixelColor, colIndex) => {
        context.fillStyle = pixelColor;
        context.fillRect(colIndex, rowIndex, 1, 1);
      });
    });

    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `pixel-art.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <AppContext.Provider
      value={{
        width,
        height,
        color,
        pixels,
        showGrid,
        isDragging,
        drawErase,
        setColor,
        setShowGrid,
        setDrawErase,
        setIsDragging,
        handlePixelClick,
        handlePixelDrag,
        handleSetValue,
        handleCreateGrid,
        handleResestPixel,
        downloadImage,
      }}
    >
      <div className="mx-auto p-4">
        <div className="bg-zinc-50 m-4 p-4 rounded-3xl md:w-3/4 mx-auto">
          <Header />
          <GridSelection />
          <Buttons />
          <PixelArt />
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}
