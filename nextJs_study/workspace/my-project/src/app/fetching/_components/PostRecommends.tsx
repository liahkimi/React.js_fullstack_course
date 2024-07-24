"use client"

import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Post } from "../model/Posts";
import getPostRecommends from "../_lib/getPostRecommends";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect } from "react";

export default function PostRecommends() {
    // const { data } = useQuery<Post[]>({
    //     queryKey : ["posts", "recommends"],
    //     queryFn : getPostRecommends,
    //     staleTime : 60 * 1000 // 단위 ms
    // });

    // 무한 스크롤링
    const {
        data,
        fetchNextPage, // 언제 불러올지
        hasNextPage, // 불러올 페이지가 있는지 없는지
        isFetching, // 리엑트 쿼리가 데이터를 가져오는 순간
    } = useInfiniteQuery<Post[], Object, InfiniteData<Post[]>, [_1:string, _2:string], number>({
        queryKey : ["posts", "recommends"],
        queryFn : getPostRecommends,
        initialPageParam : 0,
        getNextPageParam : (lastPage) => lastPage.at(-1)?.postId, // 가장 최근 불러온 게시글에서 몇개를 더 가져올지
        staleTime : 60 * 1000 // 단위 ms
    })

    // ref가 보이면 fetch를 실행하게 만든다.
    const { ref, inView } = useInView({
        threshold : 0,
        delay : 0,
    });

    // inView, hasNextPage, fetchNextPage
    useEffect(() => {
        if(inView){
            !isFetching && hasNextPage && fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage])

    return (
        <div>
            {data?.pages.map((page, i) => (
                <Fragment key={i}>
                    {page.map((post:Post) => (
                        <div key={post.postId}>
                            <img src={post.Images} alt={post.content} />
                            <p>{post.content}</p>
                        </div>
                    ))}
                </Fragment>
            ))}
            {/* 인터셉션 옵저버 */}
            <div ref={ref} style={{height : 50}}></div>
        </div>
    );
}