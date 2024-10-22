import type { AwaitedProp } from "./types";
import { headers } from "next/headers";

type HeaderParams = Parameters<AwaitedProp<typeof headers, "get">>;
type HeaderReturn = ReturnType<AwaitedProp<typeof headers, "get">>;
type HeaderFn = (...args: HeaderParams) => Promise<HeaderReturn>;

/**
 * An async function that allows you to read a specific HTTP incoming request header from within a Server Component.
 *
 * @example
 * // before:
 * import { headers } from 'next/headers';
 * const headerStore = await headers();
 * const token = headerStore.get('token');
 *
 * // after
 * import { header } from 'ezheaders';
 * const token = await header('token');
 */
export const header: HeaderFn = (...args) => {
  return headers().then((h) => h.get(...args));
};

/**
 * A drop-in replacement for the `headers()` function that lets you finally use `headers` as a variable name in your codebase.
 *
 * @example
 * // before:
 * import { headers } from 'next/headers';
 * const headerStore = await headers();
 * const token = headerStore.get('token');
 *
 * // after
 * import { getHeaders } from 'ezheaders';
 * const headers = await getHeaders();
 * const token = headers.get('token');
 */
export const getHeaders = headers;