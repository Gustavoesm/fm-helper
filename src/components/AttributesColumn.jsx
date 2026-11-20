import Attribute from "./Attribute";

// tiers: { [attributeKey]: "key" | "secondary" | "other" } in trait mode, undefined otherwise.
const AttributesColumn = ({ attributes, groupName, tiers, ...props }) => {
  return (
    <fieldset className="flex flex-col gap-0.5" {...props}>
      {!!groupName && (
        <legend className="mb-2 w-full border-b border-white/10 pb-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">
          {groupName}
        </legend>
      )}
      {attributes.map((attribute) => {
        return (
          <Attribute
            attribute={attribute}
            tier={tiers && (tiers[attribute] ?? null)}
            key={attribute}
          />
        );
      })}
    </fieldset>
  );
};

export default AttributesColumn;
