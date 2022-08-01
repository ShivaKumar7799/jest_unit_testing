import { render, screen } from "@testing-library/react";
import ReactJest from "./ReactJest"

test("button disabled", () => {

  render(<ReactJest />);

  expect(screen.getByTestId('button')).toBeDisabled()
  expect(screen.getByText('link')).not.toBeDisabled()
  expect(screen.getByTestId('input')).toBeDisabled()
})

test("input enabled", () => {
  render(<ReactJest />)
  expect(screen.getByTestId("enabledInput")).toBeEnabled()
})

test("to be empty dom element", () => {
  render(<ReactJest />)
  expect(screen.getByTestId('empty')).toBeEmptyDOMElement()
  expect(screen.getByTestId('not-empty')).not.toBeEmptyDOMElement()
}) 

test("to be in the document", () => {
  render(<ReactJest />)
  expect(screen.getByTestId('html-element'),).toBeInTheDocument()
})

// test("to be invalid", () => {
//   render(<ReactJest />)
//   expect(screen.getByTestId('no-aria-invalid')).not.toBeInvalid()
// expect(screen.getByTestId('aria-invalid')).toBeInvalid()
// expect(screen.getByTestId('aria-invalid-value')).toBeInvalid()
// expect(screen.getByTestId('aria-invalid-false')).not.toBeInvalid()

// expect(screen.getByTestId('valid-form')).not.toBeInvalid()
// expect(screen.getByTestId('invalid-form')).toBeInvalid()
// })


test("tobe Required", () => {
  render(<ReactJest />)
  expect(screen.getByTestId('required-input')).toBeRequired()
expect(screen.getByTestId('aria-required-input')).toBeRequired()
expect(screen.getByTestId('conflicted-input')).toBeRequired()
expect(screen.getByTestId('aria-not-required-input')).not.toBeRequired()
expect(screen.getByTestId('optional-input')).not.toBeRequired()
expect(screen.getByTestId('select')).toBeRequired()
expect(screen.getByTestId('textarea')).toBeRequired()
expect(screen.getByTestId('supported-role')).not.toBeRequired()
expect(screen.getByTestId('supported-role-aria')).toBeRequired()
})

// test("tobe valid", () => {
//   render(<ReactJest />)
//   expect(screen.getByTestId('no-aria-invalid')).toBeValid()
//   expect(screen.getByTestId('aria-invalid')).not.toBeValid()
//   expect(screen.getByTestId('aria-invalid-value')).not.toBeValid()
//   expect(screen.getByTestId('aria-invalid-false')).toBeValid()
  
//   expect(screen.getByTestId('valid-form')).toBeValid()
//   expect(screen.getByTestId('invalid-form')).not.toBeValid()
// })

test("to have attribute", () => {
  render(<ReactJest />)
  const button = screen.getByTestId('ok-button')

expect(button).toHaveAttribute('disabled')
expect(button).toHaveAttribute('type', 'submit')
expect(button).not.toHaveAttribute('type', 'button')

expect(button).toHaveAttribute('type', expect.stringContaining('sub'))
expect(button).toHaveAttribute('type', expect.not.stringContaining('but'))
})

test("to have class", () => {
  render(<ReactJest />)
  const deleteButton = screen.getByTestId('delete-button')
  const noClasses = screen.getByTestId('no-classes')
  
  expect(deleteButton).toHaveClass('extra')
  expect(deleteButton).toHaveClass('btn-danger btn')
  expect(deleteButton).toHaveClass('btn-danger', 'btn')
  expect(deleteButton).not.toHaveClass('btn-link')
  
  expect(deleteButton).toHaveClass('btn-danger extra btn', {exact: true}) // to check if the element has EXACTLY a set of classes
  expect(deleteButton).not.toHaveClass('btn-danger extra', {exact: true}) // if it has more than expected it is going to fail
  
  expect(noClasses).not.toHaveClass()
})

test("to have form values", () => {
  render(<ReactJest />)
  expect(screen.getByTestId('login-form')).toHaveFormValues({
    username: 'jane.doe',
    rememberMe: true,
  })
})