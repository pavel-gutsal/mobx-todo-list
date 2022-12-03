import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ITodo } from "../type/ITodo";
import './TodoItem.styles.css';
import { useStores } from '../Store/StoreContext';

type Props = {
  content: ITodo;
}

export const TodoItem: React.FC<Props> = ({ content }) => {
  const { todoList } = useStores();
  const { deadline, title , description, completed, id } = content

  const handleChange = () => {
    todoList.toggleComplete(id)
  }

  const deleteHandler = () => {
    todoList.deleteTodo(id);
  }

  return (
    <div className="TodoItem">
      <div className="box">
        <div className="descr">
          <h2 className="title">{title}</h2>
          <p className="description">{ description }</p>
          <p className="time">{deadline}</p>
        </div>
        <div className="actions">
          <FormControlLabel
            value='start'
            control={
              <Switch
                color="primary"
                checked={completed}
                onChange={handleChange}
              />
            }
            label="Completed"
            labelPlacement="start"
          />
          <Button
            variant="outlined"
            onClick={deleteHandler}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
