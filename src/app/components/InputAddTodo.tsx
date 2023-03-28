import React from 'react';

interface Props {
  handleAdd(title: string): void;
}
const InputAddTodo: React.FC<Props> = (props) => {

  const [inputTodo, setInputTodo] = React.useState<string>('');

  const handleChangeInputTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value || '';
    setInputTodo(value);
  }
  const handleSubmitAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleAdd(inputTodo);
    setInputTodo('');
  }

  return (
    <div className="InputAddTodo">
      <form onSubmit={handleSubmitAddTodo}>
        <input type="text" value={inputTodo} onChange={handleChangeInputTodo} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default InputAddTodo;