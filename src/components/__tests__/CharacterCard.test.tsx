import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CharacterCard from "../CharacterCard";

const character = {
  id: "1",
  name: "Rick Sanchez",
  status: "Alive" as const,
  species: "Human",
  type: "",
  gender: "Male",
  image: "https://example.com/rick.png",
  origin: { name: "Earth (C-137)" },
  location: { name: "Citadel of Ricks" },
  episode: [],
  created: "2017-11-10T12:00:00Z",
};

const props = {
  character,
  isFavorite: false,
  onPress: jest.fn(),
  onToggleFavorite: jest.fn(),
};

beforeEach(() => {
  jest.useFakeTimers();
  jest.clearAllMocks();
});

afterEach(() => jest.useRealTimers());

describe("CharacterCard", () => {
  it("mostra o nome", async () => {
    const { getByText } = await render(<CharacterCard {...props} />);
    expect(getByText("Rick Sanchez")).toBeTruthy();
  });

  it("mostra status e species", async () => {
    const { getByText } = await render(<CharacterCard {...props} />);
    expect(getByText(/Alive/)).toBeTruthy();
    expect(getByText(/Human/)).toBeTruthy();
  });

  it("mostra a origin", async () => {
    const { getByText } = await render(<CharacterCard {...props} />);
    expect(getByText("Earth (C-137)")).toBeTruthy();
  });

  it("tap unico chama onPress", async () => {
    const { getByLabelText } = await render(<CharacterCard {...props} />);
    await fireEvent.press(getByLabelText("Rick Sanchez"));
    jest.advanceTimersByTime(400);
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it("botao de favorito chama onToggleFavorite", async () => {
    const { getByLabelText } = await render(<CharacterCard {...props} />);
    await fireEvent.press(getByLabelText("Add to favorites"));
    jest.advanceTimersByTime(400);
    expect(props.onToggleFavorite).toHaveBeenCalledTimes(1);
    expect(props.onPress).not.toHaveBeenCalled();
  });

  it("label muda pra 'Remove from favorites' quando ja e favorito", async () => {
    const { getByLabelText } = await render(
      <CharacterCard {...props} isFavorite={true} />,
    );
    expect(getByLabelText("Remove from favorites")).toBeTruthy();
  });
});