// 게시글
const postService = (() => {
    // 게시글 작성
    // 첨부파일
    const write = ({ title, content, ...file }) => {};

    // 게시글 목록
    const getList = (page) => {};

    // 게시글 조회
    const select = (id) => {};

    // 게시글 수정
    const update = (post) => {};

    // 게시글 삭제
    const remove = (id) => {};

    return {
        write: write,
        getList: getList,
        select: select,
        update: update,
        remove: remove,
    };
})();
