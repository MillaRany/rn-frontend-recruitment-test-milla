import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("mostra o value passado", async () => {
    const { getByDisplayValue } = await render(
      <SearchBar value="Rick" onChangeText={jest.fn()} />,
    );
    expect(getByDisplayValue("Rick")).toBeTruthy();
  });

  it("chama onChangeText ao digitar", async () => {
    const onChangeText = jest.fn();
    const { getByLabelText } = await render(
      <SearchBar value="" onChangeText={onChangeText} />,
    );
    fireEvent.changeText(getByLabelText("Search characters"), "Morty");
    expect(onChangeText).toHaveBeenCalledWith("Morty");
  });

  it("tem placeholder", async () => {
    const { getByPlaceholderText } = await render(
      <SearchBar value="" onChangeText={jest.fn()} />,
    );
    expect(getByPlaceholderText("Search characters...")).toBeTruthy();
  });
});