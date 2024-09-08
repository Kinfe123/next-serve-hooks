import {
  staticGenerationAsyncStorage,
  StaticGenerationStore,
} from "next/dist/client/components/static-generation-async-storage.external";
import { getStoreConfig } from "../store";
import { parsePath } from "../utils/path-parser";

export function serverParams() {
  const paramConfig = getStoreConfig("params");
  const { urlPathname } = paramConfig;
  const { query } = parsePath(urlPathname);
  const parseQueryString = (queryString: string): Record<string, string> => {
    const cleanQueryString = queryString.startsWith("?")
      ? queryString.slice(1)
      : queryString;

    return cleanQueryString.split("&").reduce(
      (acc, param) => {
        const [key, value] = param.split("=");
        if (key) {
          acc[decodeURIComponent(key)] = decodeURIComponent(value || "");
        }
        return acc;
      },
      {} as Record<string, string>
    );
  };
  const params = parseQueryString(query);
  return {
    searchParams: {
      get: (key: string): string | undefined => {
        return params[key];
      },
      getAll: (): Record<string, string> => {
        return params;
      },
    },
  };
}
