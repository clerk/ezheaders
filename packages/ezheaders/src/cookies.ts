import { cookies } from "next/headers";
import type { AwaitedProp } from "./types";

type CookieGetParams = Parameters<AwaitedProp<typeof cookies, "get">>;
type CookieSetParams = Parameters<ReturnType<AwaitedProp<typeof cookies, "set">>["set"]>;
type CookieGetReturn = ReturnType<AwaitedProp<typeof cookies, "get">>;
type CookieSetReturn = ReturnType<AwaitedProp<typeof cookies, "set">>;

/**
 * An async function that allows you to read a specific HTTP incoming request cookie from within a Server Component.
 * If passed a value as the second argument, it will set the cookie with that value.
 *
 * @example Reading cookies
 * // before:
 * import { cookies } from 'next/headers';
 * const cookieStore = await cookies();
 * const token = cookieStore.get('token');
 *
 * // after
 * import { cookie } from 'ezheaders';
 * const token = await cookie('token');
 *
 * @example Setting cookies
 * import { cookie } from 'ezheaders';
 * await cookie('token', 'abc123');
 */
export async function cookie(name: CookieGetParams[0]): Promise<CookieGetReturn>;
export async function cookie(
  name: CookieGetParams[0],
  value: CookieSetParams[1],
  options?: CookieSetParams[2],
): Promise<CookieSetReturn>;
export async function cookie(...args: unknown[]): Promise<CookieGetReturn | CookieSetReturn> {
  const [nameOrCookie, value, opts] = args as [CookieGetParams[0], CookieSetParams[1], CookieSetParams[2]];
  const name = typeof nameOrCookie === "string" ? nameOrCookie : nameOrCookie.name;
  const cookieStore = await cookies();

  if (name && args.length >= 2) {
    // @ts-expect-error pass through all options
    return cookieStore.set(name, value, opts);
  }

  return cookieStore.get(name);
}

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
