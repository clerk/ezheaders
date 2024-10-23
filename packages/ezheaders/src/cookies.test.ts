import { afterEach, describe, expect, it, vi } from "vitest";
import { createCookieHelpers } from "./cookies";
import { cookies as _cookies } from "next/headers";

describe("cookie helpers", () => {
  const mockedCookies = { get: vi.fn(), set: vi.fn() };
  const cookies = vi.fn(() => Promise.resolve(mockedCookies)) as unknown as typeof _cookies;

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("cookie", () => {
    it("reads a cookie", async () => {
      const { cookie } = createCookieHelpers(cookies);
      const mockCookies = await cookies();
      vi.mocked(mockCookies.get).mockReturnValue({ name: "testName", value: "testValue" });
      expect(await cookie("testName")).toStrictEqual(mockCookies.get("testName"));
      expect(mockCookies.get).toHaveBeenCalledWith("testName");
    });

    it("sets a cookie", async () => {
      const { cookie } = createCookieHelpers(cookies);
      const mockCookies = await cookies();
      await cookie("testName", "testValue", { path: "/" });
      expect(mockCookies.set).toHaveBeenCalledWith("testName", "testValue", { path: "/" });
    });
  });

  describe("getCookies", () => {
    it("returns the cookies function", async () => {
      const { getCookies } = createCookieHelpers(cookies);
      expect(await cookies()).toBe(await getCookies());
      expect(cookies).toHaveBeenCalled();
    });
  });
});
