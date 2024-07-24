import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import getPostRecommends from "../_lib/getPostRecommends";
import PostRecommends from "./PostRecommends";

async function Post() {
    // 서버에서 불러온 데이터를 받는다.
    const queryClient = new QueryClient();

    // await queryClient.prefetchQuery();
    await queryClient.prefetchInfiniteQuery({
        queryKey : ["posts", "recommends"],
        queryFn : getPostRecommends,
        initialPageParam : 0,
    });

    // dehydrate : 서버에 데이터를 형식에 맞게 올려준다.
    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <PostRecommends />
        </HydrationBoundary>
    );
}

export default Post;