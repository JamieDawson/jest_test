import { fireEvent, render, screen } from "@testing-library/react";
import BackwardsButton from "./BackwardsButton.component";
import { useState } from "react";

describe("BackwardsButton", () => {
  // Create a test component to use the useState hook
  const TestComponent = () => {
    const [id, setId] = useState(0);
    return <BackwardsButton id={id} setId={setId} />;
  };

  it("Does click event", () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText("Backwards"));
    // Add assertions here to verify the desired behavior
  });
});

//Click ability!
/*
import { fireEvent, render, screen } from "@testing-library/react";
import BackwardsButton from "./BackwardsButton.component";
import { useState } from "react";

describe(BackwardsButton, () => {
  it("Does click event", () => {
    render(<BackwardsButton />);
    screen.getByRole("button", { name: /Backwards/i });
  });
});
*/
