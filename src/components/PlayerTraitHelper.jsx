import { useState } from "react";

import PlayerAttributesForm from "./PlayerAttributesForm";
import RecomendationsTable from "./RecomendationsTable";
import { PlayerContext } from "../context/PlayerContext";

const PlayerTraitHelper = () => {
  const [playerAttributes, setPlayerAttributes] = useState({});

  return (
    <div className="centralized grid grid-cols-2 gap-4">
      <PlayerContext.Provider value={{ playerAttributes, setPlayerAttributes }}>
        <PlayerAttributesForm />
        <RecomendationsTable />
      </PlayerContext.Provider>
    </div>
  );
};

export default PlayerTraitHelper;
