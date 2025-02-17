import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import "@testing-library/jest-dom";

it("Should render login button in my Header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login ✅" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render Cart (0) in my Header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const cart = screen.getByRole("button", { name: "Cart 🛒🛒 (0)" });
  // const cart = screen.getByText("Cart 🛒🛒 (0)");
  // We can use Regex to match whether cart can have items on it to test whether it is rendered or not
  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
});

it("Should change Login to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login ✅" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout ❌" });
  expect(logoutButton).toBeInTheDocument();
});
