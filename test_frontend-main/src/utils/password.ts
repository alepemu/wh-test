const strengthLevels = {
  0: "none",
  1: "weak",
  2: "medium",
  3: "strong",
  4: "very-strong",
};

export const calculateStrength = (password: string) => {
  let score = 0;
  if (password.length > 6) {
    if (password.length > 10) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
  }
  return strengthLevels[score as keyof typeof strengthLevels];
};
