import * as React from 'react';
import AnimateHeight from 'react-animate-height';
import { connect } from 'react-redux';
import TodoInputComponent from '../../components/todo-input.component';
import TodoListComponent from '../../components/todo-list.component';
import { TodoItem } from '../../types/todo-item';
import './todo.container.less';

export interface ITodoContainerProps {
  todos: TodoItem[];
  addTodo: (text: string) => void;
  removeTodo: (index: number) => void;
}

export class TodoContainer extends React.Component<ITodoContainerProps> {
  public render() {
    const { todos, addTodo, removeTodo } = this.props;
    const todosEmpty = todos.length === 0;
    return (
      <AnimateHeight
        duration={500}
        height={'auto'}
        className="todo-list--container"
      >
        <h1 className="text-center">Your todo's</h1>
        {!todosEmpty && (
          <TodoListComponent data={todos} removeItem={removeTodo} />
        )}

        <TodoInputComponent onSubmit={addTodo} />
      </AnimateHeight>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todo.todos
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (text: string) =>
      dispatch({
        payload: text,
        type: 'ADD_TODO'
      }),
    removeTodo: (index: number) =>
      dispatch({
        payload: index,
        type: 'REMOVE_TODO'
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
