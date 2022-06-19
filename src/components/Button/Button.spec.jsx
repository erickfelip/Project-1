import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button>", () => {
  it('should render the button with the text "More posts"', () => {
    render(<Button text="More posts" />);
    const button = screen.getByRole("button", { name: /more posts/i });
    expect(button).toBeInTheDocument();
  });
  it("should call function on button click", () => {
    const clicked = jest.fn();
    render(<Button text="More posts" onClick={clicked} />);
    const button = screen.getByRole("button", { name: /more posts/i });
    fireEvent.click(button);
    expect(clicked).toHaveBeenCalledTimes(1);
  });
  it("should be enabled when disabled property is false", () => {
    render(<Button text="More posts" disabled={false} />);
    expect(screen.getByRole("button", { name: /more posts/i })).toBeEnabled();
  });
});
