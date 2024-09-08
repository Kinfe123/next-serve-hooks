import { useserverInClient } from "../middleware/serverInClient";
import { getStoreConfig } from "../store";

export function serveConfig () {
    useserverInClient("page-config")

    const {} = getStoreConfig("page-config")

    
}