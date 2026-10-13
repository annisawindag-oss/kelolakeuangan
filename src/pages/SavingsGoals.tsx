import { PiggyBank } from 'lucide-react'
import Card from '../components/Card'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'

export default function SavingsGoals() {
  return (
    <>
      <PageHeader title="Tabungan" description="Tentukan target dan pantau progres menabungmu." />
      <Card>
        <EmptyState icon={PiggyBank} title="Belum ada target tabungan">
          Target, setoran, dan progres akan tampil di sini setelah fitur tabungan dibuat.
        </EmptyState>
      </Card>
    </>
  )
}
