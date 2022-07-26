import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

//test block
test("increments counter", () => {
// render the component on virtual dom
render(<Counter />);

//select the elements you want to interact with
const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");
const decrementBtn = screen.getByTestId("decrement");

//interact with those elements
fireEvent.click(incrementBtn);
fireEvent.click(decrementBtn);
fireEvent.click(incrementBtn)

//assert the expected result
expect(counter).toHaveTextContent("1");
});