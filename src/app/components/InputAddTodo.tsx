import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, TextField } from '@mui/material';

import AppContext from '../stores/app.context';

const InputAddTodo: React.FC = () => {

  const { handleAddItem } = React.useContext(AppContext);
  const [inputTodo, setInputTodo] = React.useState<string>('');

  const handleChangeInputTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value || '';
    setInputTodo(value);
  }
  const handleSubmitAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddItem(inputTodo);
    setInputTodo('');
  }

  return (
    <div data-testid="InputAddTodo" className="InputAddTodo">
      <form onSubmit={handleSubmitAddTodo}>
        <Grid container spacing={2}>
          <Grid xs={10}>
            <TextField data-testid="inputTodo" variant="standard" margin="none" fullWidth label="Your To Do" value={inputTodo} onChange={handleChangeInputTodo} required />
          </Grid>
          <Grid xs={2} data-testid="grid-button">
            <Button data-testid="submitTodo" type="submit" variant="outlined">Enter</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default InputAddTodo;