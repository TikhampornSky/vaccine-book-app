"use client"
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { removeBooking } from "@/redux/features/bookSlice"

export default function MyBooking() {
    const dispatch = useDispatch<AppDispatch>()
    const bookItem = useAppSelector((state) => state.bookSlice.bookItem)
    if (bookItem.firstName === "" && bookItem.lastName === "" && bookItem.sid === "" && bookItem.hospitalName === "" && bookItem.date === "" ) {
        return (
            <div className="m-20">
                <h1 className="mt-1 text-xl leading-6 text-gray-600"> No Vaccine Booking </h1>
            </div>
        )
    }

    return (
        <div className="m-20">
            <h1 className="mt-5 text-xl leading-6 text-gray-600"> Your booking information </h1>
            <div className="my-8 bg-blue-100 p-8">
                <p> Firstname: {bookItem.firstName} </p>
                <p> Lastname: {bookItem.lastName} </p>
                <p> SID: {bookItem.sid} </p>
                <p> Hospital Name: {bookItem.hospitalName} </p>
                <p> Date: {bookItem.date} </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
            onClick={() => dispatch(removeBooking(bookItem))}> Cancel Booking </button>
        </div>
    )
}