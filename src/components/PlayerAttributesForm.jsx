import AttributesColumn from "./AttributesColumn";
import { attributeGroups } from "../assets/attributes";

const PlayerAttributesForm = ({ tiers }) => {
  return (
    <form className="grid gap-6 sm:grid-cols-3" onSubmit={(e) => e.preventDefault()}>
      {Object.entries(attributeGroups).map(([key, value]) => (
        <AttributesColumn
          groupName={key}
          attributes={Object.values(value)}
          tiers={tiers}
          key={key}
        />
      ))}
    </form>
  );
};

export default PlayerAttributesForm;
