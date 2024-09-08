import { staticGenerationAsyncStorage } from "next/dist/server/app-render/entry-base"
import { useserverInClient } from "../middleware/serverInClient"

export const getStoreConfig = (label: string) => {
    useserverInClient(label)
    const store = staticGenerationAsyncStorage.getStore()
    if(!store) {
        return null
    }
    return store
}