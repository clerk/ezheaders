import { cookies } from "next/headers";
import type { AwaitedProp } from "./types";

type CookieParams = Parameters<AwaitedProp<typeof cookies, "get">>;
type CookieReturn = ReturnType<AwaitedProp<typeof cookies, "get">>;
type CookieFn = (...args: CookieParams) => Promise<CookieReturn>;

/**
 * An async function that allows you to read a specific HTTP incoming request cookie from within a Server Component.
 *
 * @example
 * // before:
 * import { cookies } from 'next/headers';
 * const cookieStore = await cookies();
 * const token = cookieStore.get('token');
 *
 * // after
 * import { cookie } from 'ezheaders';
 * const token = await cookie('token');
 */
export const cookie: CookieFn = (...args) => {
  return cookies().then((c) => c.get(...args));
};

/**
 * A drop-in replacement for the `cookies()` function that lets you finally use `cookies` as a variable name in your codebase.
 *
 * @example
 * // before:
 * import { cookies } from 'next/headers';
 * const cookieStore = await cookies();
 * const token = cookieStore.get('token');
 *
 * // after
 * import { getCookies } from 'ezheaders';
 * const cookies = await getCookies();
 * const token = cookies.get('token');
 */
export const getCookies = cookies;
