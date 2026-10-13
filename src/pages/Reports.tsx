import { TrendingUp } from 'lucide-react'
import Card from '../components/Card'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'

export default function Reports() {
  return (
    <>
      <PageHeader title="Laporan" description="Lihat pola pemasukan dan pengeluaranmu dalam grafik." />
      <Card>
        <EmptyState icon={TrendingUp} title="Belum ada data untuk dilaporkan">
          Grafik dan ekspor CSV akan dibuat setelah ada transaksi tersimpan.
        </EmptyState>
      </Card>
    </>
  )
}
