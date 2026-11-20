import { useContext } from "react";

import { PlayerContext } from "../context/PlayerContext";
import { getRecomendations } from "../assets/getRecomendations";
import Recomendation from "./Recomendation";

const RecomendationsTable = () => {
  const { playerAttributes } = useContext(PlayerContext);
  const topRecomendations = getRecomendations(playerAttributes)
    .slice(0, 12)
    .filter((it) => it.rating > 0);

  return (
    <section>
      <h2 className="mb-2 border-b border-white/10 pb-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">
        Recommended traits
      </h2>
      {topRecomendations.length === 0 ? (
        <p className="py-8 text-center text-sm text-slate-500">
          Fill in some attributes to see recommendations.
        </p>
      ) : (
        <ol className="flex flex-col gap-1.5">
          {topRecomendations.map(({ trait, rating }, i) => (
            <Recomendation rank={i + 1} traitName={trait} traitRating={rating} key={trait} />
          ))}
        </ol>
      )}
    </section>
  );
};

export default RecomendationsTable;
