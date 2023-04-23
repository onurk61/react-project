import { screen, render } from "@testing-library/react";
import UsersList from "./UsersList";
import { MemoryRouter } from "react-router-dom";
import store from "../../../../store";
import { Provider } from "react-redux";

test("Check if there is ul element as wrapper", async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <UsersList />
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByRole("list")).toBeInTheDocument();
});
