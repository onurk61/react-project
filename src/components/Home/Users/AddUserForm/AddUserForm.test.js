import { render, screen } from "@testing-library/react";
import AddUserForm from "./AddUserForm";
import store from "../../../../store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../../../test/server";

createServer([
  {
    path: "https://react-project-783fb-default-rtdb.firebaseio.com/users.json",
    method: "post",
    res: (req, res, ctx) => {
      return {
        item: [{}],
      };
    },
  },
]);

test("is form include two buttons and 9 labels", async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <AddUserForm />
      </Provider>
    </MemoryRouter>
  );
  await pause();
  screen.debug();
  await pause();
  await expect(screen.getAllByRole("button")).toHaveLength(2);
  await expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
  await expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
  await expect(screen.getByLabelText(/address 1/i)).toBeInTheDocument();
  await expect(screen.getByLabelText(/address 2/i)).toBeInTheDocument();
  await expect(screen.getByLabelText(/town/i)).toBeInTheDocument();
  await expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  await expect(screen.getByLabelText(/region/i)).toBeInTheDocument();
  await expect(screen.getByLabelText(/contact number/i)).toBeInTheDocument();
  await expect(screen.getByLabelText(/post code/i)).toBeInTheDocument();
});

test("check if there is 9 input as well", async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <AddUserForm />
      </Provider>
    </MemoryRouter>
  );

  await pause();
  screen.debug();
  await pause();
  await expect(
    screen.getByRole("textbox", {
      name: /town/i,
    })
  ).toBeInTheDocument();

  await expect(screen.getAllByRole("textbox")).toHaveLength(9);
});

const pause = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
