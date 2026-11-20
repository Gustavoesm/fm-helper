import { getRecomendations } from "./getRecomendations";
import { allTraits } from "./playerTraits";
import { attributeGroups } from "./attributes";

const validAttributes = new Set(
  Object.values(attributeGroups).flatMap((group) => Object.values(group))
);

test("every trait uses only known attributes", () => {
  for (const tiers of Object.values(allTraits))
    for (const attribute of Object.values(tiers).flat())
      expect(validAttributes).toContain(attribute);
});

test("weights key attributes above secondary ones", () => {
  // Curls Ball = technique only; Hits Free Kicks With Power = (9*fk + 9*str + 4*ls + 4*fin) / 26
  const ratings = Object.fromEntries(
    getRecomendations({ technique: 20, freeKickTaking: 10, strength: 10 }).map(
      (r) => [r.trait, r.rating]
    )
  );
  expect(ratings["Curls Ball"]).toBe(20);
  expect(ratings["Hits Free Kicks With Power"]).toBeCloseTo(180 / 26);
});

test("returns empty list without attributes", () => {
  expect(getRecomendations({})).toEqual([]);
});
