import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import parseAttribute from "../assets/parseAttribute";

// Same colour bands FM uses for attribute values.
const valueColor = (value) => {
  if (!value) return "text-slate-500";
  if (value <= 5) return "text-red-400";
  if (value <= 10) return "text-amber-400";
  if (value <= 15) return "text-lime-400";
  return "text-emerald-400";
};

const Attribute = ({ attribute }) => {
  const { playerAttributes, setPlayerAttributes } = useContext(PlayerContext);
  const value = playerAttributes[attribute];
  // "offTheBall" -> "Off The Ball"
  const label = attribute[0].toUpperCase() + attribute.slice(1).replace(/[A-Z]/g, " $&");

  const onChange = (e) => {
    setPlayerAttributes((prevState) => {
      let newState = { ...prevState };
      newState[attribute] = parseAttribute(e.target.value);
      return newState;
    });
  };

  return (
    <div className="flex items-center justify-between gap-2 rounded px-2 py-0.5 hover:bg-white/5">
      <label className="truncate text-sm text-slate-300" htmlFor={attribute}>
        {label}
      </label>
      <input
        id={attribute}
        className={`w-10 rounded bg-slate-800 py-0.5 text-center text-sm font-bold tabular-nums outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400 ${valueColor(value)}`}
        value={value ?? ""}
        onChange={onChange}
        onFocus={(e) => e.target.select()}
        placeholder="–"
        inputMode="numeric"
        maxLength={2}
        type="text"
      />
    </div>
  );
};

export default Attribute;
