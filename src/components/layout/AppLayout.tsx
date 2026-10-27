import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar.tsx'
import Header from './Header.tsx'
import './AppLayout.scss'

export default function AppLayout() {
  // 태블릿·모바일에서 사이드바가 열려 있는지 여부. 레이아웃 안에서만 쓰는 UI 상태라 지역 상태로 둔다.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const closeSidebar = () => setIsSidebarOpen(false)

  // ESC 키로 사이드바 닫기: 브라우저 이벤트(외부 시스템)를 구독하는 일이라 useEffect가 맞는 자리다.
  useEffect(() => {
    if (!isSidebarOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsSidebarOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSidebarOpen])

  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">
        본문으로 바로가기
      </a>

      <Sidebar id="app-sidebar" isOpen={isSidebarOpen} onNavigate={closeSidebar} />
      {isSidebarOpen && <div className="app-layout__overlay" aria-hidden="true" onClick={closeSidebar} />}

      <div className="app-layout__body">
        <Header
          isSidebarOpen={isSidebarOpen}
          sidebarId="app-sidebar"
          onMenuClick={() => setIsSidebarOpen((open) => !open)}
        />
        <main id="main-content" className="app-layout__main" tabIndex={-1}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
