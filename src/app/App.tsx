import { RouterProvider } from 'react-router'
import { router } from './router.tsx'

// 앱 최상위 컴포넌트. 이후 TanStack Query의 QueryClientProvider 같은 전역 Provider를 여기에 감싼다.
export default function App() {
  return <RouterProvider router={router} />
}
