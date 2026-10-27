import { Link } from 'react-router'

// 페이지 제목(h1)은 상단 Header가 라우트 handle을 읽어 표시하므로 여기서는 본문만 그린다.
export default function NotFoundPage() {
  return (
    <section className="page">
      <p className="page__description">요청한 주소의 페이지가 없습니다. 주소가 올바른지 확인해 주세요.</p>
      <p>
        <Link to="/" className="text-link">
          대시보드로 돌아가기
        </Link>
      </p>
    </section>
  )
}
