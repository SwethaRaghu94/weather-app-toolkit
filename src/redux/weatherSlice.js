import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: null,
  error: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
      state.error = false;
    },
    setError: (state, action) => {
      state.error = true;
    },
  },
});

export const { setWeatherData, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
