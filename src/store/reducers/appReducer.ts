import { Actions, actionsTypes, appState } from "../../types/app"


const initialState: appState = {
  products: [1,2,3,4],
  loading: false,
  errors: null,
}
export const appReducer = (state: appState = initialState, action: Actions  ): appState => {
  switch (action.type) {
    case actionsTypes.LOADING:
      return {
        ...state,
        loading: !state.loading
      }      
    case actionsTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default: return state
  }
}