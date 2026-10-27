import type { ReactNode } from 'react'
import { NavLink } from 'react-router'

interface NavItem {
  to: string
  label: string
  icon: ReactNode
  end?: boolean
}

// 아이콘 라이브러리 없이 필요한 몇 개만 인라인 SVG로 둔다.
const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

const NAV_ITEMS: NavItem[] = [
  {
    to: '/',
    label: '대시보드',
    end: true,
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" />
      </svg>
    ),
  },
  {
    to: '/inquiries',
    label: '문의 관리',
    icon: (
      <svg {...iconProps}>
        <path d="M4 5h16v11H8l-4 4z" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    ),
  },
  {
    to: '/agents',
    label: '담당자 관리',
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
        <path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.8c1.5.8 2.6 2.5 3 5.2" />
      </svg>
    ),
  },
]

interface SidebarProps {
  id: string
  isOpen: boolean
  onNavigate: () => void
}

export default function Sidebar({ id, isOpen, onNavigate }: SidebarProps) {
  return (
    <aside id={id} className={`sidebar${isOpen ? ' is-open' : ''}`}>
      <div className="sidebar__brand">
        <span className="sidebar__logo" aria-hidden="true">
          S
        </span>
        Support Desk
      </div>

      <nav className="sidebar__nav" aria-label="주 메뉴">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              {/* NavLink는 현재 주소와 일치하면 className 함수에 isActive=true를 넘기고 aria-current="page"를 붙인다. */}
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => `sidebar__link${isActive ? ' is-active' : ''}`}
                onClick={onNavigate}
              >
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
