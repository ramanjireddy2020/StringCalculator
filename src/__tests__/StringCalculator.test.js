import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StringCalculator from "../components/StringCalculator";
describe("Test Case for String Calculator", () => {
  it("Should give the proper output", () => {
    render(<StringCalculator />);
    const inputBox = screen.getByRole("textbox");
    fireEvent.change(inputBox, { target: { value: "1,2,3" } });
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    const value = screen.getByText("Result: 6");
    expect(value).toBeInTheDocument();
    fireEvent.change(inputBox, { target: { value: "//*\n1*2" } });
    fireEvent.click(btn);
    const value2 = screen.getByText("Result: 3");
    expect(value2).toBeInTheDocument();
    fireEvent.change(inputBox, { target: { value: "//;\n1;2" } });
    fireEvent.click(btn);
    const value3 = screen.getByText("Result: 3");
    expect(value3).toBeInTheDocument();
    fireEvent.change(inputBox, { target: { value: "//;\n1;-2" } });
    fireEvent.click(btn);
    const errormsg = screen.getByText(/Negative numbers not allowed/i);
    expect(errormsg).toBeInTheDocument();
  });
});
