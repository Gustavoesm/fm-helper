import Attribute from "./Attribute";

const AttributesColumn = ({ attributes, groupName, ...props }) => {
  return (
    <fieldset className="flex flex-col gap-0.5" {...props}>
      {!!groupName && (
        <legend className="mb-2 w-full border-b border-white/10 pb-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">
          {groupName}
        </legend>
      )}
      {attributes.map((attribute) => {
        return <Attribute attribute={attribute} key={attribute} />;
      })}
    </fieldset>
  );
};

export default AttributesColumn;
