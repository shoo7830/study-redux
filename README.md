# TDD (Test Driven Development)
* 테스트 주도 개발
* 테스트를 먼저 작성하고, 개발을 하는 것

## TDD 실패 이유
* 아무도 스펙을 몰라.
* 시간이 오래 걸린다.

## 유사 TDD
* 개발자가 알 수 있는 범위 내에서 스펙을 최대한 상세하게 작성하기
* 해당 스펙을 기준으로 기능을 쪼개고, 컴포넌트를 쪼개자

# TodoApp
UI
* TodoGroup이 존재한다.
* TodoGroup은 좌측 List에 노출된다.
<!-- * TodoGroup의 제목이 TodoList 상단에 노출된다. -->
* TodoGroup에는 하나의 TodoList만 존재한다.

* TodoList는 최대 갯수가 없다.
* TodoList의 빈공간을 클릭했을 경우, 추가가 가능하다.
* TodoItem은 TodoList의 추가 버튼을 통해 추가가 가능하다.

* TodoItem은 동시에 여러개 추가가 불가능하다.
<!-- * TodoItem은 설명을 가지고 있다. -->
* TodoItem은 체크박스를 통해 Clear 가능하다.
* Clear된 TodoItem은 별도 리스트를 통해 확인 가능하다.
* TodoItem은 설명 수정이 가능하다.