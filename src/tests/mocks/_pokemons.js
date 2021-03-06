const poketest = {
  Number: "001-teste",
  Name: "BULBAAUTOTEST",
  Generation: "Generation I",
  About:
    "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  types: "Grass, Poison",
  Resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
  Weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  "Fast Attack(s)": [
    { Name: "Tackle", Type: "Normal", Damage: 12 },
    { Name: "Vine Whip", Type: "Grass", Damage: 7 },
  ],
  attacks: "Power Whip, Seed Bomb, Sludge Bomb",
  Weight: { Minimum: "6.04kg", Maximum: "7.76kg" },
  Height: { Minimum: "0.61m", Maximum: "0.79m" },
  "Buddy Distance": "3km (Medium)",
  "Base Stamina": "90 stamina points.",
  "Base Attack": "118 attack points.",
  "Base Defense": "118 defense points.",
  "Base Flee Rate": "10% chance to flee.",
  "Next Evolution Requirements": { Amount: 25, Name: "Bulbasaur candies" },
  "Next evolution(s)": [
    { Number: 2, Name: "Ivysaur" },
    { Number: 3, Name: "Venusaur" },
  ],
  MaxCP: 951,
  MaxHP: 1071,
};

export { poketest };
