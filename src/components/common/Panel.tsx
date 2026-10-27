import { useId, type ReactNode } from 'react'
import './Panel.scss'

interface PanelProps {
  title: string
  children: ReactNode
  className?: string
}

// 제목이 있는 카드형 영역. 대시보드·상세 화면 등에서 공통으로 쓴다.
export default function Panel({ title, children, className }: PanelProps) {
  // useId: 컴포넌트 인스턴스마다 고유한 id를 만들어 aria-labelledby로 제목과 영역을 연결한다.
  const titleId = useId()

  return (
    <section className={`panel${className ? ` ${className}` : ''}`} aria-labelledby={titleId}>
      <h2 id={titleId} className="panel__title">
        {title}
      </h2>
      <div className="panel__body">{children}</div>
    </section>
  )
}
