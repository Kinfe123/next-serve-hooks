import { staticGenerationAsyncStorage } from "next/dist/server/app-render/entry-base";
import { getStoreConfig } from "../store"
import { parsePath } from "./utils/path-parser";
export function servePathname(){
    const pathnameConfigs = getStoreConfig('pathname')
    const { urlPathname } = pathnameConfigs;
    const pathname = parsePath(urlPathname)
    return {...pathname}

}