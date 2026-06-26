import React from "react";
import { render } from "@testing-library/react-native";
import ListFooter from "../ListFooter";

describe("ListFooter", () => {
  it("mostra loading quando loading=true", async () => {
    const { getByTestId } = await render(
      <ListFooter loading={true} error={false} hasData={true} />,
    );
    expect(getByTestId("expo-image")).toBeTruthy();
  });

  it("mostra erro quando tem error e data", async () => {
    const { getByText } = await render(
      <ListFooter loading={false} error={true} hasData={true} statusCode={404} />,
    );
    expect(getByText(/multiverse/)).toBeTruthy();
  });

  it("nao renderiza nada se ta tudo falso", async () => {
    const { toJSON } = await render(
      <ListFooter loading={false} error={false} hasData={true} />,
    );
    expect(toJSON()).toBeNull();
  });

  it("nao renderiza nada se tem erro mas sem data", async () => {
    const { toJSON } = await render(
      <ListFooter loading={false} error={true} hasData={false} />,
    );
    expect(toJSON()).toBeNull();
  });

  it("loading tem prioridade sobre error", async () => {
    const { getByTestId } = await render(
      <ListFooter loading={true} error={true} hasData={true} />,
    );
    expect(getByTestId("expo-image")).toBeTruthy();
  });
});