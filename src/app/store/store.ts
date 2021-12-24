import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type AppDispatch = typeof store.dispatch
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type RootState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

// export const store = configureStore({
//   reducer: {
//     activeMenuItem: () => console.log(''),
//   },
// })
