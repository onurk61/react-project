import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Footer text check", async () => {
  render(<Footer />);

  const footerText = screen.getByRole("heading", {
    name: /react project \- onur kanca/i,
  });
  expect(footerText).toBeInTheDocument();
});
