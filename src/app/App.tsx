import { Container, Typography } from '@mui/material';
import React from 'react';

import './App.scss';
import InputAddTodo from './components/InputAddTodo';
import ItemTodos from './components/ItemTodos';
import { AppContextProvider } from './stores/app.context';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <div className="App">
        <Container maxWidth="sm" sx={{py: 4}}>
          <Typography variant="h4" gutterBottom>To Do List</Typography>
          <InputAddTodo />
          <hr />
          <ItemTodos />
        </Container>
      </div>
    </AppContextProvider>
  );
}

export default App;
