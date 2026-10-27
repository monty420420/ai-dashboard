// 라우트 handle에 담는 메타데이터 타입
export interface RouteHandle {
  title: string
}

// useMatches()가 돌려주는 handle은 unknown 타입이므로, 안전하게 좁혀 주는 타입 가드
export function isRouteHandle(handle: unknown): handle is RouteHandle {
  return (
    typeof handle === 'object' &&
    handle !== null &&
    'title' in handle &&
    typeof handle.title === 'string'
  )
}
