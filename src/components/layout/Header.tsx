import { useMatches } from 'react-router'
import { isRouteHandle } from '../../app/routeHandle.ts'

interface HeaderProps {
  isSidebarOpen: boolean
  sidebarId: string
  onMenuClick: () => void
}

export default function Header({ isSidebarOpen, sidebarId, onMenuClick }: HeaderProps) {
  // 현재 주소와 일치하는 라우트 목록 중 가장 안쪽(마지막)의 제목을 사용한다.
  // 제목은 라우트 정의에서 계산할 수 있는 값이므로 별도의 state로 들고 있지 않는다.
  const matches = useMatches()
  const title = matches.map((match) => match.handle).filter(isRouteHandle).at(-1)?.title ?? 'Support Desk'

  return (
    <header className="header">
      <button
        type="button"
        className="header__menu-button"
        aria-label={isSidebarOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isSidebarOpen}
        aria-controls={sidebarId}
        onClick={onMenuClick}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>
      <h1 className="header__title">{title}</h1>
    </header>
  )
}
