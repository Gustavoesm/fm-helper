import { useContext } from "react";

import { PlayerContext } from "../context/PlayerContext";
import { getRecomendations } from "../assets/getRecomendations";
import Recomendation from "./Recomendation";
import Header from "./Header";

const RecomendationsTable = () => {
  const { playerAttributes } = useContext(PlayerContext);
  const topRecomendations = getRecomendations(playerAttributes)
    .slice(0, 12)
    .filter((it) => it.rating > 0);
  console.log(topRecomendations);
  return (
    <div className="h-full grid grid-rows-12 dev">
      <Header />
      {topRecomendations.map(({ trait, rating }) => (
        <Recomendation traitName={trait} traitRating={rating} key={trait} />
      ))}
    </div>
  );
};

export default RecomendationsTable;
