import React from 'react';

interface IAppContext {
  items: string[];
  setItems(items: string[]): void;
  handleAddItem(title: string): void;
  handleDeleteItem(key: number): void;
}
const AppContext = React.createContext<IAppContext>({
  items: [],
  setItems: (items: string[]) => undefined,
  handleAddItem: (title: string) => undefined,
  handleDeleteItem: (key: number) => undefined,
});

export const AppContextProvider: React.FC<any> = (props) => {
  const [items, setItems] = React.useState<string[]>([]);

  const handleAddItem = (title: string) => {
    setItems([...items, title]);
  }
  const handleDeleteItem = (key: number) => {
    const newItems = items.filter((item, index) => index !== key);
    setItems(newItems);
  }

  const context: IAppContext = {
    items: items,
    setItems: setItems,
    handleAddItem: handleAddItem,
    handleDeleteItem: handleDeleteItem,
  }

  return <AppContext.Provider value={context}>
    {props.children}
  </AppContext.Provider>
}

export default AppContext;