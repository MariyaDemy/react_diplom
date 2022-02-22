
export const selectTodos = (state) => state.todos;

export const countTodos = (state) => state.todos.filter((item) => item.completed === true);


