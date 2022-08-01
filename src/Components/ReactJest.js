import React from 'react'

function ReactJest() {
  return (
    <div>
      <p>ReactJest</p>
      <div>
      <button data-testid="button" type="submit" disabled>submit</button>
       <a href="..." disabled>link</a>
       <input data-testid="input" type="text" disabled />
      </div>
      <div className='enabledInput' >
        <input type="text" data-testid = "enabledInput" />
      </div>
      <div>
        <span data-testid="not-empty"><span data-testid="empty"></span></span>
        <span data-testid="with-whitespace"> </span>
      </div>
      <div className='toBeInTheDocument' >
      <span data-testid="html-element"><span>Html Element</span></span>
      </div>
      <div className='inValid' >
      <input data-testid="no-aria-invalid" />
<input data-testid="aria-invalid" aria-invalid />
<input data-testid="aria-invalid-value" aria-invalid="true" />
<input data-testid="aria-invalid-false" aria-invalid="false" />

<form data-testid="valid-form">
  <input />
</form>

<form data-testid="invalid-form">
  <input required />
</form>
      </div>
      <div className='required' >
      <input data-testid="required-input" required />
<input data-testid="aria-required-input" aria-required="true" />
<input data-testid="conflicted-input" required aria-required="false" />
<input data-testid="aria-not-required-input" aria-required="false" />
<input data-testid="optional-input" />
<select data-testid="select" required></select>
<textarea data-testid="textarea" required></textarea>
<div data-testid="supported-role" role="tree" required></div>
<div data-testid="supported-role-aria" role="tree" aria-required="true"></div>
      </div>
      <div className='to be valid' >
      <input data-testid="no-aria-invalid" />
<input data-testid="aria-invalid" aria-invalid />
<input data-testid="aria-invalid-value" aria-invalid="true" />
<input data-testid="aria-invalid-false" aria-invalid="false" />

<form data-testid="valid-form">
  <input />
</form>

<form data-testid="invalid-form">
  <input required />
</form>
      </div >
      <div className='to have attribute' >
      <button data-testid="ok-button" type="submit" disabled>ok</button>
      </div >
      <div className='to have class' >
      <button data-testid="delete-button" class="btn extra btn-danger">
  Delete item
</button>
<button data-testid="no-classes">No Classes</button>

      </div>
      <div className='to have form values' >
      <form data-testid="login-form">
  <input type="text" name="username" value="jane.doe" />
  <input type="password" name="password" value="12345678" />
  <input type="checkbox" name="rememberMe" checked />
  <button type="submit">Sign in</button>
</form>
      </div>
    </div>
  )
}

export default ReactJest