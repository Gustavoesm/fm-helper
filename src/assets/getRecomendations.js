import { allTraits, tierWeights } from "./playerTraits";

export const getRecomendations = (playerAttributes) => {
  if (Object.keys(playerAttributes).length === 0) return [];

  return Object.entries(allTraits)
    .map(([trait, tiers]) => {
      let sum = 0;
      let totalWeight = 0;
      for (const tier in tiers) {
        for (const attributeKey of tiers[tier]) {
          sum += (playerAttributes[attributeKey] ?? 0) * tierWeights[tier];
          totalWeight += tierWeights[tier];
        }
      }
      return { trait, rating: sum / totalWeight };
    })
    .sort((a, b) => b.rating - a.rating);
};
