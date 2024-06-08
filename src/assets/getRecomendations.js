import { allTraits } from "./playerTraits";

export const getRecomendations = (playerAttributes) => {
  if (Object.keys(playerAttributes).length === 0) return [];

  let averageTraitRatings = [];

  for (const traitKey in allTraits) {
    let sum = 0;
    for (const attributeKey of allTraits[traitKey]) {
      sum += playerAttributes[attributeKey] ?? 0;
    }
    averageTraitRatings.push({
      trait: traitKey,
      rating: sum / allTraits[traitKey].length,
    });
  }

  averageTraitRatings.sort((a, b) => b.rating - a.rating);

  return averageTraitRatings;
};
