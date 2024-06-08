const Recomendation = ({ traitName, traitRating }) => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 my-auto ml-4">{traitName}</div>
      <div className="text-center my-auto">{traitRating.toFixed(2)}</div>
    </div>
  );
};

export default Recomendation;
