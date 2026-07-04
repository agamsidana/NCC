import { combineReducers } from '@reduxjs/toolkit'

/**
 * Add feature slice reducers here as they're created, e.g.:
 * import cartReducer from '../modules/cart/cartSlice'
 * combineReducers({ cart: cartReducer })
 */
const rootReducer = combineReducers({})

export type RootReducer = typeof rootReducer

export default rootReducer
