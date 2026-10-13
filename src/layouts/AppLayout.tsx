import { NavLink, Outlet } from 'react-router-dom'
import {
  ArrowLeftRight,
  LayoutDashboard,
  PiggyBank,
  Settings,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import Logo from '../components/Logo'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/transaksi', label: 'Transaksi', icon: ArrowLeftRight },
  { to: '/anggaran', label: 'Anggaran', icon: Wallet },
  { to: '/tabungan', label: 'Tabungan', icon: PiggyBank },
  { to: '/laporan', label: 'Laporan', icon: TrendingUp },
]

const sideLink = ({ isActive }: { isActive: boolean }) =>
  [
    'flex items-center gap-3 border-2 px-3 py-2 font-medium transition-colors',
    isActive
      ? 'border-ink bg-candy-600 text-paper shadow-[3px_3px_0_0_var(--color-ink)]'
      : 'border-transparent hover:border-ink hover:bg-candy-100',
  ].join(' ')

const tabLink = ({ isActive }: { isActive: boolean }) =>
  [
    'flex flex-col items-center gap-1 px-1 py-2 text-[11px] font-medium',
    isActive ? 'bg-candy-600 text-paper' : 'text-ink',
  ].join(' ')

export default function AppLayout() {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[16rem_1fr]">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:border-2 focus:border-ink focus:bg-paper focus:px-3 focus:py-2"
      >
        Lewati ke konten
      </a>

      {/* Sidebar: tablet dan desktop */}
      <aside className="hidden flex-col gap-6 border-r-2 border-ink bg-paper p-5 md:sticky md:top-0 md:flex md:h-screen">
        <Logo />
        <nav aria-label="Menu utama" className="flex flex-col gap-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'} className={sideLink}>
              <Icon aria-hidden="true" className="h-5 w-5" />
              {label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/pengaturan" className={(s) => `${sideLink(s)} mt-auto`}>
          <Settings aria-hidden="true" className="h-5 w-5" />
          Pengaturan
        </NavLink>
      </aside>

      <div className="flex min-w-0 flex-col">
        {/* Header: ponsel */}
        <header className="flex items-center justify-between border-b-2 border-ink bg-paper px-4 py-3 md:hidden">
          <Logo />
          <NavLink
            to="/pengaturan"
            aria-label="Pengaturan"
            className={({ isActive }) =>
              `border-2 p-2 ${isActive ? 'border-ink bg-candy-600 text-paper' : 'border-transparent'}`
            }
          >
            <Settings aria-hidden="true" className="h-5 w-5" />
          </NavLink>
        </header>

        <main id="konten" className="flex-1 p-4 pb-28 md:p-8 md:pb-8">
          <Outlet />
        </main>
      </div>

      {/* Navigasi bawah: ponsel */}
      <nav
        aria-label="Menu utama"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t-2 border-ink bg-paper md:hidden"
      >
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === '/'} className={tabLink}>
            <Icon aria-hidden="true" className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
