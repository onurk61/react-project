import { render, screen } from "@testing-library/react";
import User from "./User";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../../store";
import { createServer } from "../../../../../test/server";

//We are sending request to firebase and checking if there is data or not. If there is data, it will return list with two buttons (edit and delete).
createServer([
  {
    path: "https://react-project-783fb-default-rtdb.firebaseio.com/users.json",
    res: (req, res, ctx) => {
      const query = req.url.searchParams.get("data");
      return {
        query,
      };
    },
  },
]);

test("Check if there is a List in the component", async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <User />
      </Provider>
    </MemoryRouter>
  );

  await pause();
  screen.debug();
  await pause();
  await expect(screen.getByRole("listitem")).toBeInTheDocument();
  await expect(screen.getByRole('button', { name: /delete/i})).toBeInTheDocument();
  await expect(screen.getByRole('button', { name: /edit/i})).toBeInTheDocument();
});

const pause = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
