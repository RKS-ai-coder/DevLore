export const calculateLevelUp = (currentXP, currentLevel) => {
  let xpNeeded = currentLevel * 100;
  let level = currentLevel;
  let xp = currentXP;

  while (xp >= xpNeeded) {
    xp -= xpNeeded;
    level += 1;
    xpNeeded = level * 100;
  }

  return { level, remainingXp: xp, nextLevelXp: xpNeeded };
};

export const calculateQuizXp = (score, difficulty) => {
  const difficultyMultiplier = { hard: 3, medium: 2, easy: 1 };
  const multiplier = difficultyMultiplier[difficulty.toLowerCase()] || 1;
  
  return score * 10 * multiplier;
};