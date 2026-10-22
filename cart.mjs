/** Total price in cents; each line includes a unit price and quantity. */
export function cartTotal(lines) {
  return lines.reduce((total, line) => total + line.unitPriceCents, 0);
}
