import { render, screen } from '@testing-library/react';
import App from './App';
import { unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('change value when clicked', () => {
  const onChange = jest.fn();
  act(() => {
    render(<App onChange={onChange} />, container);
  });

  const button = document.getElementById('buttonClick');
  expect(button.innerHTML).toBe("Click me");
  
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(document.getElementById('count').innerHTML).toBe('Count : 1');

  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });
  expect(onChange).toHaveBeenCalledTimes(6);
});

