import { fireEvent, render, screen } from "@testing-library/react";
import BackwardsButton from "./BackwardsButton.component";
import { useState } from "react";

describe(BackwardsButton, () => {
  it("Does click event", () => {
    render(<BackwardsButton />);
    screen.getByRole("button", { name: /Backwards/i });
  });
});
