import React from 'react';
import './App.scss';
import InputAddTodo from './components/InputAddTodo';
import ItemTodo from './components/ItemTodo';

const App: React.FC = () => {

  const [items, setItems] = React.useState<string[]>([]);

  const handleAddItem = (title: string) => {
    setItems([...items, title]);
  }
  const handleDeleteItem = (key: number) => {
    const newItems = items.filter((item, index) => index !== key);
    setItems(newItems);
  }

  return (
    <div className="App">
      <h4>To Do List</h4>
      <InputAddTodo handleAdd={handleAddItem} />
      <hr />
      {items.map((item, index) => (
        <ItemTodo key={index} title={item} handleDelete={() => handleDeleteItem(index)} />
      ))}
    </div>
  );
}

export default App;
