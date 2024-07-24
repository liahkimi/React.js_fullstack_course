type Props = {pageParam?:number};

export default async function getPostRecommends({pageParam} : Props){
    const response = await fetch(`http://localhost:8000?cursor=${pageParam}`,{
        next : {
            tags: ['posts', 'recommends'],
        },
        // cache : 'no-store', 자동 저장되므로 지나친 캐싱 방지
    })
    
    if(!response.ok){
        throw new Error("Failed to fetch data");
    }
    // revalidateTag("recommends") 서버 캐시를 날릴 수 있다.
    // revalidatePath("/home") 해당 페이지의 캐시를 날린다.
    return response.json();
}