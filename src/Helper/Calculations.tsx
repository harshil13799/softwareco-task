export const calculateEstimationTotal = (quantity: number, price: number, margin: number): number => {
  const base = quantity * price;
  return base + (base * margin / 100);
};