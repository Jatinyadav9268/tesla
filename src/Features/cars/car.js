import { createSlice } from "@reduxjs/toolkit"
import { createElement } from "react"

const initialState = {
    cars: ["Model S","Model Y","Model 3","Model X"]
}
const car = createSlice({
    name: "car",
    initialState,
    reducers:{}
})

export const selectCars = state => state.cars

export default car.reducer