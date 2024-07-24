import Link from "next/link";

function notFound() {
    return (
        <div>
            <p>해당 페이지를 찾을 수 없습니다😥<br />
            다른 페이지를 검색해 보세요.
            </p>
            <Link href={"/"}>메인으로 이동</Link>
        </div>
    );
}

export default notFound;