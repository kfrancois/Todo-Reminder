export const initialState = {
  activeRoute: '/todo'
};

export const route = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CHANGE_ROUTE':
      return {
        ...state,
        activeRoute: action.payload
      };
    default:
      return state;
  }
};
