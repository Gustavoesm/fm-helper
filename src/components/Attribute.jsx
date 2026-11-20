import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import parseAttribute from "../assets/parseAttribute";
import { attributeLabel } from "../assets/attributes";

// Same colour bands FM uses for attribute values.
const valueColor = (value) => {
  if (!value) return "text-slate-500";
  if (value <= 5) return "text-red-400";
  if (value <= 10) return "text-amber-400";
  if (value <= 15) return "text-lime-400";
  return "text-emerald-400";
};

// Trait-tier highlight colours (row background + label), separate from the value colours above.
export const tierStyles = {
  key: { label: "Key", row: "bg-green-500/20 ring-1 ring-green-400/40", text: "text-green-200" },
  secondary: { label: "Secondary", row: "bg-sky-500/15 ring-1 ring-sky-400/30", text: "text-sky-200" },
  other: { label: "Other", row: "bg-white/10", text: "text-slate-200" },
};

const Attribute = ({ attribute, tier }) => {
  const { playerAttributes, setPlayerAttributes } = useContext(PlayerContext);
  const value = playerAttributes[attribute];
  const label = attributeLabel(attribute);

  const onChange = (e) => {
    setPlayerAttributes((prevState) => {
      let newState = { ...prevState };
      newState[attribute] = parseAttribute(e.target.value);
      return newState;
    });
  };

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded px-2 py-0.5 transition-colors ${
        tier === undefined ? "hover:bg-white/5" : (tierStyles[tier]?.row ?? "")
      }`}
    >
      <label
        className={`truncate text-sm ${
          tier === undefined ? "text-slate-300" : (tierStyles[tier]?.text ?? "text-slate-500")
        }`}
        htmlFor={attribute}
      >
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
