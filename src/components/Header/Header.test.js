import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import user from "@testing-library/user-event";

test("check 2 buttons in Header", async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  await expect(screen.getAllByRole("button")).toHaveLength(2);
});

test("Check if Users List button works and is there", async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const usersListButton = screen.getByRole("button", { name: /users list/i });

  await expect(usersListButton).toBeInTheDocument();
  await expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
});


test("Check if Add User button works and is there", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  
    await expect(screen.getByRole("button", { name: /add user/i })).toBeInTheDocument();
    await expect(screen.getByRole('link', {name: /add user/i})).toHaveAttribute('href', '/addUser');
    await expect(screen.getByRole('link', {name: /users list/i})).toHaveAttribute('href', '/');
  });
