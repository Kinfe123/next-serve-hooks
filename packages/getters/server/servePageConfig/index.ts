import { useserverInClient } from "../middleware/serverInClient";
import { getStoreConfig } from "../store";
import { basePath } from "../utils/base";

export function servePageConfig () {
    useserverInClient("page-config")

    const {pagePath, forceDynamic, forceStatic, dynamicShouldError, revalidate } = getStoreConfig("page-config")
    let dynamic = "auto";
    if (forceDynamic) {
        dynamic = "force-dynamic";
    } else if (forceStatic) {
        dynamic = "force-static";
    } else if (dynamicShouldError) {
        dynamic = "error";
    }

    return {dynamic , revalidate , basePath , pagePath}

    
}