export interface appState {
  products: any[],
  loading: boolean;
  errors: null | string;
}
interface Loading {
  type: actionsTypes.LOADING,
}
interface GetProducts {
  type: actionsTypes.GET_PRODUCTS,
  payload: any[],
}
export enum actionsTypes { 
  LOADING = 'LOADING',
  GET_PRODUCTS = 'GET_PRODUCTS',
}
export type Actions = Loading | GetProducts
const loading = (): Loading => ({type: actionsTypes.LOADING})

const getProducts = (payload: any[]): GetProducts => ({type: actionsTypes.GET_PRODUCTS,payload})