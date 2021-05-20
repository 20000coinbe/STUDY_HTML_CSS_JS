# STUDY_HTML_CSS_JS_SCSS

## HTML/CSS/JS

2021.05.18 : SCSS공부 중

------ 메모장 ------

1_Basic

- <meta name="viewport" ~~~~> : 뷰포트란 웹 페이지가 출력되는 영역(모바일영역)

---

3_SelectorOrder

- **CSS 선택자 우선순위**

  1.  점수가 높은 것이 선택
  2.  점수가 같다면 마지막에 작성된 코드가 선택(코드를 위에서 아래로 읽으니까)

  - 점수계산방법

    1.  !important : 무조건 최상위
    2.  인라인방식의 'style'태그(1000점)
    3.  id(100점)
    4.  class(10점) : 가상클래스선택자 포함
    5.  태그(1점) : 가상 요소 선택자 포함
    6.  전체선택자 '\*'(0점)
    7.  상속(0점)

    ex. 복합선택자의 경우
    <div id='name' class='man'> => 110점

    기타 : 부정선택자(:not()) => 10점

    => 사실 알기 쉽게 표현하기 위해서 점수를 쓴 것이지 class가 11개 있다고해서 id를 이길 수는 없다
    ex) 올림픽 순위 계산방식(은메달 100개 있어도 금메달 1개 못이긴다).

---

## SASS

- CSS 전처리 도구(ex. less, stylus)
- 중첩과 변수기능으로 편리
- SASS와 SCSS 2가지 문법
  - 호환성문제로 SCSS가 최근에 개발('{}'와 ';'을 통해 문법구분)
- '=': mixin,
- '+': include

---

### Basic

---

```scss
/*
  1. parcel-bundler 설치
  2. <link rel="stylesheet" href="파일명.scss"> 연결
  3. parcel-bundler 패키지를 통해 CSS 변환
*/

// 변수($)
$color: royalblue;

// 중첩
.container {
  h1 {
    color: $color;
    // 주석은 javascript와 동일하게 '//'과 '/**/'사용 가능
    // '//'의 경우는 컴파일됬을 떄 CSS에서는 나타나지 않는다(/**/를 사용하면 그대로 남겨진다)
  }
  ul {
    li {
      font-size: 45px; // 원래대로라면 .container ul li { font-size: 45px; }
      .name {
        color: red; // .container ul li .name { color: red; }
      }
      .age {
        color: green;
      }
    }
  } // 중첩(Nesting)을 통해서 불필요하게 사용되는 상위 선택자를 줄일 수 있다!!!
  > h2 {
    // 자식선택자의 경우 '> '로 표기
    color: yellow;
  }
}
```

---

### 상위(부모) 선택자 참조, 중첩된 속성

```scss
// 상위선택자(&)
.btn {
  li {
    &:last-child {
      // li:last-child와 동일
      color: red; // li == &
    }
  }
}

// 중첩된 속성 : 콜론과 세미콜론을 이용
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  }
  /* 동일표현
    font-weight: bold;
    font-size: 10px;
    font-family: sans-serif;

    네임스페이스 : 이름을 통해 구분 가능한 범위를   만들어내는 것으로 일종의 유효범위   지정하는 방법
  */
}
```
