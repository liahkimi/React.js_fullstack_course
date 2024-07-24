"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

type Props = {
    children : React.ReactNode;
}

function RQProvider({children}:Props) {

    const [client] = useState(
        new QueryClient({
            defaultOptions : {
                queries : {
                    refetchOnWindowFocus : false,
                    retry : false,
                }
            }
        })
    );
    
    // children에서 쿼리 데이터를 공유
    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'} />
        </QueryClientProvider>
    );
}

export default RQProvider;