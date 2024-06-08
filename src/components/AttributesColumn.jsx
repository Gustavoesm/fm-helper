import Attribute from "./Attribute";

const AttributesColumn = ({ attributes, groupName, ...props }) => {
  return (
    <div className="grid grid-rows-14 gap-0 dev" {...props}>
      {!!groupName && <div className="text-center font-bold">{groupName}</div>}
      {attributes.map((attribute) => {
        return <Attribute attribute={attribute} key={attribute} />;
      })}
    </div>
  );
};

export default AttributesColumn;
