import { render, screen ,fireEvent } from '@testing-library/react';

import App from './App';

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


