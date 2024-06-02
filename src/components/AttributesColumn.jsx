import Attribute from "./Attribute";

const AttributesColumn = ({ attributes, groupName }) => {
  const handleChange = (e) => {
    console.log(e.target);
  };

  return (
    <div className="grid grid-rows-14 gap-0 dev">
      {!!groupName && <div className="text-center font-bold">{groupName}</div>}
      {attributes.map((attribute) => {
        return (
          <Attribute
            attribute={attribute}
            onChange={handleChange}
            key={attribute}
          />
        );
      })}
    </div>
  );
};

export default AttributesColumn;
