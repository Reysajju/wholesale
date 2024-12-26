export function calculateBulkPrice(basePrice: number, quantity: number): number {
  let discount = 0;
  
  if (quantity >= 100) discount = 0.4;
  else if (quantity >= 50) discount = 0.3;
  else if (quantity >= 20) discount = 0.2;
  else if (quantity >= 10) discount = 0.1;
  
  return basePrice * quantity * (1 - discount);
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}