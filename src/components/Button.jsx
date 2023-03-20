export default function Buttons({ text, onClickEvent }) {
  return (
    <button
      className="bg-pink border-dotted border-fuchsia-400 border-4 p-2 rounded-md shadow-lg hover:bg-purple-950 hover:border-violet m-4 w-28"
      onClick={() => onClickEvent()}
    >
      <p className="text-white font-bold ">{text}</p>
    </button>
  );
}
