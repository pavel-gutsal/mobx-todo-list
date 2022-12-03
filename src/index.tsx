import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from './Store/StoreContext';
import { App } from './app/app.component';
import { Todo } from './Store/TodoStore';
import './index.css';

export const todoList = new Todo();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider todoList={todoList}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
