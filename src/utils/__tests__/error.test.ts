import { ApolloError } from "@apollo/client";
import { extractStatusCode } from "../error";

describe("extractStatusCode", () => {
  it("pega o statusCode do networkError", () => {
    const error = new ApolloError({
      networkError: { statusCode: 404 } as any,
    });
    expect(extractStatusCode(error)).toBe(404);
  });

  it("retorna null se networkError nao tem statusCode", () => {
    const error = new ApolloError({ networkError: {} as any });
    expect(extractStatusCode(error)).toBeNull();
  });

  it("retorna null se nao tem networkError", () => {
    const error = new ApolloError({});
    expect(extractStatusCode(error)).toBeNull();
  });

  it("retorna null pra um erro qualquer", () => {
    expect(extractStatusCode(new Error("boom"))).toBeNull();
  });

  it("retorna null pra null e undefined", () => {
    expect(extractStatusCode(null)).toBeNull();
    expect(extractStatusCode(undefined)).toBeNull();
  });
});