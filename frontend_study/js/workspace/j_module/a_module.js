// 모듈화 : 선언과 동시에 사용

// (function () {})();

// const module = function () {
//   function a() {}
//   function b() {}
//   function c() {}
//   function d() {}
//   return { a: a, b: b, c: c, d: d }; //리턴받는 객체는 프로퍼티가 죄다 메소드다.
// };

// module.a();
// module.b();
// module.c();
// module.d();

// 프론트 엔드(서버) : 통신, 화면출력, 이벤트
// 프론트엔드개발자가 쓰는 코드!
// userService => '통신'
const userService = (() => {
  // 메서드의 인자는 서버개발자 기준 화면(프론트엔드개발자)으로부터 받아 와야 할 데이터를 뜻함.
  // 메서드의 return값은 서버개발자 기준 프론트엔드개발자에게 전달해야 할 데이터를 뜻함.
  // return의 존재유무는 여기서 결정 됨.

  // 회원가입
  // 인자 :{ email, password, name }
  // -> input을 통해 email, password, name 값 받아와야 회원가입 됨
  // return 값 필요 x
  // -> 회원가입은 잘못된 정보를 입력했을 때 애초에 서버로 데이터가 넘어가지 않음.
  const join = ({ email, password, name }) => {};

  // 로그인
  // 인자 : email, password
  // -> input을 통해 email, password 값 받아와야 로그인 됨
  // return 값 필요 o
  // -> 로그인 성공/실패 여부에 대한 reuturn이 필요함.-> 프론트에서 로그인 성공/실패창 다르니까.
  // + 만약, 인자에 callback함수를 넣게되면 callback으로 return할것을 전달하게 됨
  // -> return을 안하겠단 말
  // => 왜? userService모듈은 '통신'이므로 return값 받아봤자 undefined만 떠서 callback으로 전달해서 써야함.
  const login = (email, password, callback) => {};

  // 마이페이지
  // 인자 : 필요x
  // -> 로그인 된 상태. 받아 올 데이터 없음.
  // return 값 필요 o
  // -> 회원정보와 함께 마이페이지창 내용 리턴해야함
  // + 만약, 인자에 callback함수를 넣게되면 callback으로 return할것을 전달하게 됨
  // -> return을 안하겠단 말 (위와 같은 이유)
  const select = (callback) => {};

  // 회원 수정
  // 인자 : user객체 자체?
  // -> 로그인 통해 서버에서 회원정보(user)를 가져와 마이페이지에 뿌린 정보(user)를 그대로 수정페이지로 끌고 오면 된다.
  //    (로그인창->마이페이지창->수정페이지창->수정완료버튼(update))
  // => 유저가 회원정보중 어떤 정보를 수정할 지 모르니, user객체 모두를 일단 가져와야 함.(숨겨진 id값도 같이)
  //    (수정페이지창에서 수정완료버튼 누르는것 = update()메서드 실행하는 것)
  // => 변경된 정보를 id값을 통해 서버로 가서 해당 회원의 정보를 수정하게 된다.(이 과정에 보통 유저에게 비밀번호 확인 요청함.)
  // return 값 필요 x
  // -> 애초에 수정할값이 잘못되면 비동기처리되어 update되지 않았을거니까.
  const update = (user) => {};

  // 회원 탈퇴
  //  인자 : 필요x
  // -> 로그인해야만 회원 탈퇴 가능하므로 기존에 알고 있는 회원의 id도 인자 받아올 필요 없이 바로 실행 가능!
  //  return 값 필요 x => 탈퇴만 시키면 됨.(탈퇴 직후에 띄울 창은 추후 배울 '라우터'통해 해결함)
  const remove = () => {};

  // 남 생각하는 연습!
  // 글작성(리턴x), 글목록(리턴o),글상세보기(리턴o),글수정하기(리턴x),글삭제(리턴x),
  // 댓글등록(리턴x), 댓글목록(리턴o), 댓글수정(리턴x),댓글삭제(리턴x)
  // 알림성정버튼(리턴o), 알림읽음버튼(리턴x), 알림업데이트(리턴o(안읽음->읽음 상태 업데이트 필요))

  // 메소드 실행 필요 여부 -> 서버를 타고가야하는지의 여부 -> DB CRUD가 필요할 떄 서버를 탄다.
  // 정적데이터인 경우 메소드 실행 필요 X ('회사소개'처럼 순수html로 작업하는 페이지가 정적페이지(데이터))
  // 동적데이터(계산되고 가공되는 값)인경우 메소드 실행 필요 O

  // 서버 안타고 링크 넘어가는 경우 => 절대경로 다 보여서 해킹가능
  // 서버 타고 넘어가는 경우 -> 브라우저에 '/intro'로 문자열 intro만 보이므로 해킹 불가
  // 서버개발자들이 진짜경로를 숨기고 처리하는 듯.!

  // 외부에서 쓰기 위해 묶어서 리턴
  return {
    join: join,
    login: login,
    select: select,
    update: update,
    remove: remove,
  };
})();

let user = {
  email: "test@gmail.com",
  password: "1234",
  name: "테스트",
};

// 모듈!
userService.join(user);
userService.login("test@gmail.com", "1234");
