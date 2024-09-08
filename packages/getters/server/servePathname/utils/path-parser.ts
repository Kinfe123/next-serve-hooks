export function parsePath(path: string) {
  const hashIndex = path.indexOf("#");
  const queryIndex = path.indexOf("?");
  const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);

  if (hasQuery || hashIndex > -1) {
    return {
      pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
      query: hasQuery
        ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined)
        : "",
      hash: hashIndex > -1 ? path.slice(hashIndex) : "",
    };
  }

  return { pathname: path, query: "", hash: "" };
}
export function pathHasPrefix(path: string, prefix: string) {
  if (typeof path !== "string") {
    return false;
  }

  const { pathname } = parsePath(path);
  return pathname === prefix || pathname.startsWith(prefix + "/");
}
