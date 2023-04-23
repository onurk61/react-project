import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

test("Is there any list in the home page", async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </MemoryRouter>
  );

  await pause();
  screen.debug();
  await pause();

  // because we are not sending request by using mock or setupServer, it will return as no Data and there will show up a button which will link user to addUser Page
  await expect(screen.getByRole("link")).toHaveAttribute("href", "/addUser");
});

const pause = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
