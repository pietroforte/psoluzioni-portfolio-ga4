let totalTokensUsed = 0;
const MAX_COST = 5.0; // $5 budget
const COST_PER_1K_TOKENS = 0.0025; // Conservative estimate

export function trackTokens(tokensUsed: number): { allow: boolean; remainingDollars: number; totalCost: number } {
  totalTokensUsed += tokensUsed;
  const totalCost = (totalTokensUsed / 1000) * COST_PER_1K_TOKENS;
  const remainingDollars = MAX_COST - totalCost;
  const allow = totalCost < MAX_COST;

  return {
    allow,
    remainingDollars: Math.max(remainingDollars, 0),
    totalCost: Math.min(totalCost, MAX_COST)
  };
}

export function getTotalTokensUsed() {
  return totalTokensUsed;
}
