import React from "react";

export const useserverInClient = (label: string) => {
    const clientHooks = Boolean(React.useState) || Boolean(React.useEffect)
    if (process.env.NODE_ENV !== "production") {
        if (clientHooks) {
            throw new Error(`${label} only works in Server Components`);
        }
    }
}