import Panel from '../../components/common/Panel.tsx'
import StatCard from './StatCard.tsx'
import './DashboardPage.scss'

// 1단계: 레이아웃 틀만 잡는다. 수치·차트·최근 목록은 문의 데이터를 만든 뒤 실제 데이터에서 계산해 채운다.
export default function DashboardPage() {
  return (
    <div className="page dashboard">
      <section aria-labelledby="dashboard-stats-title">
        <h2 id="dashboard-stats-title" className="visually-hidden">
          문의 현황 요약
        </h2>
        {/* 라벨-값 쌍의 목록이므로 dl/dt/dd를 사용한다. */}
        <dl className="dashboard__stats">
          <StatCard label="전체 문의" value={null} />
          <StatCard label="미처리" value={null} tone="open" />
          <StatCard label="처리 중" value={null} tone="in-progress" />
          <StatCard label="처리 완료" value={null} tone="resolved" />
        </dl>
      </section>

      <div className="dashboard__charts">
        <Panel title="기간별 문의 추이" className="dashboard__trend">
          <p className="panel__placeholder">문의 데이터 연결 후 차트가 표시됩니다.</p>
        </Panel>
        <Panel title="상태별 문의 비율">
          <p className="panel__placeholder">문의 데이터 연결 후 차트가 표시됩니다.</p>
        </Panel>
      </div>

      <Panel title="최근 접수된 문의">
        <p className="panel__placeholder">아직 표시할 문의가 없습니다.</p>
      </Panel>
    </div>
  )
}
