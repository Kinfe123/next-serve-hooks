import { z } from "zod";
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";
import { cookieParser } from "./utils/parser";
import { useserverInClient } from "../middleware/serverInClient";

export function serverUserRequest() {
  useserverInClient("user-req");
  const incrementalCaches =
    staticGenerationAsyncStorage.getStore().incrementalCache;
  const requestHeaders = incrementalCaches.requestHeaders;

  if (!requestHeaders) {
    throw new Error("Request Header missing");
  }
  const { data: host, error } = z.string().safeParse(requestHeaders.host);
  if (error) {
    throw new Error("Host missed");
  }
  const { data: referer } = z.string().safeParse(requestHeaders.referer);
  if (error) {
    throw new Error("Referer  missed");
  }
  const isRsc = requestHeaders.rsc === "1" ? true : false;
  const userAgent = requestHeaders["user-agent"];
  const cookies = cookieParser(requestHeaders?.cookie as string);

  return { host, cookies, referer, isRsc, userAgent };
}
