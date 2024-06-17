import ForwardButton from "./ForwardsButton.component";
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";

describe("ForwardButton", () => {
  const TempComponent = () => {
    const [id, setId] = useState(1024);
    return <ForwardButton id={id} setId={setId} />;
  };

  it("Does it click", () => {
    render(<TempComponent />);
    fireEvent.click(screen.getByText("Forwards"));
  });

  it("id goes over 1025 and sets id to 1", () => {
    const setId = jest.fn();
    const id = 1025;
    const TempComponent = () => {
      return <ForwardButton id={id} setId={setId} />;
    };

    render(<TempComponent />);
    fireEvent.click(screen.getByText("Forwards"));
    expect(setId).toHaveBeenCalledWith(1);
  });
});
