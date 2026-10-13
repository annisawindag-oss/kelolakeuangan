import { ReceiptText } from 'lucide-react'
import Card from '../components/Card'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'

export default function Transactions() {
  return (
    <>
      <PageHeader title="Transaksi" description="Catat dan cari semua pemasukan dan pengeluaranmu." />
      <Card>
        <EmptyState icon={ReceiptText} title="Belum ada transaksi">
          Daftar, pencarian, dan filter transaksi akan dibuat di tahap CRUD transaksi.
        </EmptyState>
      </Card>
    </>
  )
}
