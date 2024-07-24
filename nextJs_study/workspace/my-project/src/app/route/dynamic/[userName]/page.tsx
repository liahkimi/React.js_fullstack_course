"use client"

import { useSearchParams } from "next/navigation";

type Params = {
    userName : string
}

function page({params}:{params: Params}) {
    const { userName } = params;

    // query string은 useSearchParams().get(key값)으로 접근이 가능하다.
    const search = useSearchParams();
    const name = search.get('name');

    return (
        <div>
            <h1>{userName}님 상세정보 페이지</h1>
            {name && <h2>{name}님 환영합니다</h2>}
        </div>
    );
}

export default page;