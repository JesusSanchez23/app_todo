export const todoReducer = (inicialState = [], action = {}) => {
  switch (action.type) {
    case "[TODO] add todo":
      return [...inicialState, action.payload];

    case "[TODO] delete todo":
      return inicialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] edit todo":
      return inicialState.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

    case "[TODO] complete todo":
      return inicialState.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completado: !todo.completado }
          : todo
      );
    default:
      return inicialState;
  }
};
