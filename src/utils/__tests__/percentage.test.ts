import { percentage } from "../percentage";

describe("percentage", () => {
  it("total 0 -> '0%'", () => {
    expect(percentage(5, 0)).toBe("0%");
  });

  it("100% quando value == total", () => {
    expect(percentage(10, 10)).toBe("100.0%");
  });

  it("metade", () => {
    expect(percentage(5, 10)).toBe("50.0%");
  });

  it("uma casa decimal", () => {
    expect(percentage(1, 3)).toBe("33.3%");
  });

  it("value 0", () => {
    expect(percentage(0, 10)).toBe("0.0%");
  });

  it("value maior que total nao quebra", () => {
    expect(percentage(15, 10)).toBe("150.0%");
  });

  it("0 e 0 -> '0%'", () => {
    expect(percentage(0, 0)).toBe("0%");
  });

  it("numeros grandes", () => {
    expect(percentage(999, 1000)).toBe("99.9%");
  });
});