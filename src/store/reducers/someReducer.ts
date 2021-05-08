interface appState {
  loading: boolean;
  errors: null | string;
}
const initialState: appState = {
  loading: false,
  errors: null,
}
const SOME_ACTION = 'SOME-ACTION'
const someAction = () => ({ type: SOME_ACTION })


export const someReducer = (state = initialState, action: any): appState => {
  switch (action.type) {
    case SOME_ACTION:
      return state
    default: return state
  }
}