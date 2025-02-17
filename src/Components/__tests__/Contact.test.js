import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load the Contact us Component", () => {
  render(<ContactUs />);
  // Querying
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside Contact us Component", () => {
  render(<ContactUs />);
  // Querying
  const button = screen.getByRole("button");
  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should load input name inside Contact us Component", () => {
  render(<ContactUs />);
  // Querying
  const inputName = screen.getByPlaceholderText("name");
  //Assertion
  expect(inputName).toBeInTheDocument();
});

test ("Should load 2 input boxes length on the Contact Us Component", ()=>{
    render(<ContactUs />);
    // Querying 
    const inputBoxes= screen.getAllByRole("textbox");
    //Assertion
    expect(inputBoxes.length).toBe(2);
});
