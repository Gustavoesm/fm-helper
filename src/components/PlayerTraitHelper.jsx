import { useState } from "react";

import PlayerAttributesForm from "./PlayerAttributesForm";
import RecomendationsTable from "./RecomendationsTable";
import { PlayerContext } from "../context/PlayerContext";

const PlayerTraitHelper = () => {
  const [playerAttributes, setPlayerAttributes] = useState({});

  return (
    <PlayerContext.Provider value={{ playerAttributes, setPlayerAttributes }}>
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
        <main className="w-full max-w-6xl rounded-2xl bg-slate-950/85 p-6 text-slate-100 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
          <header className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight">FM Trait Helper</h1>
            <p className="text-sm text-slate-400">
              Enter your player's attributes (1–20) to see which traits suit them best.
            </p>
          </header>
          <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
            <PlayerAttributesForm />
            <RecomendationsTable />
          </div>
        </main>
      </div>
    </PlayerContext.Provider>
  );
};

export default PlayerTraitHelper;
