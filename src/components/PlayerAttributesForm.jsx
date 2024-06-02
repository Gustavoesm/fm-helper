import AttributesColumn from "./AttributesColumn";
import { PlayerContext } from "../context/PlayerContext";
import {
  technicalAttributes,
  mentalAttributes,
  physicalAttributes,
} from "../assets/attributeNames";
import { useState } from "react";

const PlayerAttributesForm = () => {
  const [playerAttributes, setPlayerAttributes] = useState({});

  return (
    <PlayerContext.Provider value={[playerAttributes, setPlayerAttributes]}>
      <form className="grid grid-cols-3 gap-2 dev">
        <AttributesColumn
          groupName="technical"
          attributes={technicalAttributes}
        />
        <AttributesColumn groupName="mental" attributes={mentalAttributes} />
        <AttributesColumn
          groupName="physical"
          attributes={physicalAttributes}
        />
      </form>
    </PlayerContext.Provider>
  );
};

export default PlayerAttributesForm;
