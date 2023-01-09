- [공식 스타일링 문서]( https://reactnative.dev/docs/style)
- [공식 스타일링 컬러](https://reactnative.dev/docs/colors)
- [다양한 코어 컴포넌트](https://reactnative.dev/docs/view)
  - [컴포넌트가 지원하는 스타일 프로퍼티 1](https://reactnative.dev/docs/view#style)
  - [컴포넌트가 지원하는 스타일 프로퍼티 2](https://reactnative.dev/docs/view-style-props)

View는 기본적으로 플렉스 박스로 자식 요소 세로 정렬을 기본 요소로 함

iOS는 Text 컴포넌트에서 borderRadius를 지원하지 않으므로 View로 감싸주는 등 Wrapper 패턴을 사용해야 한다.

React Native는 스타일 상속이 존재하지 없다. color, box 프로퍼티 상속은 없으므로 별도로 설정해야 한다.

각 요소의 높이와 view를 확인하고 스크롤을 추가하는 브라우저와 달리 Native 앱은 이를 지원하지 않지만, 코어 컴포넌트로 제공한다.

