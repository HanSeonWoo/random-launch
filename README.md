# 🍽️ 랜덤 점심 팀 생성기

직원들을 무작위로 두 팀으로 나누어 점심 식사 그룹을 만들어주는 웹 애플리케이션입니다.

<p align="center">
  <img src="public/favicon.svg" alt="랜덤 점심 팀 생성기 로고" width="100" height="100">
</p>

## 📋 기능 소개

- **팀원 관리**: 식사에 참여하는 팀원들을 추가, 수정, 삭제할 수 있습니다.
- **랜덤 팀 생성**: 등록된 팀원들을 무작위로 두 팀으로 나눕니다.
- **결과 복사**: 생성된 팀 구성을 클립보드에 복사하여 메신저 등에 공유할 수 있습니다.
- **히스토리 저장**: 이전 팀 구성 히스토리를 확인할 수 있습니다 (최대 10개).

## 🚀 설치 및 실행 방법

### 로컬 개발 환경

1. 저장소 클론:
   ```bash
   git clone <repository-url>
   cd lunch-randomizer
   ```

2. 의존성 설치:
   ```bash
   npm install
   ```

3. 개발 서버 실행:
   ```bash
   npm run dev
   ```

4. 브라우저에서 `http://localhost:5173` 접속

### 빌드 및 배포

1. 프로젝트 빌드:
   ```bash
   npm run build
   ```

2. 빌드된 파일은 `dist` 폴더에 생성됩니다.
   ```bash
   # 예시: 로컬에서 빌드 결과물 확인
   npm run preview
   ```

## 💻 기술 스택

- **Frontend**: React, TypeScript, Vite
- **스타일링**: TailwindCSS
- **상태 관리**: React Hooks (useState, useEffect)
- **데이터 처리**: lodash
- **배포**: Vercel, Netlify, GitHub Pages 등 정적 웹사이트 호스팅 서비스에 배포 가능

## 📱 사용법

1. 참가할 팀원 명단을 확인하고 필요시 수정합니다.
2. 팀원을 추가하거나 삭제합니다.
3. '랜덤 팀 생성하기' 버튼을 클릭합니다.
4. 생성된 팀 구성을 확인하고 필요시 '결과 복사하기' 버튼을 클릭하여 공유합니다.
5. 다른 팀 구성이 필요하면 다시 '랜덤 팀 생성하기' 버튼을 클릭합니다.

## 🔄 프로젝트 구조

```
lunch-randomizer/
├── public/                  # 정적 파일
│   ├── favicon.svg         # 파비콘
│   └── manifest.json       # PWA 매니페스트
├── src/                     # 소스 코드
│   ├── App.tsx             # 메인 애플리케이션 컴포넌트
│   ├── main.tsx            # 진입점
│   └── App.css             # 스타일
├── index.html               # HTML 템플릿
└── package.json             # 프로젝트 의존성 및 스크립트
```

## 🛠️ 커스터마이징 방법

- `src/App.tsx` 파일의 `DEFAULT_MEMBERS` 상수를 수정하여 기본 팀원 명단을 변경할 수 있습니다.
- 스타일 수정은 TailwindCSS 클래스를 직접 수정하거나 `App.css`를 통해 가능합니다.
- 로직 수정은 `App.tsx` 파일의 함수들을 수정하여 가능합니다.

## 📄 라이센스

MIT License

## 🙏 문의 및 기여

- 이슈 제보: GitHub Issues 페이지를 통해 제보해주세요.
- 기여: Pull Request를 통해 기여해주세요.
