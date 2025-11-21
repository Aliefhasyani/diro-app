export function formatIDR(amount: number | string | null | undefined): string {
  const value = Number(amount ?? 0) || 0;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
