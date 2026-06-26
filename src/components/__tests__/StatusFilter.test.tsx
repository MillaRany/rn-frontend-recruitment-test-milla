import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import StatusFilter from "../StatusFilter";

const props = { selected: "All" as const, onSelect: jest.fn() };

beforeEach(() => jest.clearAllMocks());

describe("StatusFilter", () => {
  it("renderiza os 4 chips", async () => {
    const { getByText } = await render(<StatusFilter {...props} />);
    expect(getByText("All")).toBeTruthy();
    expect(getByText("Alive")).toBeTruthy();
    expect(getByText("Dead")).toBeTruthy();
    expect(getByText("unknown")).toBeTruthy();
  });

  it("chama onSelect com o status certo ao clicar", async () => {
    const { getByLabelText } = await render(<StatusFilter {...props} />);
    fireEvent.press(getByLabelText("Filter by Dead"));
    expect(props.onSelect).toHaveBeenCalledWith("Dead");
  });

  it("marca o chip selecionado", async () => {
    const { getByLabelText } = await render(
      <StatusFilter {...props} selected="Alive" />,
    );
    const chip = getByLabelText("Filter by Alive");
    expect(chip.props.accessibilityState?.selected).toBe(true);
  });

  it("nao marca os outros chips", async () => {
    const { getByLabelText } = await render(
      <StatusFilter {...props} selected="Alive" />,
    );
    const chip = getByLabelText("Filter by Dead");
    expect(chip.props.accessibilityState?.selected).toBe(false);
  });
});