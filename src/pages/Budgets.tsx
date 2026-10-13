import { Wallet } from 'lucide-react'
import Card from '../components/Card'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'

export default function Budgets() {
  return (
    <>
      <PageHeader title="Anggaran" description="Atur batas pengeluaran per kategori setiap bulan." />
      <Card>
        <EmptyState icon={Wallet} title="Belum ada anggaran">
          Batas dan persentase pemakaian anggaran akan tampil di sini setelah fitur anggaran dibuat.
        </EmptyState>
      </Card>
    </>
  )
}
