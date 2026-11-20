const Recomendation = ({ rank, traitName, traitRating }) => {
  return (
    <li className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2">
      <span className="w-5 text-right text-sm tabular-nums text-slate-500">{rank}</span>
      <div className="min-w-0 flex-1">
        <div className="flex justify-between gap-2 text-sm">
          <span className="truncate">{traitName}</span>
          <span className="font-semibold tabular-nums text-emerald-400">
            {traitRating.toFixed(1)}
          </span>
        </div>
        <div className="mt-1 h-1.5 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-emerald-400"
            style={{ width: `${(traitRating / 20) * 100}%` }}
          />
        </div>
      </div>
    </li>
  );
};

export default Recomendation;
