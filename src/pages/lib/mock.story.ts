import type { Story } from '~/entities/story';
import type { User } from '~/entities/user';

export type StoryWithAuthor = Story & {
  author: Pick<User, 'name' | 'nickname' | 'avatarUrl'>;
};

const content = `
# 테스트 게시글

Markdown Viewer와 Editor의 렌더링을 테스트하기 위한 예시 문서입니다.

## 1. Heading (H1 ~ H6)

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## 2. Text Formatting

일반 텍스트입니다.

**굵은 글씨(Bold)** 를 사용할 수 있습니다.

*기울임 글씨(Italic)* 를 사용할 수 있습니다.

~~취소선(Strike)~~ 을 사용할 수 있습니다.

***굵고 기울어진 글씨*** 도 사용할 수 있습니다.

## 3. Inline Code

JavaScript의 \`const\`와 \`let\`은 변수를 선언할 때 사용합니다.

함수 호출은 \`console.log('Hello World')\`처럼 표현할 수 있습니다.

## 4. Code Block

JavaScript 코드입니다.

~~~javascript
const greeting = (name) => {
  return \`Hello, \${name}!\`;
};
~~~

TypeScript 코드입니다.

~~~typescript
type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

export const getUser = (user: User) => user;
~~~

CSS 코드입니다.

~~~css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
}
~~~

## 5. Unordered List

- 사과
- 바나나
- 오렌지
  - 오렌지 주스
  - 오렌지 잼
    - 오렌지 잼 소스

## 6. Ordered List

1. Markdown Spec 정의
2. Viewer 구현
3. Editor 구현
4. Preview 연동
5. 테스트 및 배포

중첩된 순서 목록입니다.

1. 프론트엔드
   1. React
   2. TypeScript
   3. Vanilla Extract
2. 백엔드
   1. Node.js
   2. PostgreSQL

## 7. Task List

- [x] Markdown 파서 설치
- [x] Viewer 기본 구현
- [ ] Editor 구현
- [ ] Preview 연동
- [ ] 배포

## 8. Blockquote

> 좋은 소프트웨어는 복잡한 문제를 단순하게 해결합니다.
>
> 코드는 작성하는 시간보다 읽히는 시간이 더 깁니다.
>
> — Software Development Principle

중첩 인용문입니다.

> 첫 번째 인용문
>
> > 두 번째 인용문
> >
> > > 세 번째 인용문

## 9. Link

- [GitHub](https://github.com)
- [React 공식 문서](https://react.dev)
- [Markdown Guide](https://www.markdownguide.org/)

## 10. Image

![코드 에디터 작업 환경](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200)

이미지 아래에 일반 텍스트를 작성할 수 있습니다.

## 11. Horizontal Rule

첫 번째 섹션입니다.

---

두 번째 섹션입니다.

***

세 번째 섹션입니다.

## 12. Table

| 기술 | 용도 | 상태 |
|---|---|---|
| React | UI 개발 | 완료 |
| TypeScript | 타입 안정성 | 완료 |
| remark | Markdown 파싱 | 진행 중 |
| CodeMirror | Markdown 편집 | 예정 |

테이블 정렬 테스트입니다.

| 왼쪽 정렬 | 가운데 정렬 | 오른쪽 정렬 |
|:---|:---:|---:|
| Left | Center | Right |
| React | Markdown | Editor |
| 100 | 200 | 300 |

## 13. Autolink

일반 URL을 자동으로 링크로 변환합니다.

https://github.com

https://react.dev

이메일 주소도 자동으로 링크 처리할 수 있습니다.

hello@example.com

## 14. Footnote

Markdown은 읽기 쉬운 문서 작성 형식입니다.[^1]

GFM은 CommonMark를 확장한 Markdown 명세입니다.[^2]

Footnote는 본문에 추가 설명을 연결할 때 유용합니다.[^3]

[^1]: Markdown은 일반 텍스트 기반의 경량 마크업 언어입니다.
[^2]: GitHub Flavored Markdown은 표, 체크리스트, 취소선 등의 문법을 지원합니다.
[^3]: Footnote는 문서 하단에 참고 설명을 표시합니다.

## 15. Mixed Content

Markdown에서는 여러 문법을 함께 사용할 수 있습니다.

> **주의:** 다음 코드를 실행하면 콘솔에 메시지가 출력됩니다.
>
> ~~~javascript
> console.log('Hello Markdown!');
> ~~~

다음은 목록과 링크를 함께 사용하는 예시입니다.

- [React](https://react.dev)는 UI 라이브러리입니다.
- [TypeScript](https://www.typescriptlang.org)는 타입 시스템을 제공합니다.
- [GitHub](https://github.com)는 코드 호스팅 플랫폼입니다.

## 마무리

이 문서는 Markdown Viewer와 Editor의 렌더링 기능을 검증하기 위한 테스트 문서입니다.

모든 문법이 의도한 형태로 렌더링되는지 확인해 보세요.
`;

export const story: StoryWithAuthor = {
  id: '1',
  thumbnailUrl: 'https://picsum.dev/600/400',
  title: 'Understanding React Server Components',
  summary:
    'A deep dive into React Server Components and how they change the way we build applications.',
  createdAt: '2026-11-02T10:00:00.000Z',
  content,
  author: {
    name: 'JH Kim',
    avatarUrl: 'https://avatars.githubusercontent.com/u/39715558?v=4&size=64',
    nickname: 'gyesehee',
  },
};
