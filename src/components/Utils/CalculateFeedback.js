export const countPositiveFeedbackPercentage = (total, opinion) =>
  total === 0 ? '0%' : `${Math.floor((opinion / total) * 100)}%`;
export const countTotal = (...args) => args.reduce((a, b) => a + b, 0);
