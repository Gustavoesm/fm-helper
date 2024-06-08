import AttributesColumn from "./AttributesColumn";
import { attributeGroups } from "../assets/attributes";

const PlayerAttributesForm = () => {
  return (
    <form className="grid grid-cols-3 gap-2 dev">
      {Object.entries(attributeGroups).map(([key, value]) => (
        <AttributesColumn
          groupName={key}
          attributes={Object.values(value)}
          key={key}
        />
      ))}
    </form>
  );
};

export default PlayerAttributesForm;
