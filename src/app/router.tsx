import { createBrowserRouter } from 'react-router'
import AppLayout from '../components/layout/AppLayout.tsx'
import DashboardPage from '../features/dashboard/DashboardPage.tsx'
import InquiryListPage from '../features/inquiries/InquiryListPage.tsx'
import AgentListPage from '../features/agents/AgentListPage.tsx'
import NotFoundPage from './NotFoundPage.tsx'
import type { RouteHandle } from './routeHandle.ts'

// handle.title은 상단 헤더에 표시할 페이지 제목이다. (Header에서 useMatches로 읽는다)
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        handle: { title: '대시보드' } satisfies RouteHandle,
      },
      {
        path: 'inquiries',
        element: <InquiryListPage />,
        handle: { title: '문의 관리' } satisfies RouteHandle,
      },
      {
        path: 'agents',
        element: <AgentListPage />,
        handle: { title: '담당자 관리' } satisfies RouteHandle,
      },
      {
        path: '*',
        element: <NotFoundPage />,
        handle: { title: '페이지를 찾을 수 없음' } satisfies RouteHandle,
      },
    ],
  },
])
