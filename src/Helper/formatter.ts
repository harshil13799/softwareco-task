// Format number as ₹ currency (INR)
export const formatCurrency = (amount: number): string => {
  return `₹${amount.toFixed(2)}`;
};

// Capitalize first letter of any string
export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
