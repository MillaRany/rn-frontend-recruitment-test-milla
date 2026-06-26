import { countBy, topEntries } from "../stats";

describe("countBy", () => {
  it("conta por status", () => {
    const items = [
      { status: "Alive", other: "x" },
      { status: "Dead", other: "y" },
      { status: "Alive", other: "z" },
    ];
    expect(countBy(items, "status")).toEqual({ Alive: 2, Dead: 1 });
  });

  it("conta por species", () => {
    const items = [
      { species: "Human", x: 1 },
      { species: "Alien", x: 2 },
      { species: "Human", x: 3 },
      { species: "Robot", x: 4 },
    ];
    expect(countBy(items, "species")).toEqual({ Human: 2, Alien: 1, Robot: 1 });
  });

  it("lista vazia -> objeto vazio", () => {
    expect(countBy([], "status")).toEqual({});
  });
});

describe("topEntries", () => {
  it("ordena por contagem desc e limita a n", () => {
    const counts = { Human: 10, Alien: 3, Robot: 7, Poopybutthole: 1 };
    expect(topEntries(counts, 3)).toEqual([
      ["Human", 10],
      ["Robot", 7],
      ["Alien", 3],
    ]);
  });

  it("n maior que tamanho retorna tudo", () => {
    const counts = { a: 1, b: 2 };
    expect(topEntries(counts, 5)).toEqual([
      ["b", 2],
      ["a", 1],
    ]);
  });

  it("objeto vazio -> array vazio", () => {
    expect(topEntries({}, 5)).toEqual([]);
  });
});