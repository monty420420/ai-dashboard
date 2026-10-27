export type StatTone = 'default' | 'open' | 'in-progress' | 'resolved'

interface StatCardProps {
  label: string
  // 아직 데이터를 불러오지 않았으면 null → '—'로 표시
  value: number | null
  tone?: StatTone
}

export default function StatCard({ label, value, tone = 'default' }: StatCardProps) {
  return (
    <div className={`stat-card stat-card--${tone}`}>
      <dt className="stat-card__label">{label}</dt>
      <dd className="stat-card__value">{value === null ? '—' : value.toLocaleString('ko-KR')}</dd>
    </div>
  )
}
