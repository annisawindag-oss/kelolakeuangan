const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

const tanggal = new Intl.DateTimeFormat('id-ID', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

/** 1250000 -> "Rp 1.250.000" (uang disimpan sebagai integer Rupiah) */
export function formatRupiah(amount: number): string {
  return rupiah.format(amount)
}

/** "2026-10-02" -> "02 Okt 2026" (tanpa pergeseran zona waktu) */
export function formatDate(isoDate: string): string {
  const [y, m, d] = isoDate.split('-').map(Number)
  return tanggal.format(new Date(y, m - 1, d))
}
