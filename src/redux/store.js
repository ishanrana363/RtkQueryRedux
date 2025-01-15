import { configureStore } from '@reduxjs/toolkit';
import userApi from '../redux/features/users/userApi'; // Adjust the path as needed

const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

export default store;