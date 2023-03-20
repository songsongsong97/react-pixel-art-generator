import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Buttons() {
  const appContext = useContext(AppContext);
  const {
    color,
    width,
    height,
    drawErase,
    setColor,
    setShowGrid,
    setDrawErase,
    handleSetValue,
    handleCreateGrid,
    handleResestPixel,
    downloadImage,
  } = appContext;

  return (
    <div className="flex flex-wrap justify-around w-full mx-auto">
      <Button
        text={"Create Grid"}
        onClickEvent={() => handleCreateGrid(width, height)}
      />
      <Button
        text={"Clear Grid"}
        onClickEvent={() => {
          handleSetValue("Width", 10);
          handleSetValue("Height", 10);
          setShowGrid(false);
        }}
      />
      <Button
        text={"Reset"}
        onClickEvent={() => {
          handleResestPixel();
        }}
      />
      <Button
        text={drawErase ? "Draw" : "Erase"}
        onClickEvent={() => {
          setDrawErase(!drawErase);
        }}
      />

      <input
        type="color"
        id="colorpicker"
        value={color}
        className="colorPicker m-4 w-24 h-14"
        onChange={(e) => setColor(e.target.value)}
      />

      <Button
        text={"Download"}
        onClickEvent={() => {
          downloadImage();
        }}
      />
    </div>
  );
}
