import * as React from "react";

interface Todo {
  id: number;
  text: string;
}
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

const TodoApp = () => {
  function reducer(state: Todo[], action: ActionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  }
  const newTodo = React.useRef<HTMLInputElement>(null);
  const [todos, dispatch] = React.useReducer(reducer, []);
  const addTodo = React.useCallback(() => {
    if (newTodo.current) {
      dispatch({
        type: "ADD",
        text: newTodo.current.value,
      });
    }
  }, []);

  return (
    <div>
      <input type="text" ref={newTodo} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <li>
            {todo.text}{" "}
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
              X
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
