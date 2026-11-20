import { useLayoutEffect, useRef, useState } from "react";

import PlayerAttributesForm from "./PlayerAttributesForm";
import RecomendationsTable from "./RecomendationsTable";
import TraitInfo, { traitNames } from "./TraitInfo";
import { tierStyles } from "./Attribute";
import { allTraits } from "../assets/playerTraits";
import { PlayerContext } from "../context/PlayerContext";

const modes = {
  player: {
    label: "Player recommendations",
    description: "Enter your player's attributes (1–20) to see which traits suit them best.",
  },
  trait: {
    label: "Trait info",
    description: "Pick a trait to see which attributes matter most for it.",
  },
};

const PlayerTraitHelper = () => {
  const [playerAttributes, setPlayerAttributes] = useState({});
  const [mode, setMode] = useState("player");
  const [selectedTrait, setSelectedTrait] = useState(traitNames[0]);
  const formRef = useRef(null);
  const lastRect = useRef(null);

  // { [attributeKey]: tier } for the selected trait; undefined turns highlighting off.
  const tiers =
    mode === "trait"
      ? Object.fromEntries(
          Object.entries(allTraits[selectedTrait]).flatMap(([tier, attributes]) =>
            attributes.map((attribute) => [attribute, tier])
          )
        )
      : undefined;

  const switchMode = (next) => {
    lastRect.current = formRef.current.getBoundingClientRect();
    setMode(next);
  };

  // FLIP: the form jumps to its new grid column, then slides there from where it was.
  useLayoutEffect(() => {
    const prev = lastRect.current;
    lastRect.current = null;
    if (!prev || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = formRef.current.getBoundingClientRect();
    const dx = prev.left - rect.left;
    const dy = prev.top - rect.top;
    if (!dx && !dy) return;
    formRef.current.animate(
      [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }],
      { duration: 450, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" }
    );
  }, [mode]);

  return (
    <PlayerContext.Provider value={{ playerAttributes, setPlayerAttributes }}>
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
        <main className="w-full max-w-6xl rounded-2xl bg-slate-950/85 p-6 text-slate-100 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
          <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">FM Trait Helper</h1>
              <p className="text-sm text-slate-400">{modes[mode].description}</p>
            </div>
            <div className="flex rounded-lg bg-slate-800 p-1 ring-1 ring-white/10" role="group">
              {Object.entries(modes).map(([key, { label }]) => (
                <button
                  className={`rounded-md px-3 py-1 text-sm font-medium ${
                    key === mode ? "bg-emerald-400 text-slate-950" : "text-slate-300 hover:text-white"
                  }`}
                  onClick={() => switchMode(key)}
                  aria-pressed={key === mode}
                  type="button"
                  key={key}
                >
                  {label}
                </button>
              ))}
            </div>
          </header>
          <div
            className={`grid gap-8 ${
              mode === "player" ? "lg:grid-cols-[3fr_2fr]" : "lg:grid-cols-[2fr_3fr]"
            }`}
          >
            <div ref={formRef} className={mode === "trait" ? "lg:order-last" : ""}>
              {mode === "trait" && (
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                  <span className="mr-1 font-semibold text-slate-300">{selectedTrait}</span>
                  {Object.entries(tierStyles).map(([tier, { label, row, text }]) => (
                    <span className={`rounded px-2 py-0.5 ${row} ${text}`} key={tier}>
                      {label}
                    </span>
                  ))}
                  <span className="rounded px-2 py-0.5 text-slate-500">Not used</span>
                </div>
              )}
              <PlayerAttributesForm tiers={tiers} />
            </div>
            {mode === "player" ? (
              <RecomendationsTable />
            ) : (
              <TraitInfo selected={selectedTrait} onSelect={setSelectedTrait} />
            )}
          </div>
        </main>
      </div>
    </PlayerContext.Provider>
  );
};

export default PlayerTraitHelper;
