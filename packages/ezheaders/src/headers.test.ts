import { afterEach, describe, expect, it, vi } from "vitest";
import { createHeaderHelpers } from "./headers";
import { headers as _headers } from "next/headers";

describe("header helpers", () => {
  const mockedHeaders = { get: vi.fn() };
  const headers = vi.fn(() => Promise.resolve(mockedHeaders)) as unknown as typeof _headers;

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("header", () => {
    it("reads a header", async () => {
      const { header } = createHeaderHelpers(headers);
      const mockCookies = await headers();
      vi.mocked(mockCookies.get).mockReturnValue("testValue");
      expect(await header("testName")).toStrictEqual(mockCookies.get("testName"));
      expect(mockCookies.get).toHaveBeenCalledWith("testName");
    });
  });

  describe("getHeaders", () => {
    it("returns the headers function", async () => {
      const { getHeaders } = createHeaderHelpers(headers);
      expect(await headers()).toBe(await getHeaders());
      expect(headers).toHaveBeenCalled();
    });
  });
});
