import { Settings as SettingsIcon } from 'lucide-react'
import Card from '../components/Card'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'

export default function Settings() {
  return (
    <>
      <PageHeader title="Pengaturan" description="Kelola profil dan preferensi akunmu." />
      <Card>
        <EmptyState icon={SettingsIcon} title="Pengaturan belum tersedia">
          Profil, awal bulan anggaran, dan logout akan dibuat bersama fitur akun.
        </EmptyState>
      </Card>
    </>
  )
}
