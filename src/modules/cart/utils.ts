export function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, ''))
}

export function formatPrice(value: number) {
  return `£${value.toFixed(2)}`
}
