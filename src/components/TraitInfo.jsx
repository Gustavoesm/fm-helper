import { useState } from "react";

import { allTraits } from "../assets/playerTraits";

const traitNames = Object.keys(allTraits).sort();

const TraitInfo = ({ selected, onSelect }) => {
  const [filter, setFilter] = useState("");

  const visibleTraits = traitNames.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section>
      <h2 className="mb-2 border-b border-white/10 pb-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">
        Traits
      </h2>
      <input
        className="mb-2 w-full rounded bg-slate-800 px-2 py-1 text-sm outline-none ring-1 ring-white/10 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-400"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search traits…"
        aria-label="Search traits"
        type="search"
      />
      <ul className="flex max-h-[28rem] flex-col gap-0.5 overflow-y-auto pr-1">
        {visibleTraits.map((name) => (
          <li key={name}>
            <button
              className={`w-full truncate rounded px-2 py-1 text-left text-sm ${
                name === selected
                  ? "bg-emerald-400/15 text-emerald-300"
                  : "text-slate-300 hover:bg-white/5"
              }`}
              onClick={() => onSelect(name)}
              aria-current={name === selected}
              type="button"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { traitNames };
export default TraitInfo;
