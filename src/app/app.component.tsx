import { Form } from '../form/form.component';
import TodoList from '../TodoList/TodoList.component';
import { useStores } from '../Store/StoreContext';
import './app.styles.css';

export const App = () => {
  const { todoList } = useStores();
  
  return (
    <div className='app'>
      <Form />
      <TodoList
        todoList={todoList.todos}
      />
    </div>
  )
}