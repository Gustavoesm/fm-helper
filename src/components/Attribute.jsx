import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import parseAttribute from "../assets/parseAttribute";

const Attribute = ({ attribute }) => {
  const { playerAttributes, setPlayerAttributes } = useContext(PlayerContext);
  const onChange = (e) => {
    setPlayerAttributes((prevState) => {
      let newState = { ...prevState };
      newState[attribute] = parseAttribute(e.target.value);
      return newState;
    });
  };

  return (
    <label className="text-center m-0.5 dev" htmlFor={attribute}>
      {attribute}
      <input
        id={attribute}
        className="float-right text-center max-w-10 dev"
        value={playerAttributes[attribute] ?? ""}
        onChange={onChange}
        type="text"
      />
    </label>
  );
};

export default Attribute;
