import { mapErrorMessage } from "../errorMapper";

describe("mapErrorMessage", () => {
  it("400 -> Council of Ricks", () => {
    const r = mapErrorMessage(400);
    expect(r.message).toContain("Council of Ricks");
    expect(r.hint).toBeTruthy();
  });

  it("404 -> multiverse", () => {
    const r = mapErrorMessage(404);
    expect(r.message).toContain("multiverse");
    expect(r.hint).toBeTruthy();
  });

  it("429 -> rate-limited", () => {
    expect(mapErrorMessage(429).message).toContain("rate-limited");
  });

  it("500 -> portal fluid", () => {
    expect(mapErrorMessage(500).message).toContain("portal fluid");
  });

  it("503 -> maintenance", () => {
    expect(mapErrorMessage(503).message).toContain("maintenance");
  });

  it("codigo desconhecido cai no fallback", () => {
    expect(mapErrorMessage(999).message).toContain("Rick had too much");
  });

  it("null cai no fallback tambem", () => {
    expect(mapErrorMessage(null).message).toContain("Rick had too much");
  });

  it("undefined idem", () => {
    expect(mapErrorMessage(undefined).message).toContain("Rick had too much");
  });

  it("sempre tem message e hint, nao importa o codigo", () => {
    for (const code of [400, 404, 429, 500, 503, 999, null, undefined]) {
      const r = mapErrorMessage(code);
      expect(typeof r.message).toBe("string");
      expect(typeof r.hint).toBe("string");
      expect(r.message.length).toBeGreaterThan(0);
      expect(r.hint.length).toBeGreaterThan(0);
    }
  });
});