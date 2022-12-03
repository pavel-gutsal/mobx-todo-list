import { createContext, useContext } from 'react';
import { Todo } from './TodoStore';

interface StoreContextData {
  todoList: Todo;
}

const TodoContext = createContext<StoreContextData>({} as StoreContextData);

type Props = React.PropsWithChildren<StoreContextData>;

export const StoreProvider = ({ children, todoList }:Props) => {

  return (
    <TodoContext.Provider value={{ todoList }}>
      { children }
    </TodoContext.Provider>
  )
}

export const useStores = (): StoreContextData => useContext(TodoContext);