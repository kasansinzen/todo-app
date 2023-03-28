import React from 'react'

interface Props {
  title: string;
  handleDelete(): void;
}
const ItemTodo: React.FC<Props> = (props) => {
  const { title, handleDelete } = props;
  return (
    <div className="ItemTodo">
      <table>
        <tr>
          <td width={'200px'}>{title}</td>
          <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
      </table>
    </div>
  )
}

export default ItemTodo;