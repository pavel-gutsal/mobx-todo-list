import { ITodo } from '../type/ITodo';
import { TodoItem } from '../TodoItem/TodoItem.component'
import './TodoList.styles.css';
import { observer } from 'mobx-react-lite';

type Props = {
  todoList: ITodo[];
}

const TodoList: React.FC<Props> = ({ todoList }) => {

  return (
    <div className="TodoList">
      {
        todoList && todoList.length > 0 && (
          todoList.map(el => (
            <TodoItem content={el} key={el.id} />
          ))
        )
      }
    </div>
  )
}

export default observer(TodoList);