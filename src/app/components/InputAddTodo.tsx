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
    <div className="InputAddTodo">
      <form onSubmit={handleSubmitAddTodo}>
        <Grid container spacing={2}>
          <Grid xs={10}>
            <TextField variant="standard" margin="none" fullWidth label="Your To Do" value={inputTodo} onChange={handleChangeInputTodo} />
          </Grid>
          <Grid xs={2}>
            <Button type="submit" variant="outlined">Enter</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default InputAddTodo;