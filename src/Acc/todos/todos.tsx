import { useCallback, useReducer, useRef } from "react";

interface Todo {
  id: number;
  text: string;
}

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };
export default function Todos() {
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
  const [todos, dispatch] = useReducer(reducer, []);

  const newTodoRef = useRef<HTMLInputElement>(null);
  const addTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
    }
  }, []);
  return (
    <header className="App-header">
      <input type="text" ref={newTodoRef} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
            {" "}
            X{" "}
          </button>
        </div>
      ))}
    </header>
  );
}
