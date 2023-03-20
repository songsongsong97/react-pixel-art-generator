import GridController from "./GridController";

export default function GridSelection() {
  return (
    <div className="mx-auato">
      <div className="flex justify-around">
        <GridController type="Height" />
        <GridController type="Width" />
      </div>
    </div>
  );
}
