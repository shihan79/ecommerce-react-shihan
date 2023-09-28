import { configureStore } from '@reduxjs/toolkit'
import breadCrumSlices from './slices/breadCrumSlices'
import cartSlices from './slices/cartSlices'
  const store = configureStore({
  reducer: {
    breadCrum:breadCrumSlices,
     cart    :cartSlices
  },
})
export default store


