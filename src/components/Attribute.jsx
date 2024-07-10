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
    <div className="flex flex-column">
      <label className="text-center m-0.5 dev" htmlFor={attribute}>
        {attribute}
      </label>
      <input
        id={attribute}
        className="float-right text-center w-10 dev"
        value={playerAttributes[attribute] ?? ""}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};

export default Attribute;
