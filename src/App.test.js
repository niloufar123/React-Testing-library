import { render, screen ,fireEvent } from '@testing-library/react';

import App from './App';
import {replaceCamleWithSpaces} from './App'

test('button has correct initial color', () => {
  render(<App /> );

  //find an element with role button and text change to blue
  const colorButton=screen.getByRole('button',{name:'change to blue'});
  
  //expect the background color to be red
  expect(colorButton).toHaveStyle({background:'red'});
  //click button
  fireEvent.click(colorButton);
  //expect  the background color to be blue
  expect(colorButton).toHaveStyle({background:'blue'});

  //expect the text to be 'change to red'
  expect(colorButton.textContent).toBe('change to red')
});

test('initial conditions',()=>{
  render(<App/>)
  //check the button starts out enable
  const colorButton=screen.getByRole('button',{name:'change to blue'});
  expect(colorButton).toBeEnabled()

  //check the checkbox starts out unchecked
  const checkBox=screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked()

});

test('checked checkbox',()=>{
  render(<App />)

  //checked button disable when checked box
  const colorButton=screen.getByRole('button');

  const checkBox=screen.getByRole('checkbox',{name:'disabled button'});

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({background:'gray'})

fireEvent.click(checkBox)
expect(colorButton).toBeEnabled()

})

describe('spaces before camel-case capital letters',()=>{
  test('Works for no inner capital letter',()=>{
    expect(replaceCamleWithSpaces('Red')).toBe('Red')
  })
  test('Work for One inner capital letter',()=>{
    // expect(replaceCamleWithSpaces('MidnightBlue')),toBe('Midnight Blue')
    expect(replaceCamleWithSpaces('MidnightBlue')).toBe('Midnight Blue');

  })
  test('Works for multiple inner capital letter',()=>{
    expect(replaceCamleWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})