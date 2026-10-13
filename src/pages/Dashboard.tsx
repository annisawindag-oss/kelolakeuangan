import { ArrowDown, ArrowUp, PiggyBank, ReceiptText, Scale, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Card from '../components/Card'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'
import { formatRupiah } from '../utils/format'

type Summary = { label: string; hint: string; icon: LucideIcon; value: number }

// Nilai 0 = belum ada data. Angka asli dihitung dari database setelah backend terhubung.
const summaries: Summary[] = [
  { label: 'Saldo', hint: 'Pemasukan dikurangi pengeluaran', icon: Scale, value: 0 },
  { label: 'Pemasukan', hint: 'Bulan ini', icon: ArrowUp, value: 0 },
  { label: 'Pengeluaran', hint: 'Bulan ini', icon: ArrowDown, value: 0 },
  { label: 'Sisa anggaran', hint: 'Bulan ini', icon: Wallet, value: 0 },
]

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Dashboard" description="Ringkasan keuanganmu bulan ini." />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaries.map(({ label, hint, icon: Icon, value }) => (
          <Card key={label}>
            <div className="flex items-center gap-2 text-ink-soft">
              <Icon aria-hidden="true" className="h-4 w-4" />
              <span className="text-sm font-medium">{label}</span>
            </div>
            <p className="mt-2 font-pixel text-2xl font-bold">{formatRupiah(value)}</p>
            <p className="mt-1 text-xs text-ink-soft">{hint}</p>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Transaksi terbaru">
          <EmptyState icon={ReceiptText} title="Belum ada transaksi">
            Transaksi yang kamu catat akan tampil di sini. Fitur pencatatan menyusul di tahap berikutnya.
          </EmptyState>
        </Card>
        <Card title="Target tabungan">
          <EmptyState icon={PiggyBank} title="Belum ada target">
            Progres tabunganmu akan tampil di sini setelah fitur tabungan dibuat.
          </EmptyState>
        </Card>
      </div>
    </>
  )
}
