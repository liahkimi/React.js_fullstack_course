// 게시글
const postService = (() => {
  // 게시글 작성 - 화면으로부터 전달받아야 할 것
  // + 첨부파일
  // 원래 post에 file부분이 없었다면
  // 비구조화 할당으로 기존 post 내용인 title, content에 ...file을 써서
  // post = {title, content, file} 객체의 key를 늘리는 것이다.
  const write = ({ title, content, ...file }) => {};

  // 게시글 목록
  // 몇번 page의 게시글을 요청한건지 유저에게 물어봐야함
  const getList = (page) => {};

  // 게시글 조회
  // 몇번 게시글인지 -> id 받아와야 함
  // 게시글 내용 리턴해야함
  const select = (id) => {};

  // 게시글 수정
  // 수정할 신규 내용 title,content 따로 받기보다
  // 신규 post를 인자로 받아와야 함 (id는 기존과 동일)
  // 리턴할 것 x 수정하면 끝
  const update = (post) => {};

  // 게시글 삭제
  // 몇번 게시글을 삭제할것인지 -> id 받아와야 함
  // 리턴할 것 x 삭제하면 끝
  const remove = (id) => {};

  //변수 postService에 담길 return 값들
  return {
    write: write,
    getList: getList,
    select: select,
    update: update,
    remove: remove,
  };
})();
