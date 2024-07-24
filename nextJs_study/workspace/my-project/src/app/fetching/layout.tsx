import { ReactNode } from "react";
import RQProvider from "./_components/RQProvider";

function layout( { children } : { children : ReactNode }) {
    return (
        <RQProvider>
            <main>{children}</main>
        </RQProvider>
    );
}

export default layout;