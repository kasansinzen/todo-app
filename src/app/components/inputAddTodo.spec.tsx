import { render, screen, fireEvent } from "@testing-library/react";
import InputAddTodo from "./InputAddTodo";


describe('[Component] InputAddTodo', () => {
  let inputEl: HTMLElement;
  let buttonEl: HTMLElement;
  let inputValueEl: HTMLInputElement;
  
  beforeEach(() => {
    render(<InputAddTodo />);
    inputEl = screen.getByTestId('inputTodo');
    buttonEl = screen.getByTestId('submitTodo');
    
    inputValueEl = inputEl.querySelector('input') as HTMLInputElement;
  });

  it('Give render When loaded Then defined', () => {
    const component = screen.getByTestId('InputAddTodo');
    expect(component).toBeInTheDocument();
  });

  it('Give enter "XXX" When enter Then value is cleared', async () => {
    fireEvent.input(inputValueEl, {target: {value: 'XXX'}});
    fireEvent.click(buttonEl);
    expect(inputValueEl.value).toBe('');
  });
});