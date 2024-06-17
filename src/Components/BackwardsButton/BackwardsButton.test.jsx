import { fireEvent, render, screen } from "@testing-library/react";
import BackwardsButton from "./BackwardsButton.component";
import { useState } from "react";

describe("BackwardsButton", () => {
  // Create a test component to use the useState hook
  const TestComponent = () => {
    const [id, setId] = useState(1);
    return <BackwardsButton id={id} setId={setId} />;
  };

  it("Does click event", () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText("Backwards"));
    // Add assertions here to verify the desired behavior
  });

  //********************************************************************************* */
  //Check if the value gets set to 1025
  it("Sets id to 1025 when id - 1 equals 0", () => {
    const setId = jest.fn();
    const id = 1;
    const TestComponent = () => {
      return <BackwardsButton id={id} setId={setId} />;
    };

    render(<TestComponent />);
    fireEvent.click(screen.getByText("Backwards"));

    // Check if setId was called with 1025
    expect(setId).toHaveBeenCalledWith(1025);
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
