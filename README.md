# Support Desk

고객 문의 관리 대시보드 (React + TypeScript 포트폴리오 프로젝트)

- 요구사항 명세: [docs/PROJECT_SPEC.md](docs/PROJECT_SPEC.md)

## 기술 스택

React 19 · TypeScript · Vite · SCSS(sass-embedded) · React Router · ESLint

## 실행 방법

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 타입 검사 + 프로덕션 빌드
npm run lint     # ESLint 검사
```

## 폴더 구조

```
src/
  app/          # App, 라우터, 라우트 메타데이터
  components/
    layout/     # 사이드바·헤더·레이아웃
    common/     # 재사용 UI 컴포넌트
  features/     # 화면(기능) 단위 폴더: dashboard, inquiries, agents
  styles/       # SCSS 변수·믹스인·전역 스타일
```
