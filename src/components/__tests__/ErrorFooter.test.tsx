import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ErrorFooter from "../ErrorFooter";

const props = { statusCode: 404, onRetry: jest.fn() };

beforeEach(() => jest.clearAllMocks());
jest.setTimeout(30000);

describe("ErrorFooter", () => {
  it("mostra a mensagem mapeada pro status code", async () => {
    const { getByText } = await render(<ErrorFooter statusCode={404} />);
    expect(getByText(/multiverse/)).toBeTruthy();
  });

  it("mostra a hint", async () => {
    const { getByText } = await render(<ErrorFooter statusCode={500} />);
    expect(getByText(/broke on the API side/)).toBeTruthy();
  });

  it("mostra o fallback se nao passar statusCode", async () => {
    const { getByText } = await render(<ErrorFooter />);
    expect(getByText(/Rick had too much/)).toBeTruthy();
  });

  it("mostra botao de retry se passar onRetry", async () => {
    const { getByLabelText } = await render(
      <ErrorFooter statusCode={500} onRetry={props.onRetry} />,
    );
    expect(getByLabelText("Try again")).toBeTruthy();
  });

  it("nao mostra botao de retry se nao passar onRetry", async () => {
    const { queryByLabelText } = await render(<ErrorFooter statusCode={500} />);
    expect(queryByLabelText("Try again")).toBeNull();
  });

  it("chama onRetry ao clicar no botao", async () => {
    const onRetry = jest.fn();
    const { getByLabelText } = await render(
      <ErrorFooter statusCode={500} onRetry={onRetry} />,
    );
    fireEvent.press(getByLabelText("Try again"));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});