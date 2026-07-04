import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

export type CartItem = {
  slug: string
  title: string
  image: string
  variant: string
  price: string
  quantity: number
}

type CartState = {
  items: CartItem[]
  isDrawerOpen: boolean
}

const initialState: CartState = {
  items: [],
  isDrawerOpen: false,
}

function parsePrice(price: string): number {
  return Number(price.replace(/[^0-9.]/g, '')) || 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'> & { quantity: number }>) => {
      const { slug, variant, quantity } = action.payload
      const existing = state.items.find((item) => item.slug === slug && item.variant === variant)

      if (existing) {
        existing.quantity += quantity
      } else {
        state.items.push({ ...action.payload })
      }

      state.isDrawerOpen = true
    },
    removeItem: (state, action: PayloadAction<{ slug: string; variant: string }>) => {
      state.items = state.items.filter(
        (item) => !(item.slug === action.payload.slug && item.variant === action.payload.variant),
      )
    },
    incrementItem: (state, action: PayloadAction<{ slug: string; variant: string }>) => {
      const item = state.items.find(
        (item) => item.slug === action.payload.slug && item.variant === action.payload.variant,
      )
      if (item) item.quantity += 1
    },
    decrementItem: (state, action: PayloadAction<{ slug: string; variant: string }>) => {
      const item = state.items.find(
        (item) => item.slug === action.payload.slug && item.variant === action.payload.variant,
      )
      if (item) item.quantity = Math.max(1, item.quantity - 1)
    },
    openDrawer: (state) => {
      state.isDrawerOpen = true
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false
    },
  },
})

export const { addItem, removeItem, incrementItem, decrementItem, openDrawer, closeDrawer } =
  cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectIsCartDrawerOpen = (state: RootState) => state.cart.isDrawerOpen
export const selectCartItemCount = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectCartSubtotal = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0)

export default cartSlice.reducer
