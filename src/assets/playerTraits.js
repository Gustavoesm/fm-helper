import { attributeGroups } from "./attributes";

const { technical: t, mental: m, physical: p } = attributeGroups;

// passion4fm lists key / secondary / other attributes without numbers; quadratic weights (3², 2², 1²) are our choice.
export const tierWeights = { key: 9, secondary: 4, other: 1 };

// Source: https://www.passion4fm.com/football-manager-player-traits/
// Left out: traits with no listed attributes, and ones relying on non-outfield attributes (Throwing, weaker foot).
export const allTraits = {
  "Gets Forward Whenever Possible": {
    key: [m.offTheBall, m.decisions],
    secondary: [m.teamwork, m.anticipation],
  },
  "Stays Back At All Times": {
    key: [m.positioning, m.anticipation],
    secondary: [m.concentration, m.teamwork],
  },
  "Comes Deep To Get Ball": {
    key: [m.teamwork, t.firstTouch, m.offTheBall],
    secondary: [m.anticipation, m.vision],
  },
  "Dribbles Down Flank": {
    key: [p.acceleration, p.pace, p.agility],
    secondary: [t.dribbling, p.balance, t.technique],
    other: [m.workRate, m.decisions],
  },
  "Dribbles Through Centre": {
    key: [t.dribbling, p.balance, t.technique],
    secondary: [p.acceleration, p.pace, p.agility],
    other: [m.flair, m.vision, m.workRate],
  },
  "Runs With Ball Often": {
    key: [t.dribbling],
    secondary: [p.agility, p.balance, m.decisions],
  },
  "Runs With Ball Rarely": {
    key: [t.passing],
    secondary: [t.technique, m.vision, m.offTheBall],
  },
  "Hugs Line": {
    key: [t.dribbling, m.offTheBall],
    secondary: [p.acceleration, p.pace, p.agility],
  },
  "Cuts Inside From Wing": {
    key: [p.acceleration, p.agility],
    secondary: [m.decisions, m.vision, m.flair, m.teamwork],
    other: [t.dribbling, t.technique, t.finishing, t.passing],
  },
  "Gets Into Opposition Area": {
    key: [p.acceleration, t.finishing],
    secondary: [m.offTheBall, m.decisions, m.anticipation],
    other: [m.composure, m.teamwork],
  },
  "Arrives Late In Opposition Area": {
    key: [m.offTheBall, m.composure, m.vision],
    secondary: [m.anticipation, m.decisions],
    other: [t.finishing, t.passing, t.technique],
  },
  "Tries To Beat Offside Trap": {
    key: [m.anticipation, p.agility, p.acceleration],
    secondary: [m.offTheBall, m.decisions, m.vision],
  },
  "Plays With Back To Goal": {
    key: [t.firstTouch, m.anticipation],
    secondary: [p.strength, p.balance, m.teamwork],
    other: [m.composure, t.passing, t.technique, p.jumpingReach],
  },
  "Does Not Move Into Channels": {
    key: [t.heading, p.jumpingReach],
    secondary: [m.positioning, m.teamwork, t.technique],
    other: [p.strength, p.balance, m.offTheBall],
  },
  "Moves Into Channels": {
    key: [m.offTheBall, m.flair, m.vision],
    secondary: [m.anticipation, m.decisions, p.agility, p.acceleration],
    other: [t.passing, t.dribbling, t.crossing, t.finishing],
  },
  "Plays One-Twos": {
    key: [t.firstTouch, t.passing, t.technique, m.vision],
    secondary: [m.offTheBall, m.decisions, m.anticipation],
    other: [m.workRate, p.acceleration, p.agility],
  },
  "Knocks Ball Past Opponent": {
    key: [p.acceleration, p.agility, p.pace],
    secondary: [t.dribbling, t.technique],
    other: [m.workRate],
  },
  "Tries Killer Balls Often": {
    key: [t.passing, m.vision],
    secondary: [m.anticipation, t.technique, m.decisions],
  },
  "Plays No Through Balls": {
    key: [t.passing, m.teamwork],
    other: [t.firstTouch, t.technique, m.composure],
  },
  "Tries Long Range Passes": {
    key: [t.passing, t.technique],
    secondary: [m.vision, m.decisions, m.teamwork],
  },
  "Plays Short Simple Passes": {
    key: [t.passing, m.teamwork, m.composure],
    secondary: [t.firstTouch, t.technique],
  },
  "Stops Play": {
    key: [m.anticipation, t.firstTouch, p.strength],
    secondary: [p.balance, m.teamwork, m.composure],
  },
  "Dwells On Ball": {
    key: [m.anticipation, m.composure],
    secondary: [t.firstTouch, m.vision],
  },
  "Looks For Pass Rather Than Attempting To Score": {
    key: [t.passing, m.decisions, m.vision],
    secondary: [m.anticipation, t.technique, m.composure],
  },
  "Dictates Tempo": {
    key: [m.teamwork, t.passing, m.vision],
    secondary: [m.anticipation, t.technique, m.decisions],
  },
  "Likes To Switch Ball To Other Flank": {
    key: [t.passing, m.vision],
    secondary: [t.technique, m.decisions],
  },
  "Likes Ball Played Into Feet": {
    key: [t.firstTouch, t.technique],
    secondary: [t.passing, p.balance, t.dribbling],
  },
  "Shoots From Distance": {
    key: [t.longShots, t.finishing],
    secondary: [t.technique, m.decisions, p.strength],
  },
  "Refrains From Taking Long Shots": {
    key: [m.teamwork, t.passing],
    secondary: [t.technique, m.anticipation, m.vision],
    other: [t.dribbling, t.crossing],
  },
  "Lobs Keeper": {
    key: [t.finishing, t.technique, m.vision],
    secondary: [m.composure, m.decisions],
  },
  "Rounds Keeper": {
    key: [t.dribbling, t.technique],
    secondary: [m.decisions, m.flair],
  },
  "Shoots With Power": {
    key: [t.finishing, t.longShots, t.technique],
    secondary: [p.strength],
  },
  "Places Shots": {
    key: [t.finishing, t.technique],
    secondary: [t.longShots, m.anticipation, m.composure],
  },
  "Attempts First Time Shots": {
    key: [t.finishing, m.composure, t.technique],
    secondary: [m.positioning, m.anticipation, m.decisions],
  },
  "Attempts Overhead Kicks": {
    key: [m.flair, p.agility],
    secondary: [t.finishing, t.technique, m.anticipation],
    other: [m.decisions, m.concentration],
  },
  "Hits Free Kicks With Power": {
    key: [t.freeKickTaking, p.strength],
    secondary: [t.longShots, t.finishing],
  },
  "Tries Long Range Free Kicks": {
    key: [t.freeKickTaking, t.longShots],
    secondary: [t.technique],
  },
  "Dives Into Tackles": {
    key: [t.tackling, p.strength],
    secondary: [m.decisions, m.aggression, m.bravery],
  },
  "Does Not Dive Into Tackles": {
    key: [m.anticipation, m.positioning],
    secondary: [p.acceleration, m.composure, m.concentration],
  },
  "Marks Opponent Tightly": {
    key: [t.marking, m.anticipation],
    secondary: [m.concentration, p.strength, m.positioning],
    other: [p.balance, p.acceleration, p.agility],
  },
  "Brings Ball Out Of Defence": {
    key: [t.dribbling, m.anticipation],
    secondary: [t.technique, m.vision],
  },
  "Tries To Play Way Out Of Trouble": {
    key: [t.technique, t.dribbling, t.passing],
    secondary: [m.decisions, m.composure, m.anticipation, m.vision],
    other: [p.balance, m.flair, p.agility],
  },
  "Tries Tricks": {
    key: [m.flair, t.technique],
    secondary: [t.dribbling, m.vision],
    other: [p.balance, p.agility],
  },
  "Curls Ball": {
    key: [t.technique],
  },
  "Uses Outside Of Foot": {
    key: [t.technique, m.flair],
  },
  "Likes To Beat Opponent Repeatedly": {
    key: [t.dribbling, p.agility],
    secondary: [t.technique, p.balance, m.flair],
  },
  "Possesses Long Flat Throw": {
    key: [t.longThrows],
    secondary: [p.strength],
  },
};
