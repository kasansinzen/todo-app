import React from 'react';
import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import AppContext from '../stores/app.context';

const ItemTodos: React.FC = () => {
  const { items, handleDeleteItem } = React.useContext(AppContext)
  return (
    <List>
      {items.map((item, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteItem(index)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}

export default ItemTodos;
