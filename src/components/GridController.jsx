import { useContext } from "react";
import { AppContext } from "../App";
import { isMobile } from "react-device-detect";

export default function GridController({ type }) {
  const appContext = useContext(AppContext);
  const { width, height, handleSetValue } = appContext;

  return (
    <div>
      <label className="block mb-2 text-base text-black font-bold font-sans">
        Grid {type}: {type === "Height" ? height : width}
      </label>
      <input
        type="range"
        min="0"
        max={isMobile ? 12 : 40}
        value={type === "Height" ? height : width}
        id={`slider-${type.toLowerCase()}`}
        className="slider"
        onChange={(e) => {
          handleSetValue(type, e.target.value);
        }}
      />
    </div>
  );
}
